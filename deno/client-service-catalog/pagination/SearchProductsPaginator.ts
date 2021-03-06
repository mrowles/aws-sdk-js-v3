
import { ServiceCatalog } from "../ServiceCatalog.ts";
import { ServiceCatalogClient } from "../ServiceCatalogClient.ts";
import {
  SearchProductsCommand,
  SearchProductsCommandInput,
  SearchProductsCommandOutput,
} from "../commands/SearchProductsCommand.ts";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: SearchProductsCommandInput,
  ...args: any
): Promise<SearchProductsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchProductsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: SearchProductsCommandInput,
  ...args: any
): Promise<SearchProductsCommandOutput> => {
  // @ts-ignore
  return await client.searchProducts(input, ...args);
};
export async function* searchProductsPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: SearchProductsCommandInput,
  ...additionalArguments: any
): Paginator<SearchProductsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchProductsCommandOutput;
  while (hasNext) {
    input["PageToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalog) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    token = page["NextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
