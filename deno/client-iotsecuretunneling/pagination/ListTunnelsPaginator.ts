
import { IoTSecureTunneling } from "../IoTSecureTunneling.ts";
import { IoTSecureTunnelingClient } from "../IoTSecureTunnelingClient.ts";
import { ListTunnelsCommand, ListTunnelsCommandInput, ListTunnelsCommandOutput } from "../commands/ListTunnelsCommand.ts";
import { IoTSecureTunnelingPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTSecureTunnelingClient,
  input: ListTunnelsCommandInput,
  ...args: any
): Promise<ListTunnelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTunnelsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTSecureTunneling,
  input: ListTunnelsCommandInput,
  ...args: any
): Promise<ListTunnelsCommandOutput> => {
  // @ts-ignore
  return await client.listTunnels(input, ...args);
};
export async function* listTunnelsPaginate(
  config: IoTSecureTunnelingPaginationConfiguration,
  input: ListTunnelsCommandInput,
  ...additionalArguments: any
): Paginator<ListTunnelsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTunnelsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSecureTunneling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSecureTunnelingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSecureTunneling | IoTSecureTunnelingClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
