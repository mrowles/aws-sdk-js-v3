
import { Lambda } from "../Lambda.ts";
import { LambdaClient } from "../LambdaClient.ts";
import {
  ListLayerVersionsCommand,
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput,
} from "../commands/ListLayerVersionsCommand.ts";
import { LambdaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListLayerVersionsCommandInput,
  ...args: any
): Promise<ListLayerVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLayerVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Lambda,
  input: ListLayerVersionsCommandInput,
  ...args: any
): Promise<ListLayerVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listLayerVersions(input, ...args);
};
export async function* listLayerVersionsPaginate(
  config: LambdaPaginationConfiguration,
  input: ListLayerVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListLayerVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListLayerVersionsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Lambda) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LambdaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Lambda | LambdaClient");
    }
    yield page;
    token = page["NextMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
