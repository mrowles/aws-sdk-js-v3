import { Buffer } from "../../buffer/mod.ts";
import {
  LexRuntimeServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexRuntimeServiceClient.ts";
import { PostContentRequest, PostContentResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PostContentCommand,
  serializeAws_restJson1PostContentCommand,
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

export type PostContentCommandInput = Omit<PostContentRequest, "inputStream"> & {
  inputStream: PostContentRequest["inputStream"] | string | Uint8Array | Buffer;
};
export type PostContentCommandOutput = PostContentResponse & __MetadataBearer;

export class PostContentCommand extends $Command<
  PostContentCommandInput,
  PostContentCommandOutput,
  LexRuntimeServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PostContentCommandInput, PostContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PostContentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PostContentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PostContentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostContentCommandOutput> {
    return deserializeAws_restJson1PostContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
