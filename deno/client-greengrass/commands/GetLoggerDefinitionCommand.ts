
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import { GetLoggerDefinitionRequest, GetLoggerDefinitionResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetLoggerDefinitionCommand,
  serializeAws_restJson1GetLoggerDefinitionCommand,
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

export type GetLoggerDefinitionCommandInput = GetLoggerDefinitionRequest;
export type GetLoggerDefinitionCommandOutput = GetLoggerDefinitionResponse & __MetadataBearer;

export class GetLoggerDefinitionCommand extends $Command<
  GetLoggerDefinitionCommandInput,
  GetLoggerDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLoggerDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLoggerDefinitionCommandInput, GetLoggerDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetLoggerDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLoggerDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLoggerDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLoggerDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLoggerDefinitionCommandOutput> {
    return deserializeAws_restJson1GetLoggerDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
