
import { WorkLink } from "../WorkLink.ts";
import { WorkLinkClient } from "../WorkLinkClient.ts";
import {
  ListWebsiteCertificateAuthoritiesCommand,
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput,
} from "../commands/ListWebsiteCertificateAuthoritiesCommand.ts";
import { WorkLinkPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: WorkLinkClient,
  input: ListWebsiteCertificateAuthoritiesCommandInput,
  ...args: any
): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWebsiteCertificateAuthoritiesCommand(input, ...args));
};
const makePagedRequest = async (
  client: WorkLink,
  input: ListWebsiteCertificateAuthoritiesCommandInput,
  ...args: any
): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> => {
  // @ts-ignore
  return await client.listWebsiteCertificateAuthorities(input, ...args);
};
export async function* listWebsiteCertificateAuthoritiesPaginate(
  config: WorkLinkPaginationConfiguration,
  input: ListWebsiteCertificateAuthoritiesCommandInput,
  ...additionalArguments: any
): Paginator<ListWebsiteCertificateAuthoritiesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListWebsiteCertificateAuthoritiesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkLink) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkLinkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkLink | WorkLinkClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
