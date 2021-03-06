
import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient.ts";
import { UpdateComponentConfigurationRequest, UpdateComponentConfigurationResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateComponentConfigurationCommand,
  serializeAws_json1_1UpdateComponentConfigurationCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type UpdateComponentConfigurationCommandInput = UpdateComponentConfigurationRequest;
export type UpdateComponentConfigurationCommandOutput = UpdateComponentConfigurationResponse & __MetadataBearer;

export class UpdateComponentConfigurationCommand extends $Command<
  UpdateComponentConfigurationCommandInput,
  UpdateComponentConfigurationCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateComponentConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateComponentConfigurationCommandInput, UpdateComponentConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateComponentConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateComponentConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateComponentConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateComponentConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateComponentConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateComponentConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
