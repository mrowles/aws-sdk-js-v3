
import { ApplicationAutoScaling } from "../ApplicationAutoScaling.ts";
import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient.ts";
import {
  DescribeScalableTargetsCommand,
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
} from "../commands/DescribeScalableTargetsCommand.ts";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ApplicationAutoScalingClient,
  input: DescribeScalableTargetsCommandInput,
  ...args: any
): Promise<DescribeScalableTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScalableTargetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ApplicationAutoScaling,
  input: DescribeScalableTargetsCommandInput,
  ...args: any
): Promise<DescribeScalableTargetsCommandOutput> => {
  // @ts-ignore
  return await client.describeScalableTargets(input, ...args);
};
export async function* describeScalableTargetsPaginate(
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScalableTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScalableTargetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeScalableTargetsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationAutoScaling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationAutoScalingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationAutoScaling | ApplicationAutoScalingClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
