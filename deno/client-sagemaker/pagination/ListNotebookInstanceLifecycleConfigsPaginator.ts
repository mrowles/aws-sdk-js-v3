
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListNotebookInstanceLifecycleConfigsCommand,
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput,
} from "../commands/ListNotebookInstanceLifecycleConfigsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListNotebookInstanceLifecycleConfigsCommandInput,
  ...args: any
): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNotebookInstanceLifecycleConfigsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListNotebookInstanceLifecycleConfigsCommandInput,
  ...args: any
): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listNotebookInstanceLifecycleConfigs(input, ...args);
};
export async function* listNotebookInstanceLifecycleConfigsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListNotebookInstanceLifecycleConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListNotebookInstanceLifecycleConfigsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListNotebookInstanceLifecycleConfigsCommandOutput;
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
