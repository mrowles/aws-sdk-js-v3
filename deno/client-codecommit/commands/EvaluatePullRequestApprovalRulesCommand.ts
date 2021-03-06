
import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { EvaluatePullRequestApprovalRulesInput, EvaluatePullRequestApprovalRulesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand,
  serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand,
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

export type EvaluatePullRequestApprovalRulesCommandInput = EvaluatePullRequestApprovalRulesInput;
export type EvaluatePullRequestApprovalRulesCommandOutput = EvaluatePullRequestApprovalRulesOutput & __MetadataBearer;

export class EvaluatePullRequestApprovalRulesCommand extends $Command<
  EvaluatePullRequestApprovalRulesCommandInput,
  EvaluatePullRequestApprovalRulesCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EvaluatePullRequestApprovalRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EvaluatePullRequestApprovalRulesCommandInput, EvaluatePullRequestApprovalRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: EvaluatePullRequestApprovalRulesInput.filterSensitiveLog,
      outputFilterSensitiveLog: EvaluatePullRequestApprovalRulesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EvaluatePullRequestApprovalRulesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EvaluatePullRequestApprovalRulesCommandOutput> {
    return deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
