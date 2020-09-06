
import { WorkMail } from "../WorkMail.ts";
import { WorkMailClient } from "../WorkMailClient.ts";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "../commands/ListResourcesCommand.ts";
import { WorkMailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListResourcesCommandInput,
  ...args: any
): Promise<ListResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourcesCommand(input, ...args));
};
const makePagedRequest = async (
  client: WorkMail,
  input: ListResourcesCommandInput,
  ...args: any
): Promise<ListResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listResources(input, ...args);
};
export async function* listResourcesPaginate(
  config: WorkMailPaginationConfiguration,
  input: ListResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListResourcesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
