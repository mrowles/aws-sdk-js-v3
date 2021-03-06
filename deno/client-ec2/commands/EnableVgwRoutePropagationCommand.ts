
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { EnableVgwRoutePropagationRequest } from "../models/models_3.ts";
import {
  deserializeAws_ec2EnableVgwRoutePropagationCommand,
  serializeAws_ec2EnableVgwRoutePropagationCommand,
} from "../protocols/Aws_ec2.ts";
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

export type EnableVgwRoutePropagationCommandInput = EnableVgwRoutePropagationRequest;
export type EnableVgwRoutePropagationCommandOutput = __MetadataBearer;

export class EnableVgwRoutePropagationCommand extends $Command<
  EnableVgwRoutePropagationCommandInput,
  EnableVgwRoutePropagationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableVgwRoutePropagationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableVgwRoutePropagationCommandInput, EnableVgwRoutePropagationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: EnableVgwRoutePropagationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableVgwRoutePropagationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableVgwRoutePropagationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableVgwRoutePropagationCommandOutput> {
    return deserializeAws_ec2EnableVgwRoutePropagationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
