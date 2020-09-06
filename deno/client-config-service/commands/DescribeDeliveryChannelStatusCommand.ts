
import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { DescribeDeliveryChannelStatusRequest, DescribeDeliveryChannelStatusResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeDeliveryChannelStatusCommand,
  serializeAws_json1_1DescribeDeliveryChannelStatusCommand,
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

export type DescribeDeliveryChannelStatusCommandInput = DescribeDeliveryChannelStatusRequest;
export type DescribeDeliveryChannelStatusCommandOutput = DescribeDeliveryChannelStatusResponse & __MetadataBearer;

export class DescribeDeliveryChannelStatusCommand extends $Command<
  DescribeDeliveryChannelStatusCommandInput,
  DescribeDeliveryChannelStatusCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDeliveryChannelStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDeliveryChannelStatusCommandInput, DescribeDeliveryChannelStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeDeliveryChannelStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDeliveryChannelStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDeliveryChannelStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDeliveryChannelStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDeliveryChannelStatusCommandOutput> {
    return deserializeAws_json1_1DescribeDeliveryChannelStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
