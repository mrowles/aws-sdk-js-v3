
import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient.ts";
import { GetPackageVersionAssetRequest, GetPackageVersionAssetResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetPackageVersionAssetCommand,
  serializeAws_restJson1GetPackageVersionAssetCommand,
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

export type GetPackageVersionAssetCommandInput = GetPackageVersionAssetRequest;
export type GetPackageVersionAssetCommandOutput = GetPackageVersionAssetResult & __MetadataBearer;

export class GetPackageVersionAssetCommand extends $Command<
  GetPackageVersionAssetCommandInput,
  GetPackageVersionAssetCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPackageVersionAssetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPackageVersionAssetCommandInput, GetPackageVersionAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetPackageVersionAssetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPackageVersionAssetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPackageVersionAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPackageVersionAssetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPackageVersionAssetCommandOutput> {
    return deserializeAws_restJson1GetPackageVersionAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
