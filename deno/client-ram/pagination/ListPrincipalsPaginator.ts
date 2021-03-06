
import { RAM } from "../RAM.ts";
import { RAMClient } from "../RAMClient.ts";
import {
  ListPrincipalsCommand,
  ListPrincipalsCommandInput,
  ListPrincipalsCommandOutput,
} from "../commands/ListPrincipalsCommand.ts";
import { RAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RAMClient,
  input: ListPrincipalsCommandInput,
  ...args: any
): Promise<ListPrincipalsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPrincipalsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RAM,
  input: ListPrincipalsCommandInput,
  ...args: any
): Promise<ListPrincipalsCommandOutput> => {
  // @ts-ignore
  return await client.listPrincipals(input, ...args);
};
export async function* listPrincipalsPaginate(
  config: RAMPaginationConfiguration,
  input: ListPrincipalsCommandInput,
  ...additionalArguments: any
): Paginator<ListPrincipalsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPrincipalsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
