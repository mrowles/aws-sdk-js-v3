
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { GetEnabledStandardsRequest, GetEnabledStandardsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetEnabledStandardsCommand,
  serializeAws_restJson1GetEnabledStandardsCommand,
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

export type GetEnabledStandardsCommandInput = GetEnabledStandardsRequest;
export type GetEnabledStandardsCommandOutput = GetEnabledStandardsResponse & __MetadataBearer;

export class GetEnabledStandardsCommand extends $Command<
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEnabledStandardsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEnabledStandardsCommandInput, GetEnabledStandardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetEnabledStandardsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEnabledStandardsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEnabledStandardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEnabledStandardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEnabledStandardsCommandOutput> {
    return deserializeAws_restJson1GetEnabledStandardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
