
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient.ts";
import { GetAccuracyMetricsRequest, GetAccuracyMetricsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetAccuracyMetricsCommand,
  serializeAws_json1_1GetAccuracyMetricsCommand,
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

export type GetAccuracyMetricsCommandInput = GetAccuracyMetricsRequest;
export type GetAccuracyMetricsCommandOutput = GetAccuracyMetricsResponse & __MetadataBearer;

export class GetAccuracyMetricsCommand extends $Command<
  GetAccuracyMetricsCommandInput,
  GetAccuracyMetricsCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccuracyMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetAccuracyMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccuracyMetricsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccuracyMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAccuracyMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccuracyMetricsCommandOutput> {
    return deserializeAws_json1_1GetAccuracyMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
