
import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeClusterSubnetGroupsCommand,
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
} from "../commands/DescribeClusterSubnetGroupsCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeClusterSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterSubnetGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeClusterSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterSubnetGroups(input, ...args);
};
export async function* describeClusterSubnetGroupsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterSubnetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterSubnetGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeClusterSubnetGroupsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
