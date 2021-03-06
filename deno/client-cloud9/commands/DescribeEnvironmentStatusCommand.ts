
import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client.ts";
import { DescribeEnvironmentStatusRequest, DescribeEnvironmentStatusResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeEnvironmentStatusCommand,
  serializeAws_json1_1DescribeEnvironmentStatusCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type DescribeEnvironmentStatusCommandInput = DescribeEnvironmentStatusRequest;
export type DescribeEnvironmentStatusCommandOutput = DescribeEnvironmentStatusResult & __MetadataBearer;

export class DescribeEnvironmentStatusCommand extends $Command<
  DescribeEnvironmentStatusCommandInput,
  DescribeEnvironmentStatusCommandOutput,
  Cloud9ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEnvironmentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEnvironmentStatusCommandInput, DescribeEnvironmentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeEnvironmentStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEnvironmentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEnvironmentStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentStatusCommandOutput> {
    return deserializeAws_json1_1DescribeEnvironmentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
