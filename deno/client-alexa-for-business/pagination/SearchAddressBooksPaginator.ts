
import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  SearchAddressBooksCommand,
  SearchAddressBooksCommandInput,
  SearchAddressBooksCommandOutput,
} from "../commands/SearchAddressBooksCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchAddressBooksCommandInput,
  ...args: any
): Promise<SearchAddressBooksCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchAddressBooksCommand(input, ...args));
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchAddressBooksCommandInput,
  ...args: any
): Promise<SearchAddressBooksCommandOutput> => {
  // @ts-ignore
  return await client.searchAddressBooks(input, ...args);
};
export async function* searchAddressBooksPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchAddressBooksCommandInput,
  ...additionalArguments: any
): Paginator<SearchAddressBooksCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchAddressBooksCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
