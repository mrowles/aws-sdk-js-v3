
import { SWF } from "../SWF.ts";
import { SWFClient } from "../SWFClient.ts";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand.ts";
import { SWFPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SWFClient,
  input: ListDomainsCommandInput,
  ...args: any
): Promise<ListDomainsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SWF,
  input: ListDomainsCommandInput,
  ...args: any
): Promise<ListDomainsCommandOutput> => {
  // @ts-ignore
  return await client.listDomains(input, ...args);
};
export async function* listDomainsPaginate(
  config: SWFPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDomainsCommandOutput;
  while (hasNext) {
    input["nextPageToken"] = token;
    input["maximumPageSize"] = config.pageSize;
    if (config.client instanceof SWF) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    token = page["nextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
