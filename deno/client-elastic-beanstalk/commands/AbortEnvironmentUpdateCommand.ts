
import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { AbortEnvironmentUpdateMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryAbortEnvironmentUpdateCommand,
  serializeAws_queryAbortEnvironmentUpdateCommand,
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

export type AbortEnvironmentUpdateCommandInput = AbortEnvironmentUpdateMessage;
export type AbortEnvironmentUpdateCommandOutput = __MetadataBearer;

export class AbortEnvironmentUpdateCommand extends $Command<
  AbortEnvironmentUpdateCommandInput,
  AbortEnvironmentUpdateCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AbortEnvironmentUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AbortEnvironmentUpdateCommandInput, AbortEnvironmentUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AbortEnvironmentUpdateMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AbortEnvironmentUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAbortEnvironmentUpdateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AbortEnvironmentUpdateCommandOutput> {
    return deserializeAws_queryAbortEnvironmentUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
