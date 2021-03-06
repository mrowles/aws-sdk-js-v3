
import { NetworkManager } from "../NetworkManager.ts";
import { NetworkManagerClient } from "../NetworkManagerClient.ts";
import {
  GetLinkAssociationsCommand,
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput,
} from "../commands/GetLinkAssociationsCommand.ts";
import { NetworkManagerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetLinkAssociationsCommandInput,
  ...args: any
): Promise<GetLinkAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLinkAssociationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: NetworkManager,
  input: GetLinkAssociationsCommandInput,
  ...args: any
): Promise<GetLinkAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.getLinkAssociations(input, ...args);
};
export async function* getLinkAssociationsPaginate(
  config: NetworkManagerPaginationConfiguration,
  input: GetLinkAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<GetLinkAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetLinkAssociationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
