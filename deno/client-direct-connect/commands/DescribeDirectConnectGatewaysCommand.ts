
import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient.ts";
import { DescribeDirectConnectGatewaysRequest, DescribeDirectConnectGatewaysResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeDirectConnectGatewaysCommand,
  serializeAws_json1_1DescribeDirectConnectGatewaysCommand,
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

export type DescribeDirectConnectGatewaysCommandInput = DescribeDirectConnectGatewaysRequest;
export type DescribeDirectConnectGatewaysCommandOutput = DescribeDirectConnectGatewaysResult & __MetadataBearer;

export class DescribeDirectConnectGatewaysCommand extends $Command<
  DescribeDirectConnectGatewaysCommandInput,
  DescribeDirectConnectGatewaysCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDirectConnectGatewaysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDirectConnectGatewaysCommandInput, DescribeDirectConnectGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeDirectConnectGatewaysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectConnectGatewaysResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDirectConnectGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDirectConnectGatewaysCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDirectConnectGatewaysCommandOutput> {
    return deserializeAws_json1_1DescribeDirectConnectGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
