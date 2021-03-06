
import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient.ts";
import { UpgradeElasticsearchDomainRequest, UpgradeElasticsearchDomainResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpgradeElasticsearchDomainCommand,
  serializeAws_restJson1UpgradeElasticsearchDomainCommand,
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

export type UpgradeElasticsearchDomainCommandInput = UpgradeElasticsearchDomainRequest;
export type UpgradeElasticsearchDomainCommandOutput = UpgradeElasticsearchDomainResponse & __MetadataBearer;

export class UpgradeElasticsearchDomainCommand extends $Command<
  UpgradeElasticsearchDomainCommandInput,
  UpgradeElasticsearchDomainCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpgradeElasticsearchDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpgradeElasticsearchDomainCommandInput, UpgradeElasticsearchDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpgradeElasticsearchDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpgradeElasticsearchDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpgradeElasticsearchDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpgradeElasticsearchDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpgradeElasticsearchDomainCommandOutput> {
    return deserializeAws_restJson1UpgradeElasticsearchDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
