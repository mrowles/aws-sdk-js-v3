
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import { DeleteRobotRequest, DeleteRobotResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteRobotCommand,
  serializeAws_restJson1DeleteRobotCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type DeleteRobotCommandInput = DeleteRobotRequest;
export type DeleteRobotCommandOutput = DeleteRobotResponse & __MetadataBearer;

export class DeleteRobotCommand extends $Command<
  DeleteRobotCommandInput,
  DeleteRobotCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRobotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRobotCommandInput, DeleteRobotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteRobotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRobotResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRobotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRobotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRobotCommandOutput> {
    return deserializeAws_restJson1DeleteRobotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
