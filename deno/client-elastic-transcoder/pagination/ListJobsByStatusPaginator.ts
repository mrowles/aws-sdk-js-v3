
import { ElasticTranscoder } from "../ElasticTranscoder.ts";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient.ts";
import {
  ListJobsByStatusCommand,
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput,
} from "../commands/ListJobsByStatusCommand.ts";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticTranscoderClient,
  input: ListJobsByStatusCommandInput,
  ...args: any
): Promise<ListJobsByStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobsByStatusCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticTranscoder,
  input: ListJobsByStatusCommandInput,
  ...args: any
): Promise<ListJobsByStatusCommandOutput> => {
  // @ts-ignore
  return await client.listJobsByStatus(input, ...args);
};
export async function* listJobsByStatusPaginate(
  config: ElasticTranscoderPaginationConfiguration,
  input: ListJobsByStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListJobsByStatusCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListJobsByStatusCommandOutput;
  while (hasNext) {
    input["PageToken"] = token;
    if (config.client instanceof ElasticTranscoder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticTranscoderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticTranscoder | ElasticTranscoderClient");
    }
    yield page;
    token = page["NextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
