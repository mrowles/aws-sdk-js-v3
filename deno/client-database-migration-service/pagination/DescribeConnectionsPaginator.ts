
import { DatabaseMigrationService } from "../DatabaseMigrationService.ts";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient.ts";
import {
  DescribeConnectionsCommand,
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "../commands/DescribeConnectionsCommand.ts";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeConnectionsCommandInput,
  ...args: any
): Promise<DescribeConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConnectionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeConnectionsCommandInput,
  ...args: any
): Promise<DescribeConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.describeConnections(input, ...args);
};
export async function* describeConnectionsPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConnectionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeConnectionsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
