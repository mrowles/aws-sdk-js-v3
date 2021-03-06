
import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient.ts";
import { DisassociateDeviceFromPlacementRequest, DisassociateDeviceFromPlacementResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DisassociateDeviceFromPlacementCommand,
  serializeAws_restJson1DisassociateDeviceFromPlacementCommand,
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

export type DisassociateDeviceFromPlacementCommandInput = DisassociateDeviceFromPlacementRequest;
export type DisassociateDeviceFromPlacementCommandOutput = DisassociateDeviceFromPlacementResponse & __MetadataBearer;

export class DisassociateDeviceFromPlacementCommand extends $Command<
  DisassociateDeviceFromPlacementCommandInput,
  DisassociateDeviceFromPlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateDeviceFromPlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateDeviceFromPlacementCommandInput, DisassociateDeviceFromPlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DisassociateDeviceFromPlacementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDeviceFromPlacementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateDeviceFromPlacementCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateDeviceFromPlacementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateDeviceFromPlacementCommandOutput> {
    return deserializeAws_restJson1DisassociateDeviceFromPlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
