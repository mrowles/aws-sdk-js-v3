
import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { AdminRespondToAuthChallengeRequest, AdminRespondToAuthChallengeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AdminRespondToAuthChallengeCommand,
  serializeAws_json1_1AdminRespondToAuthChallengeCommand,
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

export type AdminRespondToAuthChallengeCommandInput = AdminRespondToAuthChallengeRequest;
export type AdminRespondToAuthChallengeCommandOutput = AdminRespondToAuthChallengeResponse & __MetadataBearer;

export class AdminRespondToAuthChallengeCommand extends $Command<
  AdminRespondToAuthChallengeCommandInput,
  AdminRespondToAuthChallengeCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminRespondToAuthChallengeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminRespondToAuthChallengeCommandInput, AdminRespondToAuthChallengeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AdminRespondToAuthChallengeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminRespondToAuthChallengeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminRespondToAuthChallengeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminRespondToAuthChallengeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AdminRespondToAuthChallengeCommandOutput> {
    return deserializeAws_json1_1AdminRespondToAuthChallengeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
