
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient.ts";
import { NotifyApplicationStateRequest, NotifyApplicationStateResult } from "../models/index.ts";
import {
  deserializeAws_json1_1NotifyApplicationStateCommand,
  serializeAws_json1_1NotifyApplicationStateCommand,
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

export type NotifyApplicationStateCommandInput = NotifyApplicationStateRequest;
export type NotifyApplicationStateCommandOutput = NotifyApplicationStateResult & __MetadataBearer;

export class NotifyApplicationStateCommand extends $Command<
  NotifyApplicationStateCommandInput,
  NotifyApplicationStateCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NotifyApplicationStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: NotifyApplicationStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: NotifyApplicationStateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyApplicationStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyApplicationStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyApplicationStateCommandOutput> {
    return deserializeAws_json1_1NotifyApplicationStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
