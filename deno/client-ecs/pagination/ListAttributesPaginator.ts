
import { ECS } from "../ECS.ts";
import { ECSClient } from "../ECSClient.ts";
import {
  ListAttributesCommand,
  ListAttributesCommandInput,
  ListAttributesCommandOutput,
} from "../commands/ListAttributesCommand.ts";
import { ECSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ECSClient,
  input: ListAttributesCommandInput,
  ...args: any
): Promise<ListAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttributesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ECS,
  input: ListAttributesCommandInput,
  ...args: any
): Promise<ListAttributesCommandOutput> => {
  // @ts-ignore
  return await client.listAttributes(input, ...args);
};
export async function* listAttributesPaginate(
  config: ECSPaginationConfiguration,
  input: ListAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttributesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAttributesCommandOutput;
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
