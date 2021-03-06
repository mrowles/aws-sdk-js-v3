
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import {
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand,
  serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand,
} from "../protocols/Aws_query.ts";
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

export type GetServiceLinkedRoleDeletionStatusCommandInput = GetServiceLinkedRoleDeletionStatusRequest;
export type GetServiceLinkedRoleDeletionStatusCommandOutput = GetServiceLinkedRoleDeletionStatusResponse &
  __MetadataBearer;

export class GetServiceLinkedRoleDeletionStatusCommand extends $Command<
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceLinkedRoleDeletionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServiceLinkedRoleDeletionStatusCommandInput, GetServiceLinkedRoleDeletionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetServiceLinkedRoleDeletionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceLinkedRoleDeletionStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetServiceLinkedRoleDeletionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> {
    return deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
