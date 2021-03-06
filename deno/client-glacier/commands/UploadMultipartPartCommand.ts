import { Buffer } from "../../buffer/mod.ts";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient.ts";
import { UploadMultipartPartInput, UploadMultipartPartOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UploadMultipartPartCommand,
  serializeAws_restJson1UploadMultipartPartCommand,
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

export type UploadMultipartPartCommandInput = Omit<UploadMultipartPartInput, "body"> & {
  body?: UploadMultipartPartInput["body"] | string | Uint8Array | Buffer;
};
export type UploadMultipartPartCommandOutput = UploadMultipartPartOutput & __MetadataBearer;

export class UploadMultipartPartCommand extends $Command<
  UploadMultipartPartCommandInput,
  UploadMultipartPartCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UploadMultipartPartCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UploadMultipartPartCommandInput, UploadMultipartPartCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UploadMultipartPartInput.filterSensitiveLog,
      outputFilterSensitiveLog: UploadMultipartPartOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadMultipartPartCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UploadMultipartPartCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadMultipartPartCommandOutput> {
    return deserializeAws_restJson1UploadMultipartPartCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
