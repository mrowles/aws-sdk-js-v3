
import { CloudHSMV2 } from "../CloudHSMV2.ts";
import { CloudHSMV2Client } from "../CloudHSMV2Client.ts";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "../commands/DescribeClustersCommand.ts";
import { CloudHSMV2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudHSMV2Client,
  input: DescribeClustersCommandInput,
  ...args: any
): Promise<DescribeClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClustersCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudHSMV2,
  input: DescribeClustersCommandInput,
  ...args: any
): Promise<DescribeClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeClusters(input, ...args);
};
export async function* describeClustersPaginate(
  config: CloudHSMV2PaginationConfiguration,
  input: DescribeClustersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClustersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeClustersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudHSMV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudHSMV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudHSMV2 | CloudHSMV2Client");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
