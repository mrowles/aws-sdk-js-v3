
import { ApplicationDiscoveryService } from "../ApplicationDiscoveryService.ts";
import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient.ts";
import {
  DescribeContinuousExportsCommand,
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
} from "../commands/DescribeContinuousExportsCommand.ts";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ApplicationDiscoveryServiceClient,
  input: DescribeContinuousExportsCommandInput,
  ...args: any
): Promise<DescribeContinuousExportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeContinuousExportsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ApplicationDiscoveryService,
  input: DescribeContinuousExportsCommandInput,
  ...args: any
): Promise<DescribeContinuousExportsCommandOutput> => {
  // @ts-ignore
  return await client.describeContinuousExports(input, ...args);
};
export async function* describeContinuousExportsPaginate(
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeContinuousExportsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeContinuousExportsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeContinuousExportsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ApplicationDiscoveryService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationDiscoveryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationDiscoveryService | ApplicationDiscoveryServiceClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
