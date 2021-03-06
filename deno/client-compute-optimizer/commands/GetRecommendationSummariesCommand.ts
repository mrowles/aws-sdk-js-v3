
import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient.ts";
import { GetRecommendationSummariesRequest, GetRecommendationSummariesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0GetRecommendationSummariesCommand,
  serializeAws_json1_0GetRecommendationSummariesCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type GetRecommendationSummariesCommandInput = GetRecommendationSummariesRequest;
export type GetRecommendationSummariesCommandOutput = GetRecommendationSummariesResponse & __MetadataBearer;

export class GetRecommendationSummariesCommand extends $Command<
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRecommendationSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetRecommendationSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRecommendationSummariesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRecommendationSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetRecommendationSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecommendationSummariesCommandOutput> {
    return deserializeAws_json1_0GetRecommendationSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
