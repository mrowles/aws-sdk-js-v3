
import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient.ts";
import { StartOnDemandReplicationRunRequest, StartOnDemandReplicationRunResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartOnDemandReplicationRunCommand,
  serializeAws_json1_1StartOnDemandReplicationRunCommand,
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

export type StartOnDemandReplicationRunCommandInput = StartOnDemandReplicationRunRequest;
export type StartOnDemandReplicationRunCommandOutput = StartOnDemandReplicationRunResponse & __MetadataBearer;

export class StartOnDemandReplicationRunCommand extends $Command<
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartOnDemandReplicationRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartOnDemandReplicationRunCommandInput, StartOnDemandReplicationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartOnDemandReplicationRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartOnDemandReplicationRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartOnDemandReplicationRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartOnDemandReplicationRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOnDemandReplicationRunCommandOutput> {
    return deserializeAws_json1_1StartOnDemandReplicationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
