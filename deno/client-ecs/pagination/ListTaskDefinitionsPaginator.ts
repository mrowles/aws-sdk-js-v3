
import { ECS } from "../ECS.ts";
import { ECSClient } from "../ECSClient.ts";
import {
  ListTaskDefinitionsCommand,
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput,
} from "../commands/ListTaskDefinitionsCommand.ts";
import { ECSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ECSClient,
  input: ListTaskDefinitionsCommandInput,
  ...args: any
): Promise<ListTaskDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTaskDefinitionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ECS,
  input: ListTaskDefinitionsCommandInput,
  ...args: any
): Promise<ListTaskDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listTaskDefinitions(input, ...args);
};
export async function* listTaskDefinitionsPaginate(
  config: ECSPaginationConfiguration,
  input: ListTaskDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTaskDefinitionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTaskDefinitionsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECS | ECSClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
