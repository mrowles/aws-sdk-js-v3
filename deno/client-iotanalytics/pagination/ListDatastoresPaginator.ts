
import { IoTAnalytics } from "../IoTAnalytics.ts";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient.ts";
import {
  ListDatastoresCommand,
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput,
} from "../commands/ListDatastoresCommand.ts";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: IoTAnalyticsClient,
  input: ListDatastoresCommandInput,
  ...args: any
): Promise<ListDatastoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatastoresCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTAnalytics,
  input: ListDatastoresCommandInput,
  ...args: any
): Promise<ListDatastoresCommandOutput> => {
  // @ts-ignore
  return await client.listDatastores(input, ...args);
};
export async function* listDatastoresPaginate(
  config: IoTAnalyticsPaginationConfiguration,
  input: ListDatastoresCommandInput,
  ...additionalArguments: any
): Paginator<ListDatastoresCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDatastoresCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTAnalytics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTAnalyticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTAnalytics | IoTAnalyticsClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
