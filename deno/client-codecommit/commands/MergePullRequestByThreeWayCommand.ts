
import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { MergePullRequestByThreeWayInput, MergePullRequestByThreeWayOutput } from "../models/index.ts";
import {
  deserializeAws_json1_1MergePullRequestByThreeWayCommand,
  serializeAws_json1_1MergePullRequestByThreeWayCommand,
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

export type MergePullRequestByThreeWayCommandInput = MergePullRequestByThreeWayInput;
export type MergePullRequestByThreeWayCommandOutput = MergePullRequestByThreeWayOutput & __MetadataBearer;

export class MergePullRequestByThreeWayCommand extends $Command<
  MergePullRequestByThreeWayCommandInput,
  MergePullRequestByThreeWayCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergePullRequestByThreeWayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MergePullRequestByThreeWayCommandInput, MergePullRequestByThreeWayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: MergePullRequestByThreeWayInput.filterSensitiveLog,
      outputFilterSensitiveLog: MergePullRequestByThreeWayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergePullRequestByThreeWayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergePullRequestByThreeWayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MergePullRequestByThreeWayCommandOutput> {
    return deserializeAws_json1_1MergePullRequestByThreeWayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
