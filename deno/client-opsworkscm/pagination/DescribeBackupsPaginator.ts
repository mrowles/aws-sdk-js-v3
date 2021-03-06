
import { OpsWorksCM } from "../OpsWorksCM.ts";
import { OpsWorksCMClient } from "../OpsWorksCMClient.ts";
import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "../commands/DescribeBackupsCommand.ts";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: OpsWorksCMClient,
  input: DescribeBackupsCommandInput,
  ...args: any
): Promise<DescribeBackupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBackupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: OpsWorksCM,
  input: DescribeBackupsCommandInput,
  ...args: any
): Promise<DescribeBackupsCommandOutput> => {
  // @ts-ignore
  return await client.describeBackups(input, ...args);
};
export async function* describeBackupsPaginate(
  config: OpsWorksCMPaginationConfiguration,
  input: DescribeBackupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBackupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeBackupsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpsWorksCM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpsWorksCMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpsWorksCM | OpsWorksCMClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
