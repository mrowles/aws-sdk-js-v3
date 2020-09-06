
import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";

export const ClientSharedValues = {
  apiVersion: "2019-07-11",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "qldb",
};
