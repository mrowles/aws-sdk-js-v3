
import { SSOClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOClient.ts";
import { LogoutRequest } from "../models/models_0.ts";
import { deserializeAws_restJson1LogoutCommand, serializeAws_restJson1LogoutCommand } from "../protocols/Aws_restJson1.ts";
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

export type LogoutCommandInput = LogoutRequest;
export type LogoutCommandOutput = __MetadataBearer;

export class LogoutCommand extends $Command<LogoutCommandInput, LogoutCommandOutput, SSOClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LogoutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LogoutCommandInput, LogoutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: LogoutRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LogoutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1LogoutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LogoutCommandOutput> {
    return deserializeAws_restJson1LogoutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
