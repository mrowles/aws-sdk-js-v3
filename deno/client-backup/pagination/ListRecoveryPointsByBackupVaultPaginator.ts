
import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import {
  ListRecoveryPointsByBackupVaultCommand,
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "../commands/ListRecoveryPointsByBackupVaultCommand.ts";
import { BackupPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListRecoveryPointsByBackupVaultCommandInput,
  ...args: any
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecoveryPointsByBackupVaultCommand(input, ...args));
};
const makePagedRequest = async (
  client: Backup,
  input: ListRecoveryPointsByBackupVaultCommandInput,
  ...args: any
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> => {
  // @ts-ignore
  return await client.listRecoveryPointsByBackupVault(input, ...args);
};
export async function* listRecoveryPointsByBackupVaultPaginate(
  config: BackupPaginationConfiguration,
  input: ListRecoveryPointsByBackupVaultCommandInput,
  ...additionalArguments: any
): Paginator<ListRecoveryPointsByBackupVaultCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRecoveryPointsByBackupVaultCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
