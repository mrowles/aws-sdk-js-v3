
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient.ts";
import {
  DescribeTrustedAdvisorCheckResultRequest,
  DescribeTrustedAdvisorCheckResultResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand,
  serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand,
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

export type DescribeTrustedAdvisorCheckResultCommandInput = DescribeTrustedAdvisorCheckResultRequest;
export type DescribeTrustedAdvisorCheckResultCommandOutput = DescribeTrustedAdvisorCheckResultResponse &
  __MetadataBearer;

export class DescribeTrustedAdvisorCheckResultCommand extends $Command<
  DescribeTrustedAdvisorCheckResultCommandInput,
  DescribeTrustedAdvisorCheckResultCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrustedAdvisorCheckResultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrustedAdvisorCheckResultCommandInput, DescribeTrustedAdvisorCheckResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeTrustedAdvisorCheckResultRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrustedAdvisorCheckResultResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTrustedAdvisorCheckResultCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> {
    return deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
