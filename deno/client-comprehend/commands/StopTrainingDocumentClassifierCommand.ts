
import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { StopTrainingDocumentClassifierRequest, StopTrainingDocumentClassifierResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StopTrainingDocumentClassifierCommand,
  serializeAws_json1_1StopTrainingDocumentClassifierCommand,
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

export type StopTrainingDocumentClassifierCommandInput = StopTrainingDocumentClassifierRequest;
export type StopTrainingDocumentClassifierCommandOutput = StopTrainingDocumentClassifierResponse & __MetadataBearer;

export class StopTrainingDocumentClassifierCommand extends $Command<
  StopTrainingDocumentClassifierCommandInput,
  StopTrainingDocumentClassifierCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopTrainingDocumentClassifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopTrainingDocumentClassifierCommandInput, StopTrainingDocumentClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StopTrainingDocumentClassifierRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopTrainingDocumentClassifierResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StopTrainingDocumentClassifierCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTrainingDocumentClassifierCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopTrainingDocumentClassifierCommandOutput> {
    return deserializeAws_json1_1StopTrainingDocumentClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
