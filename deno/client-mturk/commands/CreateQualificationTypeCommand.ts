
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { CreateQualificationTypeRequest, CreateQualificationTypeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateQualificationTypeCommand,
  serializeAws_json1_1CreateQualificationTypeCommand,
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

export type CreateQualificationTypeCommandInput = CreateQualificationTypeRequest;
export type CreateQualificationTypeCommandOutput = CreateQualificationTypeResponse & __MetadataBearer;

export class CreateQualificationTypeCommand extends $Command<
  CreateQualificationTypeCommandInput,
  CreateQualificationTypeCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateQualificationTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateQualificationTypeCommandInput, CreateQualificationTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateQualificationTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateQualificationTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateQualificationTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateQualificationTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateQualificationTypeCommandOutput> {
    return deserializeAws_json1_1CreateQualificationTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
