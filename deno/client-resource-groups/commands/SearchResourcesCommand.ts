
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient.ts";
import { SearchResourcesInput, SearchResourcesOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SearchResourcesCommand,
  serializeAws_restJson1SearchResourcesCommand,
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

export type SearchResourcesCommandInput = SearchResourcesInput;
export type SearchResourcesCommandOutput = SearchResourcesOutput & __MetadataBearer;

export class SearchResourcesCommand extends $Command<
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
  ResourceGroupsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchResourcesCommandInput, SearchResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: SearchResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: SearchResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchResourcesCommandOutput> {
    return deserializeAws_restJson1SearchResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
