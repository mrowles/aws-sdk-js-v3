
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient.ts";
import { ListRulesRequest, ListRulesResponse } from "../models/models_0.ts";
import { deserializeAws_json1_1ListRulesCommand, serializeAws_json1_1ListRulesCommand } from "../protocols/Aws_json1_1.ts";
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

export type ListRulesCommandInput = ListRulesRequest;
export type ListRulesCommandOutput = ListRulesResponse & __MetadataBearer;

export class ListRulesCommand extends $Command<ListRulesCommandInput, ListRulesCommandOutput, WAFClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRulesCommandInput, ListRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRulesCommandOutput> {
    return deserializeAws_json1_1ListRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
