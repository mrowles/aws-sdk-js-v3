
import { ElasticLoadBalancingV2 } from "../ElasticLoadBalancingV2.ts";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client.ts";
import {
  DescribeListenersCommand,
  DescribeListenersCommandInput,
  DescribeListenersCommandOutput,
} from "../commands/DescribeListenersCommand.ts";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticLoadBalancingV2Client,
  input: DescribeListenersCommandInput,
  ...args: any
): Promise<DescribeListenersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeListenersCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticLoadBalancingV2,
  input: DescribeListenersCommandInput,
  ...args: any
): Promise<DescribeListenersCommandOutput> => {
  // @ts-ignore
  return await client.describeListeners(input, ...args);
};
export async function* describeListenersPaginate(
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeListenersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeListenersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeListenersCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    if (config.client instanceof ElasticLoadBalancingV2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticLoadBalancingV2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticLoadBalancingV2 | ElasticLoadBalancingV2Client");
    }
    yield page;
    token = page["NextMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
