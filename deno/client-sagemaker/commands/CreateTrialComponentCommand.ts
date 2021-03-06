
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { CreateTrialComponentRequest, CreateTrialComponentResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateTrialComponentCommand,
  serializeAws_json1_1CreateTrialComponentCommand,
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

export type CreateTrialComponentCommandInput = CreateTrialComponentRequest;
export type CreateTrialComponentCommandOutput = CreateTrialComponentResponse & __MetadataBearer;

export class CreateTrialComponentCommand extends $Command<
  CreateTrialComponentCommandInput,
  CreateTrialComponentCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTrialComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrialComponentCommandInput, CreateTrialComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateTrialComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrialComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrialComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTrialComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrialComponentCommandOutput> {
    return deserializeAws_json1_1CreateTrialComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
