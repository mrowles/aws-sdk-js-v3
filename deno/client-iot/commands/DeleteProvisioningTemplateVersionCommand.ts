
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import {
  DeleteProvisioningTemplateVersionRequest,
  DeleteProvisioningTemplateVersionResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteProvisioningTemplateVersionCommand,
  serializeAws_restJson1DeleteProvisioningTemplateVersionCommand,
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

export type DeleteProvisioningTemplateVersionCommandInput = DeleteProvisioningTemplateVersionRequest;
export type DeleteProvisioningTemplateVersionCommandOutput = DeleteProvisioningTemplateVersionResponse &
  __MetadataBearer;

export class DeleteProvisioningTemplateVersionCommand extends $Command<
  DeleteProvisioningTemplateVersionCommandInput,
  DeleteProvisioningTemplateVersionCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProvisioningTemplateVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProvisioningTemplateVersionCommandInput, DeleteProvisioningTemplateVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteProvisioningTemplateVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteProvisioningTemplateVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteProvisioningTemplateVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteProvisioningTemplateVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProvisioningTemplateVersionCommandOutput> {
    return deserializeAws_restJson1DeleteProvisioningTemplateVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
