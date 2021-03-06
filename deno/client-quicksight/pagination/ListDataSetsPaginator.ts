
import { QuickSight } from "../QuickSight.ts";
import { QuickSightClient } from "../QuickSightClient.ts";
import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "../commands/ListDataSetsCommand.ts";
import { QuickSightPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListDataSetsCommandInput,
  ...args: any
): Promise<ListDataSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: QuickSight,
  input: ListDataSetsCommandInput,
  ...args: any
): Promise<ListDataSetsCommandOutput> => {
  // @ts-ignore
  return await client.listDataSets(input, ...args);
};
export async function* listDataSetsPaginate(
  config: QuickSightPaginationConfiguration,
  input: ListDataSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDataSetsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
