
import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { ListReceiptFiltersRequest, ListReceiptFiltersResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListReceiptFiltersCommand,
  serializeAws_queryListReceiptFiltersCommand,
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

export type ListReceiptFiltersCommandInput = ListReceiptFiltersRequest;
export type ListReceiptFiltersCommandOutput = ListReceiptFiltersResponse & __MetadataBearer;

export class ListReceiptFiltersCommand extends $Command<
  ListReceiptFiltersCommandInput,
  ListReceiptFiltersCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReceiptFiltersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListReceiptFiltersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReceiptFiltersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReceiptFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListReceiptFiltersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReceiptFiltersCommandOutput> {
    return deserializeAws_queryListReceiptFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
