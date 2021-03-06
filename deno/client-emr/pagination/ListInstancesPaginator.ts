
import { EMR } from "../EMR.ts";
import { EMRClient } from "../EMRClient.ts";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "../commands/ListInstancesCommand.ts";
import { EMRPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: EMRClient,
  input: ListInstancesCommandInput,
  ...args: any
): Promise<ListInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstancesCommand(input, ...args));
};
const makePagedRequest = async (
  client: EMR,
  input: ListInstancesCommandInput,
  ...args: any
): Promise<ListInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listInstances(input, ...args);
};
export async function* listInstancesPaginate(
  config: EMRPaginationConfiguration,
  input: ListInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListInstancesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
