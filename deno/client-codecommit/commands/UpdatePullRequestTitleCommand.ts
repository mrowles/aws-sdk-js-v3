
import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import { UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput } from "../models/index.ts";
import {
  deserializeAws_json1_1UpdatePullRequestTitleCommand,
  serializeAws_json1_1UpdatePullRequestTitleCommand,
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

export type UpdatePullRequestTitleCommandInput = UpdatePullRequestTitleInput;
export type UpdatePullRequestTitleCommandOutput = UpdatePullRequestTitleOutput & __MetadataBearer;

export class UpdatePullRequestTitleCommand extends $Command<
  UpdatePullRequestTitleCommandInput,
  UpdatePullRequestTitleCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePullRequestTitleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePullRequestTitleCommandInput, UpdatePullRequestTitleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdatePullRequestTitleInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePullRequestTitleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePullRequestTitleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePullRequestTitleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePullRequestTitleCommandOutput> {
    return deserializeAws_json1_1UpdatePullRequestTitleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
