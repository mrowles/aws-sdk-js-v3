
import { MetadataBearer } from "../types/mod.ts";

import { SmithyException } from "./exception.ts";

export type SdkError = Error & SmithyException & MetadataBearer;
