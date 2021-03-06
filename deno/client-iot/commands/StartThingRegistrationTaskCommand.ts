
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { StartThingRegistrationTaskRequest, StartThingRegistrationTaskResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1StartThingRegistrationTaskCommand,
  serializeAws_restJson1StartThingRegistrationTaskCommand,
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

export type StartThingRegistrationTaskCommandInput = StartThingRegistrationTaskRequest;
export type StartThingRegistrationTaskCommandOutput = StartThingRegistrationTaskResponse & __MetadataBearer;

export class StartThingRegistrationTaskCommand extends $Command<
  StartThingRegistrationTaskCommandInput,
  StartThingRegistrationTaskCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartThingRegistrationTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartThingRegistrationTaskCommandInput, StartThingRegistrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartThingRegistrationTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartThingRegistrationTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartThingRegistrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartThingRegistrationTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartThingRegistrationTaskCommandOutput> {
    return deserializeAws_restJson1StartThingRegistrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
