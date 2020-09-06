
import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import {
  DisassociateSigninDelegateGroupsFromAccountRequest,
  DisassociateSigninDelegateGroupsFromAccountResponse,
} from "../models/index.ts";
import {
  deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand,
  serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand,
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

export type DisassociateSigninDelegateGroupsFromAccountCommandInput = DisassociateSigninDelegateGroupsFromAccountRequest;
export type DisassociateSigninDelegateGroupsFromAccountCommandOutput = DisassociateSigninDelegateGroupsFromAccountResponse &
  __MetadataBearer;

export class DisassociateSigninDelegateGroupsFromAccountCommand extends $Command<
  DisassociateSigninDelegateGroupsFromAccountCommandInput,
  DisassociateSigninDelegateGroupsFromAccountCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateSigninDelegateGroupsFromAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateSigninDelegateGroupsFromAccountCommandInput,
    DisassociateSigninDelegateGroupsFromAccountCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DisassociateSigninDelegateGroupsFromAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateSigninDelegateGroupsFromAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateSigninDelegateGroupsFromAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateSigninDelegateGroupsFromAccountCommandOutput> {
    return deserializeAws_restJson1DisassociateSigninDelegateGroupsFromAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
