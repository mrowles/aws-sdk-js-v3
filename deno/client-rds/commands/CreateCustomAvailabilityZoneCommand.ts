
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { CreateCustomAvailabilityZoneMessage, CreateCustomAvailabilityZoneResult } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateCustomAvailabilityZoneCommand,
  serializeAws_queryCreateCustomAvailabilityZoneCommand,
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

export type CreateCustomAvailabilityZoneCommandInput = CreateCustomAvailabilityZoneMessage;
export type CreateCustomAvailabilityZoneCommandOutput = CreateCustomAvailabilityZoneResult & __MetadataBearer;

export class CreateCustomAvailabilityZoneCommand extends $Command<
  CreateCustomAvailabilityZoneCommandInput,
  CreateCustomAvailabilityZoneCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomAvailabilityZoneCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCustomAvailabilityZoneCommandInput, CreateCustomAvailabilityZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateCustomAvailabilityZoneMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomAvailabilityZoneResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomAvailabilityZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateCustomAvailabilityZoneCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomAvailabilityZoneCommandOutput> {
    return deserializeAws_queryCreateCustomAvailabilityZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
