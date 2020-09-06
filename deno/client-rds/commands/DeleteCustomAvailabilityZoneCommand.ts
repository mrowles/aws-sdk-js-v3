
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { DeleteCustomAvailabilityZoneMessage, DeleteCustomAvailabilityZoneResult } from "../models/index.ts";
import {
  deserializeAws_queryDeleteCustomAvailabilityZoneCommand,
  serializeAws_queryDeleteCustomAvailabilityZoneCommand,
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

export type DeleteCustomAvailabilityZoneCommandInput = DeleteCustomAvailabilityZoneMessage;
export type DeleteCustomAvailabilityZoneCommandOutput = DeleteCustomAvailabilityZoneResult & __MetadataBearer;

export class DeleteCustomAvailabilityZoneCommand extends $Command<
  DeleteCustomAvailabilityZoneCommandInput,
  DeleteCustomAvailabilityZoneCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCustomAvailabilityZoneCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCustomAvailabilityZoneCommandInput, DeleteCustomAvailabilityZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteCustomAvailabilityZoneMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCustomAvailabilityZoneResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCustomAvailabilityZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteCustomAvailabilityZoneCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCustomAvailabilityZoneCommandOutput> {
    return deserializeAws_queryDeleteCustomAvailabilityZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
