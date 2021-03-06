
import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import {
  GetAccountAuthorizationDetailsCommand,
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "../commands/GetAccountAuthorizationDetailsCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IAMClient,
  input: GetAccountAuthorizationDetailsCommandInput,
  ...args: any
): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAccountAuthorizationDetailsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IAM,
  input: GetAccountAuthorizationDetailsCommandInput,
  ...args: any
): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
  // @ts-ignore
  return await client.getAccountAuthorizationDetails(input, ...args);
};
export async function* getAccountAuthorizationDetailsPaginate(
  config: IAMPaginationConfiguration,
  input: GetAccountAuthorizationDetailsCommandInput,
  ...additionalArguments: any
): Paginator<GetAccountAuthorizationDetailsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetAccountAuthorizationDetailsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
