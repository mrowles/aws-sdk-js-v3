
import { OpsWorksCM } from "../OpsWorksCM.ts";
import { OpsWorksCMClient } from "../OpsWorksCMClient.ts";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand.ts";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: OpsWorksCMClient,
  input: DescribeEventsCommandInput,
  ...args: any
): Promise<DescribeEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventsCommand(input, ...args));
};
const makePagedRequest = async (
  client: OpsWorksCM,
  input: DescribeEventsCommandInput,
  ...args: any
): Promise<DescribeEventsCommandOutput> => {
  // @ts-ignore
  return await client.describeEvents(input, ...args);
};
export async function* describeEventsPaginate(
  config: OpsWorksCMPaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeEventsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpsWorksCM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpsWorksCMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpsWorksCM | OpsWorksCMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
