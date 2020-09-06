
import { CodeBuild } from "../CodeBuild.ts";
import { CodeBuildClient } from "../CodeBuildClient.ts";
import {
  DescribeCodeCoveragesCommand,
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
} from "../commands/DescribeCodeCoveragesCommand.ts";
import { CodeBuildPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: DescribeCodeCoveragesCommandInput,
  ...args: any
): Promise<DescribeCodeCoveragesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCodeCoveragesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeBuild,
  input: DescribeCodeCoveragesCommandInput,
  ...args: any
): Promise<DescribeCodeCoveragesCommandOutput> => {
  // @ts-ignore
  return await client.describeCodeCoverages(input, ...args);
};
export async function* describeCodeCoveragesPaginate(
  config: CodeBuildPaginationConfiguration,
  input: DescribeCodeCoveragesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCodeCoveragesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeCodeCoveragesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
