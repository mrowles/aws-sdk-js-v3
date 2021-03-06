
import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { ListObjectParentPathsRequest, ListObjectParentPathsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListObjectParentPathsCommand,
  serializeAws_restJson1ListObjectParentPathsCommand,
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

export type ListObjectParentPathsCommandInput = ListObjectParentPathsRequest;
export type ListObjectParentPathsCommandOutput = ListObjectParentPathsResponse & __MetadataBearer;

export class ListObjectParentPathsCommand extends $Command<
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListObjectParentPathsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListObjectParentPathsCommandInput, ListObjectParentPathsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListObjectParentPathsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListObjectParentPathsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListObjectParentPathsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListObjectParentPathsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListObjectParentPathsCommandOutput> {
    return deserializeAws_restJson1ListObjectParentPathsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
