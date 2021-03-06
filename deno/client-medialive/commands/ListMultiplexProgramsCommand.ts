
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient.ts";
import { ListMultiplexProgramsRequest, ListMultiplexProgramsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListMultiplexProgramsCommand,
  serializeAws_restJson1ListMultiplexProgramsCommand,
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

export type ListMultiplexProgramsCommandInput = ListMultiplexProgramsRequest;
export type ListMultiplexProgramsCommandOutput = ListMultiplexProgramsResponse & __MetadataBearer;

export class ListMultiplexProgramsCommand extends $Command<
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMultiplexProgramsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMultiplexProgramsCommandInput, ListMultiplexProgramsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListMultiplexProgramsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMultiplexProgramsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMultiplexProgramsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMultiplexProgramsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMultiplexProgramsCommandOutput> {
    return deserializeAws_restJson1ListMultiplexProgramsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
