
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient.ts";
import { ListAssessmentRunsRequest, ListAssessmentRunsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAssessmentRunsCommand,
  serializeAws_json1_1ListAssessmentRunsCommand,
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

export type ListAssessmentRunsCommandInput = ListAssessmentRunsRequest;
export type ListAssessmentRunsCommandOutput = ListAssessmentRunsResponse & __MetadataBearer;

export class ListAssessmentRunsCommand extends $Command<
  ListAssessmentRunsCommandInput,
  ListAssessmentRunsCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssessmentRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListAssessmentRunsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentRunsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssessmentRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssessmentRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentRunsCommandOutput> {
    return deserializeAws_json1_1ListAssessmentRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
