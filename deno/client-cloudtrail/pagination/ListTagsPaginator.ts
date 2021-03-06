
import { CloudTrail } from "../CloudTrail.ts";
import { CloudTrailClient } from "../CloudTrailClient.ts";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand.ts";
import { CloudTrailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudTrailClient,
  input: ListTagsCommandInput,
  ...args: any
): Promise<ListTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudTrail,
  input: ListTagsCommandInput,
  ...args: any
): Promise<ListTagsCommandOutput> => {
  // @ts-ignore
  return await client.listTags(input, ...args);
};
export async function* listTagsPaginate(
  config: CloudTrailPaginationConfiguration,
  input: ListTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTagsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof CloudTrail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudTrailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudTrail | CloudTrailClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
