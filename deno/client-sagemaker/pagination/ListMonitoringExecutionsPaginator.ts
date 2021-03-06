
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListMonitoringExecutionsCommand,
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
} from "../commands/ListMonitoringExecutionsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListMonitoringExecutionsCommandInput,
  ...args: any
): Promise<ListMonitoringExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMonitoringExecutionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListMonitoringExecutionsCommandInput,
  ...args: any
): Promise<ListMonitoringExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listMonitoringExecutions(input, ...args);
};
export async function* listMonitoringExecutionsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListMonitoringExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListMonitoringExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListMonitoringExecutionsCommandOutput;
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
