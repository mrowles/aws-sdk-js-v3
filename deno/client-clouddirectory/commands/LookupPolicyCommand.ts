
import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { LookupPolicyRequest, LookupPolicyResponse } from "../models/index.ts";
import {
  deserializeAws_restJson1LookupPolicyCommand,
  serializeAws_restJson1LookupPolicyCommand,
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

export type LookupPolicyCommandInput = LookupPolicyRequest;
export type LookupPolicyCommandOutput = LookupPolicyResponse & __MetadataBearer;

export class LookupPolicyCommand extends $Command<
  LookupPolicyCommandInput,
  LookupPolicyCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LookupPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LookupPolicyCommandInput, LookupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: LookupPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LookupPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LookupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1LookupPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LookupPolicyCommandOutput> {
    return deserializeAws_restJson1LookupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
