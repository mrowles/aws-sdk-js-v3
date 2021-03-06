
import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import {
  ListAssociatedAssetsCommand,
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "../commands/ListAssociatedAssetsCommand.ts";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAssociatedAssetsCommandInput,
  ...args: any
): Promise<ListAssociatedAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedAssetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListAssociatedAssetsCommandInput,
  ...args: any
): Promise<ListAssociatedAssetsCommandOutput> => {
  // @ts-ignore
  return await client.listAssociatedAssets(input, ...args);
};
export async function* listAssociatedAssetsPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssociatedAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedAssetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAssociatedAssetsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
