
import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import { GetJobRunsCommand, GetJobRunsCommandInput, GetJobRunsCommandOutput } from "../commands/GetJobRunsCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetJobRunsCommandInput,
  ...args: any
): Promise<GetJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetJobRunsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: GetJobRunsCommandInput,
  ...args: any
): Promise<GetJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.getJobRuns(input, ...args);
};
export async function* getJobRunsPaginate(
  config: GluePaginationConfiguration,
  input: GetJobRunsCommandInput,
  ...additionalArguments: any
): Paginator<GetJobRunsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetJobRunsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
