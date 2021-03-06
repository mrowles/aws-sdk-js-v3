
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { StartAvailabilityMonitorTestInput, StartAvailabilityMonitorTestOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartAvailabilityMonitorTestCommand,
  serializeAws_json1_1StartAvailabilityMonitorTestCommand,
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

export type StartAvailabilityMonitorTestCommandInput = StartAvailabilityMonitorTestInput;
export type StartAvailabilityMonitorTestCommandOutput = StartAvailabilityMonitorTestOutput & __MetadataBearer;

export class StartAvailabilityMonitorTestCommand extends $Command<
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartAvailabilityMonitorTestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartAvailabilityMonitorTestCommandInput, StartAvailabilityMonitorTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartAvailabilityMonitorTestInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartAvailabilityMonitorTestOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAvailabilityMonitorTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartAvailabilityMonitorTestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartAvailabilityMonitorTestCommandOutput> {
    return deserializeAws_json1_1StartAvailabilityMonitorTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
