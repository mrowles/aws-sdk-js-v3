
import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient.ts";
import { DeleteFileSystemPolicyRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteFileSystemPolicyCommand,
  serializeAws_restJson1DeleteFileSystemPolicyCommand,
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

export type DeleteFileSystemPolicyCommandInput = DeleteFileSystemPolicyRequest;
export type DeleteFileSystemPolicyCommandOutput = __MetadataBearer;

export class DeleteFileSystemPolicyCommand extends $Command<
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFileSystemPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFileSystemPolicyCommandInput, DeleteFileSystemPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteFileSystemPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFileSystemPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFileSystemPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFileSystemPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteFileSystemPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
