
import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient.ts";
import { CreateDirectoryConfigRequest, CreateDirectoryConfigResult } from "../models/index.ts";
import {
  deserializeAws_json1_1CreateDirectoryConfigCommand,
  serializeAws_json1_1CreateDirectoryConfigCommand,
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

export type CreateDirectoryConfigCommandInput = CreateDirectoryConfigRequest;
export type CreateDirectoryConfigCommandOutput = CreateDirectoryConfigResult & __MetadataBearer;

export class CreateDirectoryConfigCommand extends $Command<
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDirectoryConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDirectoryConfigCommandInput, CreateDirectoryConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateDirectoryConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDirectoryConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDirectoryConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDirectoryConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDirectoryConfigCommandOutput> {
    return deserializeAws_json1_1CreateDirectoryConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
