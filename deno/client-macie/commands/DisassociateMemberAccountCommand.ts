
import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient.ts";
import { DisassociateMemberAccountRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateMemberAccountCommand,
  serializeAws_json1_1DisassociateMemberAccountCommand,
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

export type DisassociateMemberAccountCommandInput = DisassociateMemberAccountRequest;
export type DisassociateMemberAccountCommandOutput = __MetadataBearer;

export class DisassociateMemberAccountCommand extends $Command<
  DisassociateMemberAccountCommandInput,
  DisassociateMemberAccountCommandOutput,
  MacieClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateMemberAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateMemberAccountCommandInput, DisassociateMemberAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DisassociateMemberAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateMemberAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateMemberAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateMemberAccountCommandOutput> {
    return deserializeAws_json1_1DisassociateMemberAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
