
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetInstanceMetricDataRequest, GetInstanceMetricDataResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetInstanceMetricDataCommand,
  serializeAws_json1_1GetInstanceMetricDataCommand,
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

export type GetInstanceMetricDataCommandInput = GetInstanceMetricDataRequest;
export type GetInstanceMetricDataCommandOutput = GetInstanceMetricDataResult & __MetadataBearer;

export class GetInstanceMetricDataCommand extends $Command<
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstanceMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInstanceMetricDataCommandInput, GetInstanceMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetInstanceMetricDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceMetricDataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstanceMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstanceMetricDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceMetricDataCommandOutput> {
    return deserializeAws_json1_1GetInstanceMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
