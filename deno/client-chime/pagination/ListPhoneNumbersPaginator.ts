
import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "../commands/ListPhoneNumbersCommand.ts";
import { ChimePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListPhoneNumbersCommandInput,
  ...args: any
): Promise<ListPhoneNumbersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPhoneNumbersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Chime,
  input: ListPhoneNumbersCommandInput,
  ...args: any
): Promise<ListPhoneNumbersCommandOutput> => {
  // @ts-ignore
  return await client.listPhoneNumbers(input, ...args);
};
export async function* listPhoneNumbersPaginate(
  config: ChimePaginationConfiguration,
  input: ListPhoneNumbersCommandInput,
  ...additionalArguments: any
): Paginator<ListPhoneNumbersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPhoneNumbersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
