
import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import { UpdateEmailIdentityPolicyRequest, UpdateEmailIdentityPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateEmailIdentityPolicyCommand,
  serializeAws_restJson1UpdateEmailIdentityPolicyCommand,
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

export type UpdateEmailIdentityPolicyCommandInput = UpdateEmailIdentityPolicyRequest;
export type UpdateEmailIdentityPolicyCommandOutput = UpdateEmailIdentityPolicyResponse & __MetadataBearer;

export class UpdateEmailIdentityPolicyCommand extends $Command<
  UpdateEmailIdentityPolicyCommandInput,
  UpdateEmailIdentityPolicyCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEmailIdentityPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEmailIdentityPolicyCommandInput, UpdateEmailIdentityPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateEmailIdentityPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEmailIdentityPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEmailIdentityPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateEmailIdentityPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateEmailIdentityPolicyCommandOutput> {
    return deserializeAws_restJson1UpdateEmailIdentityPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
