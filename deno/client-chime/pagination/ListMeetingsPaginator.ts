
import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import {
  ListMeetingsCommand,
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput,
} from "../commands/ListMeetingsCommand.ts";
import { ChimePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListMeetingsCommandInput,
  ...args: any
): Promise<ListMeetingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMeetingsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Chime,
  input: ListMeetingsCommandInput,
  ...args: any
): Promise<ListMeetingsCommandOutput> => {
  // @ts-ignore
  return await client.listMeetings(input, ...args);
};
export async function* listMeetingsPaginate(
  config: ChimePaginationConfiguration,
  input: ListMeetingsCommandInput,
  ...additionalArguments: any
): Paginator<ListMeetingsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListMeetingsCommandOutput;
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
