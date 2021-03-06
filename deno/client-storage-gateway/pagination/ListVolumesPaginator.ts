
import { StorageGateway } from "../StorageGateway.ts";
import { StorageGatewayClient } from "../StorageGatewayClient.ts";
import { ListVolumesCommand, ListVolumesCommandInput, ListVolumesCommandOutput } from "../commands/ListVolumesCommand.ts";
import { StorageGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: ListVolumesCommandInput,
  ...args: any
): Promise<ListVolumesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVolumesCommand(input, ...args));
};
const makePagedRequest = async (
  client: StorageGateway,
  input: ListVolumesCommandInput,
  ...args: any
): Promise<ListVolumesCommandOutput> => {
  // @ts-ignore
  return await client.listVolumes(input, ...args);
};
export async function* listVolumesPaginate(
  config: StorageGatewayPaginationConfiguration,
  input: ListVolumesCommandInput,
  ...additionalArguments: any
): Paginator<ListVolumesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListVolumesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
