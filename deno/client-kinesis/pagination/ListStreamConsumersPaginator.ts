
import { Kinesis } from "../Kinesis.ts";
import { KinesisClient } from "../KinesisClient.ts";
import {
  ListStreamConsumersCommand,
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
} from "../commands/ListStreamConsumersCommand.ts";
import { KinesisPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: KinesisClient,
  input: ListStreamConsumersCommandInput,
  ...args: any
): Promise<ListStreamConsumersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamConsumersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Kinesis,
  input: ListStreamConsumersCommandInput,
  ...args: any
): Promise<ListStreamConsumersCommandOutput> => {
  // @ts-ignore
  return await client.listStreamConsumers(input, ...args);
};
export async function* listStreamConsumersPaginate(
  config: KinesisPaginationConfiguration,
  input: ListStreamConsumersCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamConsumersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListStreamConsumersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Kinesis) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KinesisClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kinesis | KinesisClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
