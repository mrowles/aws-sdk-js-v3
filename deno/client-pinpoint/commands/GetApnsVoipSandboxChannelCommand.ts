
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient.ts";
import { GetApnsVoipSandboxChannelRequest, GetApnsVoipSandboxChannelResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1GetApnsVoipSandboxChannelCommand,
  serializeAws_restJson1GetApnsVoipSandboxChannelCommand,
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

export type GetApnsVoipSandboxChannelCommandInput = GetApnsVoipSandboxChannelRequest;
export type GetApnsVoipSandboxChannelCommandOutput = GetApnsVoipSandboxChannelResponse & __MetadataBearer;

export class GetApnsVoipSandboxChannelCommand extends $Command<
  GetApnsVoipSandboxChannelCommandInput,
  GetApnsVoipSandboxChannelCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetApnsVoipSandboxChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApnsVoipSandboxChannelCommandInput, GetApnsVoipSandboxChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetApnsVoipSandboxChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetApnsVoipSandboxChannelResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetApnsVoipSandboxChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetApnsVoipSandboxChannelCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetApnsVoipSandboxChannelCommandOutput> {
    return deserializeAws_restJson1GetApnsVoipSandboxChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
