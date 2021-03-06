
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeFlowLogsRequest, DescribeFlowLogsResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DescribeFlowLogsCommand,
  serializeAws_ec2DescribeFlowLogsCommand,
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

export type DescribeFlowLogsCommandInput = DescribeFlowLogsRequest;
export type DescribeFlowLogsCommandOutput = DescribeFlowLogsResult & __MetadataBearer;

export class DescribeFlowLogsCommand extends $Command<
  DescribeFlowLogsCommandInput,
  DescribeFlowLogsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFlowLogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlowLogsCommandInput, DescribeFlowLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeFlowLogsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFlowLogsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFlowLogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeFlowLogsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFlowLogsCommandOutput> {
    return deserializeAws_ec2DescribeFlowLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
