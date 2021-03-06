import { Buffer } from "../../buffer/mod.ts";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient.ts";
import { ArchiveCreationOutput, UploadArchiveInput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UploadArchiveCommand,
  serializeAws_restJson1UploadArchiveCommand,
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type UploadArchiveCommandInput = Omit<UploadArchiveInput, "body"> & {
  body?: UploadArchiveInput["body"] | string | Uint8Array | Buffer;
};
export type UploadArchiveCommandOutput = ArchiveCreationOutput & __MetadataBearer;

export class UploadArchiveCommand extends $Command<
  UploadArchiveCommandInput,
  UploadArchiveCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UploadArchiveCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadArchiveCommandInput, UploadArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UploadArchiveInput.filterSensitiveLog,
      outputFilterSensitiveLog: ArchiveCreationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UploadArchiveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadArchiveCommandOutput> {
    return deserializeAws_restJson1UploadArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
