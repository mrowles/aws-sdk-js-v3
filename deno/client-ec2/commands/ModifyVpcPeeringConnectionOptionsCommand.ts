
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ModifyVpcPeeringConnectionOptionsRequest, ModifyVpcPeeringConnectionOptionsResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand,
  serializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand,
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

export type ModifyVpcPeeringConnectionOptionsCommandInput = ModifyVpcPeeringConnectionOptionsRequest;
export type ModifyVpcPeeringConnectionOptionsCommandOutput = ModifyVpcPeeringConnectionOptionsResult & __MetadataBearer;

export class ModifyVpcPeeringConnectionOptionsCommand extends $Command<
  ModifyVpcPeeringConnectionOptionsCommandInput,
  ModifyVpcPeeringConnectionOptionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpcPeeringConnectionOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyVpcPeeringConnectionOptionsCommandInput, ModifyVpcPeeringConnectionOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ModifyVpcPeeringConnectionOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcPeeringConnectionOptionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyVpcPeeringConnectionOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcPeeringConnectionOptionsCommandOutput> {
    return deserializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
