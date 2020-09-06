
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  DescribeIamInstanceProfileAssociationsRequest,
  DescribeIamInstanceProfileAssociationsResult,
} from "../models/index.ts";
import {
  deserializeAws_ec2DescribeIamInstanceProfileAssociationsCommand,
  serializeAws_ec2DescribeIamInstanceProfileAssociationsCommand,
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

export type DescribeIamInstanceProfileAssociationsCommandInput = DescribeIamInstanceProfileAssociationsRequest;
export type DescribeIamInstanceProfileAssociationsCommandOutput = DescribeIamInstanceProfileAssociationsResult &
  __MetadataBearer;

export class DescribeIamInstanceProfileAssociationsCommand extends $Command<
  DescribeIamInstanceProfileAssociationsCommandInput,
  DescribeIamInstanceProfileAssociationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIamInstanceProfileAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIamInstanceProfileAssociationsCommandInput, DescribeIamInstanceProfileAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeIamInstanceProfileAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIamInstanceProfileAssociationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeIamInstanceProfileAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeIamInstanceProfileAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIamInstanceProfileAssociationsCommandOutput> {
    return deserializeAws_ec2DescribeIamInstanceProfileAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
