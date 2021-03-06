
import { Ivs } from "../Ivs.ts";
import { IvsClient } from "../IvsClient.ts";
import {
  ListStreamKeysCommand,
  ListStreamKeysCommandInput,
  ListStreamKeysCommandOutput,
} from "../commands/ListStreamKeysCommand.ts";
import { IvsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IvsClient,
  input: ListStreamKeysCommandInput,
  ...args: any
): Promise<ListStreamKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamKeysCommand(input, ...args));
};
const makePagedRequest = async (
  client: Ivs,
  input: ListStreamKeysCommandInput,
  ...args: any
): Promise<ListStreamKeysCommandOutput> => {
  // @ts-ignore
  return await client.listStreamKeys(input, ...args);
};
export async function* listStreamKeysPaginate(
  config: IvsPaginationConfiguration,
  input: ListStreamKeysCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamKeysCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListStreamKeysCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Ivs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IvsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Ivs | IvsClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
