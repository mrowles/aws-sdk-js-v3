
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListAutoMLJobsCommand,
  ListAutoMLJobsCommandInput,
  ListAutoMLJobsCommandOutput,
} from "../commands/ListAutoMLJobsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListAutoMLJobsCommandInput,
  ...args: any
): Promise<ListAutoMLJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAutoMLJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListAutoMLJobsCommandInput,
  ...args: any
): Promise<ListAutoMLJobsCommandOutput> => {
  // @ts-ignore
  return await client.listAutoMLJobs(input, ...args);
};
export async function* listAutoMLJobsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListAutoMLJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListAutoMLJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAutoMLJobsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
