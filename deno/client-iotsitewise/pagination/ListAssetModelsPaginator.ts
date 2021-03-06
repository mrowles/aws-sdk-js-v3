
import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import {
  ListAssetModelsCommand,
  ListAssetModelsCommandInput,
  ListAssetModelsCommandOutput,
} from "../commands/ListAssetModelsCommand.ts";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAssetModelsCommandInput,
  ...args: any
): Promise<ListAssetModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetModelsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListAssetModelsCommandInput,
  ...args: any
): Promise<ListAssetModelsCommandOutput> => {
  // @ts-ignore
  return await client.listAssetModels(input, ...args);
};
export async function* listAssetModelsPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetModelsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAssetModelsCommandOutput;
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
