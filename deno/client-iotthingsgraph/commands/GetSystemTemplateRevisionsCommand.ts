
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient.ts";
import { GetSystemTemplateRevisionsRequest, GetSystemTemplateRevisionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetSystemTemplateRevisionsCommand,
  serializeAws_json1_1GetSystemTemplateRevisionsCommand,
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

export type GetSystemTemplateRevisionsCommandInput = GetSystemTemplateRevisionsRequest;
export type GetSystemTemplateRevisionsCommandOutput = GetSystemTemplateRevisionsResponse & __MetadataBearer;

export class GetSystemTemplateRevisionsCommand extends $Command<
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSystemTemplateRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSystemTemplateRevisionsCommandInput, GetSystemTemplateRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetSystemTemplateRevisionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSystemTemplateRevisionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSystemTemplateRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSystemTemplateRevisionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSystemTemplateRevisionsCommandOutput> {
    return deserializeAws_json1_1GetSystemTemplateRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
