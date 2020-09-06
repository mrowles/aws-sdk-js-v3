
import { Neptune } from "../Neptune.ts";
import { NeptuneClient } from "../NeptuneClient.ts";
import {
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "../commands/DescribeOrderableDBInstanceOptionsCommand.ts";
import { NeptunePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  ...args: any
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOrderableDBInstanceOptionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Neptune,
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  ...args: any
): Promise<DescribeOrderableDBInstanceOptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeOrderableDBInstanceOptions(input, ...args);
};
export async function* describeOrderableDBInstanceOptionsPaginate(
  config: NeptunePaginationConfiguration,
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOrderableDBInstanceOptionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeOrderableDBInstanceOptionsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Neptune) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NeptuneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Neptune | NeptuneClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
