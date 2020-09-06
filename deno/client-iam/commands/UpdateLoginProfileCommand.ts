
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { UpdateLoginProfileRequest } from "../models/index.ts";
import {
  deserializeAws_queryUpdateLoginProfileCommand,
  serializeAws_queryUpdateLoginProfileCommand,
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

export type UpdateLoginProfileCommandInput = UpdateLoginProfileRequest;
export type UpdateLoginProfileCommandOutput = __MetadataBearer;

export class UpdateLoginProfileCommand extends $Command<
  UpdateLoginProfileCommandInput,
  UpdateLoginProfileCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLoginProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateLoginProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLoginProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateLoginProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLoginProfileCommandOutput> {
    return deserializeAws_queryUpdateLoginProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
