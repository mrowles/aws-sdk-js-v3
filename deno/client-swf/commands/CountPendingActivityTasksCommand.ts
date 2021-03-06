
import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient.ts";
import { CountPendingActivityTasksInput, PendingTaskCount } from "../models/models_0.ts";
import {
  deserializeAws_json1_0CountPendingActivityTasksCommand,
  serializeAws_json1_0CountPendingActivityTasksCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type CountPendingActivityTasksCommandInput = CountPendingActivityTasksInput;
export type CountPendingActivityTasksCommandOutput = PendingTaskCount & __MetadataBearer;

export class CountPendingActivityTasksCommand extends $Command<
  CountPendingActivityTasksCommandInput,
  CountPendingActivityTasksCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CountPendingActivityTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CountPendingActivityTasksCommandInput, CountPendingActivityTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CountPendingActivityTasksInput.filterSensitiveLog,
      outputFilterSensitiveLog: PendingTaskCount.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CountPendingActivityTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CountPendingActivityTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CountPendingActivityTasksCommandOutput> {
    return deserializeAws_json1_0CountPendingActivityTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
