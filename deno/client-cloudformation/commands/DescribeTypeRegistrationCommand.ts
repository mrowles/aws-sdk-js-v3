
import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { DescribeTypeRegistrationInput, DescribeTypeRegistrationOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeTypeRegistrationCommand,
  serializeAws_queryDescribeTypeRegistrationCommand,
} from "../protocols/Aws_query.ts";
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

export type DescribeTypeRegistrationCommandInput = DescribeTypeRegistrationInput;
export type DescribeTypeRegistrationCommandOutput = DescribeTypeRegistrationOutput & __MetadataBearer;

export class DescribeTypeRegistrationCommand extends $Command<
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTypeRegistrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTypeRegistrationCommandInput, DescribeTypeRegistrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeTypeRegistrationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTypeRegistrationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTypeRegistrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTypeRegistrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTypeRegistrationCommandOutput> {
    return deserializeAws_queryDescribeTypeRegistrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
