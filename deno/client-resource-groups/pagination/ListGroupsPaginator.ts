
import { ResourceGroups } from "../ResourceGroups.ts";
import { ResourceGroupsClient } from "../ResourceGroupsClient.ts";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand.ts";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ResourceGroupsClient,
  input: ListGroupsCommandInput,
  ...args: any
): Promise<ListGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ResourceGroups,
  input: ListGroupsCommandInput,
  ...args: any
): Promise<ListGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listGroups(input, ...args);
};
export async function* listGroupsPaginate(
  config: ResourceGroupsPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListGroupsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ResourceGroups) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResourceGroupsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ResourceGroups | ResourceGroupsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
