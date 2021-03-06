
import { CloudFormation } from "../CloudFormation.ts";
import { CloudFormationClient } from "../CloudFormationClient.ts";
import {
  DescribeStackEventsCommand,
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "../commands/DescribeStackEventsCommand.ts";
import { CloudFormationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: DescribeStackEventsCommandInput,
  ...args: any
): Promise<DescribeStackEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStackEventsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudFormation,
  input: DescribeStackEventsCommandInput,
  ...args: any
): Promise<DescribeStackEventsCommandOutput> => {
  // @ts-ignore
  return await client.describeStackEvents(input, ...args);
};
export async function* describeStackEventsPaginate(
  config: CloudFormationPaginationConfiguration,
  input: DescribeStackEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStackEventsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeStackEventsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
