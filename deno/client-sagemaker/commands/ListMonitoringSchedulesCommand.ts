
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListMonitoringSchedulesRequest, ListMonitoringSchedulesResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1ListMonitoringSchedulesCommand,
  serializeAws_json1_1ListMonitoringSchedulesCommand,
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

export type ListMonitoringSchedulesCommandInput = ListMonitoringSchedulesRequest;
export type ListMonitoringSchedulesCommandOutput = ListMonitoringSchedulesResponse & __MetadataBearer;

export class ListMonitoringSchedulesCommand extends $Command<
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMonitoringSchedulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMonitoringSchedulesCommandInput, ListMonitoringSchedulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListMonitoringSchedulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMonitoringSchedulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMonitoringSchedulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMonitoringSchedulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMonitoringSchedulesCommandOutput> {
    return deserializeAws_json1_1ListMonitoringSchedulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
