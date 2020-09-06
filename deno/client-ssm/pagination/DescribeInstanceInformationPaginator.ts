
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  DescribeInstanceInformationCommand,
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
} from "../commands/DescribeInstanceInformationCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInstanceInformationCommandInput,
  ...args: any
): Promise<DescribeInstanceInformationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstanceInformationCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeInstanceInformationCommandInput,
  ...args: any
): Promise<DescribeInstanceInformationCommandOutput> => {
  // @ts-ignore
  return await client.describeInstanceInformation(input, ...args);
};
export async function* describeInstanceInformationPaginate(
  config: SSMPaginationConfiguration,
  input: DescribeInstanceInformationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceInformationCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeInstanceInformationCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
