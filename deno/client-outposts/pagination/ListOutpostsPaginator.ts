
import { Outposts } from "../Outposts.ts";
import { OutpostsClient } from "../OutpostsClient.ts";
import {
  ListOutpostsCommand,
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput,
} from "../commands/ListOutpostsCommand.ts";
import { OutpostsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: OutpostsClient,
  input: ListOutpostsCommandInput,
  ...args: any
): Promise<ListOutpostsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOutpostsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Outposts,
  input: ListOutpostsCommandInput,
  ...args: any
): Promise<ListOutpostsCommandOutput> => {
  // @ts-ignore
  return await client.listOutposts(input, ...args);
};
export async function* listOutpostsPaginate(
  config: OutpostsPaginationConfiguration,
  input: ListOutpostsCommandInput,
  ...additionalArguments: any
): Paginator<ListOutpostsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListOutpostsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Outposts) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OutpostsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Outposts | OutpostsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
