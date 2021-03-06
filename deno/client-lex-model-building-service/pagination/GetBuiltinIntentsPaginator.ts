
import { LexModelBuildingService } from "../LexModelBuildingService.ts";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient.ts";
import {
  GetBuiltinIntentsCommand,
  GetBuiltinIntentsCommandInput,
  GetBuiltinIntentsCommandOutput,
} from "../commands/GetBuiltinIntentsCommand.ts";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBuiltinIntentsCommandInput,
  ...args: any
): Promise<GetBuiltinIntentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBuiltinIntentsCommand(input, ...args));
};
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetBuiltinIntentsCommandInput,
  ...args: any
): Promise<GetBuiltinIntentsCommandOutput> => {
  // @ts-ignore
  return await client.getBuiltinIntents(input, ...args);
};
export async function* getBuiltinIntentsPaginate(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBuiltinIntentsCommandInput,
  ...additionalArguments: any
): Paginator<GetBuiltinIntentsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetBuiltinIntentsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelBuildingService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LexModelBuildingServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelBuildingService | LexModelBuildingServiceClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
