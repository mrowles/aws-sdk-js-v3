
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import { ListSimulationJobBatchesRequest, ListSimulationJobBatchesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListSimulationJobBatchesCommand,
  serializeAws_restJson1ListSimulationJobBatchesCommand,
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

export type ListSimulationJobBatchesCommandInput = ListSimulationJobBatchesRequest;
export type ListSimulationJobBatchesCommandOutput = ListSimulationJobBatchesResponse & __MetadataBearer;

export class ListSimulationJobBatchesCommand extends $Command<
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSimulationJobBatchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSimulationJobBatchesCommandInput, ListSimulationJobBatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListSimulationJobBatchesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSimulationJobBatchesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSimulationJobBatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSimulationJobBatchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSimulationJobBatchesCommandOutput> {
    return deserializeAws_restJson1ListSimulationJobBatchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
