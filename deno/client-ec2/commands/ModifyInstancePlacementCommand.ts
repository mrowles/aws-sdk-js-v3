
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ModifyInstancePlacementRequest, ModifyInstancePlacementResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2ModifyInstancePlacementCommand,
  serializeAws_ec2ModifyInstancePlacementCommand,
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

export type ModifyInstancePlacementCommandInput = ModifyInstancePlacementRequest;
export type ModifyInstancePlacementCommandOutput = ModifyInstancePlacementResult & __MetadataBearer;

export class ModifyInstancePlacementCommand extends $Command<
  ModifyInstancePlacementCommandInput,
  ModifyInstancePlacementCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyInstancePlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyInstancePlacementCommandInput, ModifyInstancePlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ModifyInstancePlacementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyInstancePlacementResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyInstancePlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstancePlacementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyInstancePlacementCommandOutput> {
    return deserializeAws_ec2ModifyInstancePlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
