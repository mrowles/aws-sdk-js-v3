
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient.ts";
import { CreateDataSourceFromS3Input, CreateDataSourceFromS3Output } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateDataSourceFromS3Command,
  serializeAws_json1_1CreateDataSourceFromS3Command,
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

export type CreateDataSourceFromS3CommandInput = CreateDataSourceFromS3Input;
export type CreateDataSourceFromS3CommandOutput = CreateDataSourceFromS3Output & __MetadataBearer;

export class CreateDataSourceFromS3Command extends $Command<
  CreateDataSourceFromS3CommandInput,
  CreateDataSourceFromS3CommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDataSourceFromS3CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataSourceFromS3CommandInput, CreateDataSourceFromS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateDataSourceFromS3Input.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDataSourceFromS3Output.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataSourceFromS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataSourceFromS3Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataSourceFromS3CommandOutput> {
    return deserializeAws_json1_1CreateDataSourceFromS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
