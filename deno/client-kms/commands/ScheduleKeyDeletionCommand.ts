
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient.ts";
import { ScheduleKeyDeletionRequest, ScheduleKeyDeletionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ScheduleKeyDeletionCommand,
  serializeAws_json1_1ScheduleKeyDeletionCommand,
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

export type ScheduleKeyDeletionCommandInput = ScheduleKeyDeletionRequest;
export type ScheduleKeyDeletionCommandOutput = ScheduleKeyDeletionResponse & __MetadataBearer;

export class ScheduleKeyDeletionCommand extends $Command<
  ScheduleKeyDeletionCommandInput,
  ScheduleKeyDeletionCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ScheduleKeyDeletionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ScheduleKeyDeletionCommandInput, ScheduleKeyDeletionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ScheduleKeyDeletionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ScheduleKeyDeletionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ScheduleKeyDeletionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ScheduleKeyDeletionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScheduleKeyDeletionCommandOutput> {
    return deserializeAws_json1_1ScheduleKeyDeletionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
