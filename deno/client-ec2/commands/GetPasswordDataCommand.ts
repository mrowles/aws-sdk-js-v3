
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { GetPasswordDataRequest, GetPasswordDataResult } from "../models/models_3.ts";
import { deserializeAws_ec2GetPasswordDataCommand, serializeAws_ec2GetPasswordDataCommand } from "../protocols/Aws_ec2.ts";
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

export type GetPasswordDataCommandInput = GetPasswordDataRequest;
export type GetPasswordDataCommandOutput = GetPasswordDataResult & __MetadataBearer;

export class GetPasswordDataCommand extends $Command<
  GetPasswordDataCommandInput,
  GetPasswordDataCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPasswordDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPasswordDataCommandInput, GetPasswordDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetPasswordDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPasswordDataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPasswordDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetPasswordDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPasswordDataCommandOutput> {
    return deserializeAws_ec2GetPasswordDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
