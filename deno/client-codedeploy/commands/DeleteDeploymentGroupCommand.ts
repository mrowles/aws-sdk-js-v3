
import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient.ts";
import { DeleteDeploymentGroupInput, DeleteDeploymentGroupOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteDeploymentGroupCommand,
  serializeAws_json1_1DeleteDeploymentGroupCommand,
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

export type DeleteDeploymentGroupCommandInput = DeleteDeploymentGroupInput;
export type DeleteDeploymentGroupCommandOutput = DeleteDeploymentGroupOutput & __MetadataBearer;

export class DeleteDeploymentGroupCommand extends $Command<
  DeleteDeploymentGroupCommandInput,
  DeleteDeploymentGroupCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDeploymentGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeploymentGroupCommandInput, DeleteDeploymentGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteDeploymentGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDeploymentGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDeploymentGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDeploymentGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeploymentGroupCommandOutput> {
    return deserializeAws_json1_1DeleteDeploymentGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
