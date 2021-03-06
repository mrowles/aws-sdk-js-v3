
import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient.ts";
import { DeleteBusinessReportScheduleRequest, DeleteBusinessReportScheduleResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteBusinessReportScheduleCommand,
  serializeAws_json1_1DeleteBusinessReportScheduleCommand,
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

export type DeleteBusinessReportScheduleCommandInput = DeleteBusinessReportScheduleRequest;
export type DeleteBusinessReportScheduleCommandOutput = DeleteBusinessReportScheduleResponse & __MetadataBearer;

export class DeleteBusinessReportScheduleCommand extends $Command<
  DeleteBusinessReportScheduleCommandInput,
  DeleteBusinessReportScheduleCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBusinessReportScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBusinessReportScheduleCommandInput, DeleteBusinessReportScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteBusinessReportScheduleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBusinessReportScheduleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBusinessReportScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBusinessReportScheduleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteBusinessReportScheduleCommandOutput> {
    return deserializeAws_json1_1DeleteBusinessReportScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
