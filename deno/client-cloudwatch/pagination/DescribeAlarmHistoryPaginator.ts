
import { CloudWatch } from "../CloudWatch.ts";
import { CloudWatchClient } from "../CloudWatchClient.ts";
import {
  DescribeAlarmHistoryCommand,
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput,
} from "../commands/DescribeAlarmHistoryCommand.ts";
import { CloudWatchPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: DescribeAlarmHistoryCommandInput,
  ...args: any
): Promise<DescribeAlarmHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAlarmHistoryCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudWatch,
  input: DescribeAlarmHistoryCommandInput,
  ...args: any
): Promise<DescribeAlarmHistoryCommandOutput> => {
  // @ts-ignore
  return await client.describeAlarmHistory(input, ...args);
};
export async function* describeAlarmHistoryPaginate(
  config: CloudWatchPaginationConfiguration,
  input: DescribeAlarmHistoryCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAlarmHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeAlarmHistoryCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof CloudWatch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
