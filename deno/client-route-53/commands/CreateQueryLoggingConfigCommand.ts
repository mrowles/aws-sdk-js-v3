
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { CreateQueryLoggingConfigRequest, CreateQueryLoggingConfigResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlCreateQueryLoggingConfigCommand,
  serializeAws_restXmlCreateQueryLoggingConfigCommand,
} from "../protocols/Aws_restXml.ts";
import { getIdNormalizerPlugin } from "../../middleware-sdk-route53/mod.ts";
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

export type CreateQueryLoggingConfigCommandInput = CreateQueryLoggingConfigRequest;
export type CreateQueryLoggingConfigCommandOutput = CreateQueryLoggingConfigResponse & __MetadataBearer;

export class CreateQueryLoggingConfigCommand extends $Command<
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateQueryLoggingConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateQueryLoggingConfigCommandInput, CreateQueryLoggingConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateQueryLoggingConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateQueryLoggingConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateQueryLoggingConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateQueryLoggingConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateQueryLoggingConfigCommandOutput> {
    return deserializeAws_restXmlCreateQueryLoggingConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
