
import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient.ts";
import { GetSavingsPlansCoverageRequest, GetSavingsPlansCoverageResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetSavingsPlansCoverageCommand,
  serializeAws_json1_1GetSavingsPlansCoverageCommand,
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

export type GetSavingsPlansCoverageCommandInput = GetSavingsPlansCoverageRequest;
export type GetSavingsPlansCoverageCommandOutput = GetSavingsPlansCoverageResponse & __MetadataBearer;

export class GetSavingsPlansCoverageCommand extends $Command<
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSavingsPlansCoverageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSavingsPlansCoverageCommandInput, GetSavingsPlansCoverageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetSavingsPlansCoverageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSavingsPlansCoverageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSavingsPlansCoverageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSavingsPlansCoverageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSavingsPlansCoverageCommandOutput> {
    return deserializeAws_json1_1GetSavingsPlansCoverageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
