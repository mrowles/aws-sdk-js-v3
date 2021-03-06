
import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import { GetJobsCommand, GetJobsCommandInput, GetJobsCommandOutput } from "../commands/GetJobsCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetJobsCommandInput,
  ...args: any
): Promise<GetJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: GetJobsCommandInput,
  ...args: any
): Promise<GetJobsCommandOutput> => {
  // @ts-ignore
  return await client.getJobs(input, ...args);
};
export async function* getJobsPaginate(
  config: GluePaginationConfiguration,
  input: GetJobsCommandInput,
  ...additionalArguments: any
): Paginator<GetJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetJobsCommandOutput;
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
