
import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient.ts";
import { DeleteRemoteAccessSessionRequest, DeleteRemoteAccessSessionResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteRemoteAccessSessionCommand,
  serializeAws_json1_1DeleteRemoteAccessSessionCommand,
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

export type DeleteRemoteAccessSessionCommandInput = DeleteRemoteAccessSessionRequest;
export type DeleteRemoteAccessSessionCommandOutput = DeleteRemoteAccessSessionResult & __MetadataBearer;

export class DeleteRemoteAccessSessionCommand extends $Command<
  DeleteRemoteAccessSessionCommandInput,
  DeleteRemoteAccessSessionCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRemoteAccessSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRemoteAccessSessionCommandInput, DeleteRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteRemoteAccessSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRemoteAccessSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRemoteAccessSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRemoteAccessSessionCommandOutput> {
    return deserializeAws_json1_1DeleteRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
