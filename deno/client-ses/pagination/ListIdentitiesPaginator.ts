
import { SES } from "../SES.ts";
import { SESClient } from "../SESClient.ts";
import {
  ListIdentitiesCommand,
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput,
} from "../commands/ListIdentitiesCommand.ts";
import { SESPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SESClient,
  input: ListIdentitiesCommandInput,
  ...args: any
): Promise<ListIdentitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdentitiesCommand(input, ...args));
};
const makePagedRequest = async (
  client: SES,
  input: ListIdentitiesCommandInput,
  ...args: any
): Promise<ListIdentitiesCommandOutput> => {
  // @ts-ignore
  return await client.listIdentities(input, ...args);
};
export async function* listIdentitiesPaginate(
  config: SESPaginationConfiguration,
  input: ListIdentitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListIdentitiesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListIdentitiesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof SES) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SESClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SES | SESClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
