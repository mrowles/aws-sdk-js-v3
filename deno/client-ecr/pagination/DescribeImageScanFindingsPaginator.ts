
import { ECR } from "../ECR.ts";
import { ECRClient } from "../ECRClient.ts";
import {
  DescribeImageScanFindingsCommand,
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
} from "../commands/DescribeImageScanFindingsCommand.ts";
import { ECRPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ECRClient,
  input: DescribeImageScanFindingsCommandInput,
  ...args: any
): Promise<DescribeImageScanFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImageScanFindingsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ECR,
  input: DescribeImageScanFindingsCommandInput,
  ...args: any
): Promise<DescribeImageScanFindingsCommandOutput> => {
  // @ts-ignore
  return await client.describeImageScanFindings(input, ...args);
};
export async function* describeImageScanFindingsPaginate(
  config: ECRPaginationConfiguration,
  input: DescribeImageScanFindingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImageScanFindingsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeImageScanFindingsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECR | ECRClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
