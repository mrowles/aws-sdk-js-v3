
import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient.ts";
import {
  GetSavingsPlansPurchaseRecommendationRequest,
  GetSavingsPlansPurchaseRecommendationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand,
  serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand,
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

export type GetSavingsPlansPurchaseRecommendationCommandInput = GetSavingsPlansPurchaseRecommendationRequest;
export type GetSavingsPlansPurchaseRecommendationCommandOutput = GetSavingsPlansPurchaseRecommendationResponse &
  __MetadataBearer;

export class GetSavingsPlansPurchaseRecommendationCommand extends $Command<
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSavingsPlansPurchaseRecommendationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSavingsPlansPurchaseRecommendationCommandInput, GetSavingsPlansPurchaseRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetSavingsPlansPurchaseRecommendationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSavingsPlansPurchaseRecommendationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSavingsPlansPurchaseRecommendationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> {
    return deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
