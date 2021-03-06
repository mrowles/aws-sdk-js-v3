
import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import {
  ListAttendeesCommand,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput,
} from "../commands/ListAttendeesCommand.ts";
import { ChimePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListAttendeesCommandInput,
  ...args: any
): Promise<ListAttendeesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttendeesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Chime,
  input: ListAttendeesCommandInput,
  ...args: any
): Promise<ListAttendeesCommandOutput> => {
  // @ts-ignore
  return await client.listAttendees(input, ...args);
};
export async function* listAttendeesPaginate(
  config: ChimePaginationConfiguration,
  input: ListAttendeesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttendeesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAttendeesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
