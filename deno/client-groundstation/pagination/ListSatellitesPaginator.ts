
import { GroundStation } from "../GroundStation.ts";
import { GroundStationClient } from "../GroundStationClient.ts";
import {
  ListSatellitesCommand,
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput,
} from "../commands/ListSatellitesCommand.ts";
import { GroundStationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListSatellitesCommandInput,
  ...args: any
): Promise<ListSatellitesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSatellitesCommand(input, ...args));
};
const makePagedRequest = async (
  client: GroundStation,
  input: ListSatellitesCommandInput,
  ...args: any
): Promise<ListSatellitesCommandOutput> => {
  // @ts-ignore
  return await client.listSatellites(input, ...args);
};
export async function* listSatellitesPaginate(
  config: GroundStationPaginationConfiguration,
  input: ListSatellitesCommandInput,
  ...additionalArguments: any
): Paginator<ListSatellitesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSatellitesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GroundStation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GroundStationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GroundStation | GroundStationClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
