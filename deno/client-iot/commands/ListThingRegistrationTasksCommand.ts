
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListThingRegistrationTasksRequest, ListThingRegistrationTasksResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListThingRegistrationTasksCommand,
  serializeAws_restJson1ListThingRegistrationTasksCommand,
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

export type ListThingRegistrationTasksCommandInput = ListThingRegistrationTasksRequest;
export type ListThingRegistrationTasksCommandOutput = ListThingRegistrationTasksResponse & __MetadataBearer;

export class ListThingRegistrationTasksCommand extends $Command<
  ListThingRegistrationTasksCommandInput,
  ListThingRegistrationTasksCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListThingRegistrationTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListThingRegistrationTasksCommandInput, ListThingRegistrationTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListThingRegistrationTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListThingRegistrationTasksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListThingRegistrationTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListThingRegistrationTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListThingRegistrationTasksCommandOutput> {
    return deserializeAws_restJson1ListThingRegistrationTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
