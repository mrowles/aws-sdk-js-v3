
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient.ts";
import {
  GetConfigurationSetEventDestinationsRequest,
  GetConfigurationSetEventDestinationsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand,
  serializeAws_restJson1GetConfigurationSetEventDestinationsCommand,
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

export type GetConfigurationSetEventDestinationsCommandInput = GetConfigurationSetEventDestinationsRequest;
export type GetConfigurationSetEventDestinationsCommandOutput = GetConfigurationSetEventDestinationsResponse &
  __MetadataBearer;

export class GetConfigurationSetEventDestinationsCommand extends $Command<
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConfigurationSetEventDestinationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConfigurationSetEventDestinationsCommandInput, GetConfigurationSetEventDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetConfigurationSetEventDestinationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConfigurationSetEventDestinationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetConfigurationSetEventDestinationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConfigurationSetEventDestinationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput> {
    return deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
