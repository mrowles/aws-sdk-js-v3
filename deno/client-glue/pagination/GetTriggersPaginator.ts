
import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import { GetTriggersCommand, GetTriggersCommandInput, GetTriggersCommandOutput } from "../commands/GetTriggersCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetTriggersCommandInput,
  ...args: any
): Promise<GetTriggersCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTriggersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: GetTriggersCommandInput,
  ...args: any
): Promise<GetTriggersCommandOutput> => {
  // @ts-ignore
  return await client.getTriggers(input, ...args);
};
export async function* getTriggersPaginate(
  config: GluePaginationConfiguration,
  input: GetTriggersCommandInput,
  ...additionalArguments: any
): Paginator<GetTriggersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetTriggersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
