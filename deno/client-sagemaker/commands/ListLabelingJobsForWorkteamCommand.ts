
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListLabelingJobsForWorkteamRequest, ListLabelingJobsForWorkteamResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1ListLabelingJobsForWorkteamCommand,
  serializeAws_json1_1ListLabelingJobsForWorkteamCommand,
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

export type ListLabelingJobsForWorkteamCommandInput = ListLabelingJobsForWorkteamRequest;
export type ListLabelingJobsForWorkteamCommandOutput = ListLabelingJobsForWorkteamResponse & __MetadataBearer;

export class ListLabelingJobsForWorkteamCommand extends $Command<
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListLabelingJobsForWorkteamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLabelingJobsForWorkteamCommandInput, ListLabelingJobsForWorkteamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListLabelingJobsForWorkteamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLabelingJobsForWorkteamResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLabelingJobsForWorkteamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLabelingJobsForWorkteamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLabelingJobsForWorkteamCommandOutput> {
    return deserializeAws_json1_1ListLabelingJobsForWorkteamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
