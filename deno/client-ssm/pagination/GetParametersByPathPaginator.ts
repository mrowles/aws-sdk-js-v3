
import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  GetParametersByPathCommand,
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
} from "../commands/GetParametersByPathCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SSMClient,
  input: GetParametersByPathCommandInput,
  ...args: any
): Promise<GetParametersByPathCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetParametersByPathCommand(input, ...args));
};
const makePagedRequest = async (
  client: SSM,
  input: GetParametersByPathCommandInput,
  ...args: any
): Promise<GetParametersByPathCommandOutput> => {
  // @ts-ignore
  return await client.getParametersByPath(input, ...args);
};
export async function* getParametersByPathPaginate(
  config: SSMPaginationConfiguration,
  input: GetParametersByPathCommandInput,
  ...additionalArguments: any
): Paginator<GetParametersByPathCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetParametersByPathCommandOutput;
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
