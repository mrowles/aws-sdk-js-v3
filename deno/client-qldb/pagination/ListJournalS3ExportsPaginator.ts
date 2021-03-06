
import { QLDB } from "../QLDB.ts";
import { QLDBClient } from "../QLDBClient.ts";
import {
  ListJournalS3ExportsCommand,
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput,
} from "../commands/ListJournalS3ExportsCommand.ts";
import { QLDBPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: QLDBClient,
  input: ListJournalS3ExportsCommandInput,
  ...args: any
): Promise<ListJournalS3ExportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJournalS3ExportsCommand(input, ...args));
};
const makePagedRequest = async (
  client: QLDB,
  input: ListJournalS3ExportsCommandInput,
  ...args: any
): Promise<ListJournalS3ExportsCommandOutput> => {
  // @ts-ignore
  return await client.listJournalS3Exports(input, ...args);
};
export async function* listJournalS3ExportsPaginate(
  config: QLDBPaginationConfiguration,
  input: ListJournalS3ExportsCommandInput,
  ...additionalArguments: any
): Paginator<ListJournalS3ExportsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListJournalS3ExportsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QLDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QLDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QLDB | QLDBClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
