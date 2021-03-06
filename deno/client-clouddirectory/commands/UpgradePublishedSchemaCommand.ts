
import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { UpgradePublishedSchemaRequest, UpgradePublishedSchemaResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpgradePublishedSchemaCommand,
  serializeAws_restJson1UpgradePublishedSchemaCommand,
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

export type UpgradePublishedSchemaCommandInput = UpgradePublishedSchemaRequest;
export type UpgradePublishedSchemaCommandOutput = UpgradePublishedSchemaResponse & __MetadataBearer;

export class UpgradePublishedSchemaCommand extends $Command<
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpgradePublishedSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpgradePublishedSchemaCommandInput, UpgradePublishedSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpgradePublishedSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpgradePublishedSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpgradePublishedSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpgradePublishedSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpgradePublishedSchemaCommandOutput> {
    return deserializeAws_restJson1UpgradePublishedSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
