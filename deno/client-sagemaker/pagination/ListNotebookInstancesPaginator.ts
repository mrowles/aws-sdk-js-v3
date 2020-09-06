
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListNotebookInstancesCommand,
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput,
} from "../commands/ListNotebookInstancesCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListNotebookInstancesCommandInput,
  ...args: any
): Promise<ListNotebookInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNotebookInstancesCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListNotebookInstancesCommandInput,
  ...args: any
): Promise<ListNotebookInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listNotebookInstances(input, ...args);
};
export async function* listNotebookInstancesPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListNotebookInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListNotebookInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListNotebookInstancesCommandOutput;
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
