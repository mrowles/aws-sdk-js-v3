import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import {
  DescribeUpdateActionsCommand,
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput,
} from "../commands/DescribeUpdateActionsCommand";
import { ElastiCachePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeUpdateActionsCommandInput,
  ...args: any
): Promise<DescribeUpdateActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUpdateActionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeUpdateActionsCommandInput,
  ...args: any
): Promise<DescribeUpdateActionsCommandOutput> => {
  // @ts-ignore
  return await client.describeUpdateActions(input, ...args);
};
export async function* describeUpdateActionsPaginate(
  config: ElastiCachePaginationConfiguration,
  input: DescribeUpdateActionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUpdateActionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeUpdateActionsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElastiCache) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
