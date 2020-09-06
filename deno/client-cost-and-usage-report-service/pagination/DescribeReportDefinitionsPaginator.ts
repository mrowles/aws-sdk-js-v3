
import { CostAndUsageReportService } from "../CostAndUsageReportService.ts";
import { CostAndUsageReportServiceClient } from "../CostAndUsageReportServiceClient.ts";
import {
  DescribeReportDefinitionsCommand,
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput,
} from "../commands/DescribeReportDefinitionsCommand.ts";
import { CostAndUsageReportServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CostAndUsageReportServiceClient,
  input: DescribeReportDefinitionsCommandInput,
  ...args: any
): Promise<DescribeReportDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReportDefinitionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CostAndUsageReportService,
  input: DescribeReportDefinitionsCommandInput,
  ...args: any
): Promise<DescribeReportDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.describeReportDefinitions(input, ...args);
};
export async function* describeReportDefinitionsPaginate(
  config: CostAndUsageReportServicePaginationConfiguration,
  input: DescribeReportDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReportDefinitionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeReportDefinitionsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CostAndUsageReportService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CostAndUsageReportServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CostAndUsageReportService | CostAndUsageReportServiceClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
