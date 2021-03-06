
import { SageMakerRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerRuntimeClient.ts";
import { InvokeEndpointInput, InvokeEndpointOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1InvokeEndpointCommand,
  serializeAws_restJson1InvokeEndpointCommand,
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

export type InvokeEndpointCommandInput = InvokeEndpointInput;
export type InvokeEndpointCommandOutput = InvokeEndpointOutput & __MetadataBearer;

export class InvokeEndpointCommand extends $Command<
  InvokeEndpointCommandInput,
  InvokeEndpointCommandOutput,
  SageMakerRuntimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InvokeEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeEndpointCommandInput, InvokeEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: InvokeEndpointInput.filterSensitiveLog,
      outputFilterSensitiveLog: InvokeEndpointOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InvokeEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InvokeEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeEndpointCommandOutput> {
    return deserializeAws_restJson1InvokeEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
