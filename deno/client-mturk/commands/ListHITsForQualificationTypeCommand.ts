
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { ListHITsForQualificationTypeRequest, ListHITsForQualificationTypeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListHITsForQualificationTypeCommand,
  serializeAws_json1_1ListHITsForQualificationTypeCommand,
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

export type ListHITsForQualificationTypeCommandInput = ListHITsForQualificationTypeRequest;
export type ListHITsForQualificationTypeCommandOutput = ListHITsForQualificationTypeResponse & __MetadataBearer;

export class ListHITsForQualificationTypeCommand extends $Command<
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListHITsForQualificationTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHITsForQualificationTypeCommandInput, ListHITsForQualificationTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListHITsForQualificationTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListHITsForQualificationTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHITsForQualificationTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListHITsForQualificationTypeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListHITsForQualificationTypeCommandOutput> {
    return deserializeAws_json1_1ListHITsForQualificationTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
