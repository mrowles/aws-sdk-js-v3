
import { GuardDuty } from "../GuardDuty.ts";
import { GuardDutyClient } from "../GuardDutyClient.ts";
import {
  ListThreatIntelSetsCommand,
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "../commands/ListThreatIntelSetsCommand.ts";
import { GuardDutyPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListThreatIntelSetsCommandInput,
  ...args: any
): Promise<ListThreatIntelSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThreatIntelSetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: GuardDuty,
  input: ListThreatIntelSetsCommandInput,
  ...args: any
): Promise<ListThreatIntelSetsCommandOutput> => {
  // @ts-ignore
  return await client.listThreatIntelSets(input, ...args);
};
export async function* listThreatIntelSetsPaginate(
  config: GuardDutyPaginationConfiguration,
  input: ListThreatIntelSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListThreatIntelSetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListThreatIntelSetsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
