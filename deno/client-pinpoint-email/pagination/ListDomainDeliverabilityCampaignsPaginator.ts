
import { PinpointEmail } from "../PinpointEmail.ts";
import { PinpointEmailClient } from "../PinpointEmailClient.ts";
import {
  ListDomainDeliverabilityCampaignsCommand,
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "../commands/ListDomainDeliverabilityCampaignsCommand.ts";
import { PinpointEmailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: ListDomainDeliverabilityCampaignsCommandInput,
  ...args: any
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainDeliverabilityCampaignsCommand(input, ...args));
};
const makePagedRequest = async (
  client: PinpointEmail,
  input: ListDomainDeliverabilityCampaignsCommandInput,
  ...args: any
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  // @ts-ignore
  return await client.listDomainDeliverabilityCampaigns(input, ...args);
};
export async function* listDomainDeliverabilityCampaignsPaginate(
  config: PinpointEmailPaginationConfiguration,
  input: ListDomainDeliverabilityCampaignsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainDeliverabilityCampaignsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDomainDeliverabilityCampaignsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
