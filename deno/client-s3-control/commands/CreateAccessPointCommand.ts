
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient.ts";
import { CreateAccessPointRequest } from "../models/models_0.ts";
import {
  deserializeAws_restXmlCreateAccessPointCommand,
  serializeAws_restXmlCreateAccessPointCommand,
} from "../protocols/Aws_restXml.ts";
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

export type CreateAccessPointCommandInput = CreateAccessPointRequest;
export type CreateAccessPointCommandOutput = __MetadataBearer;

export class CreateAccessPointCommand extends $Command<
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccessPointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessPointCommandInput, CreateAccessPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateAccessPointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccessPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateAccessPointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessPointCommandOutput> {
    return deserializeAws_restXmlCreateAccessPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
