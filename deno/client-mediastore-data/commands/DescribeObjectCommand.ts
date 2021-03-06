
import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient.ts";
import { DescribeObjectRequest, DescribeObjectResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeObjectCommand,
  serializeAws_restJson1DescribeObjectCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type DescribeObjectCommandInput = DescribeObjectRequest;
export type DescribeObjectCommandOutput = DescribeObjectResponse & __MetadataBearer;

export class DescribeObjectCommand extends $Command<
  DescribeObjectCommandInput,
  DescribeObjectCommandOutput,
  MediaStoreDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeObjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeObjectCommandInput, DescribeObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeObjectCommandOutput> {
    return deserializeAws_restJson1DescribeObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
