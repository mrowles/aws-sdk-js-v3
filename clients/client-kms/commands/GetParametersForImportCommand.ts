import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetParametersForImportRequest, GetParametersForImportResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetParametersForImportCommand,
  serializeAws_json1_1GetParametersForImportCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetParametersForImportCommandInput = GetParametersForImportRequest;
export type GetParametersForImportCommandOutput = GetParametersForImportResponse & __MetadataBearer;

export class GetParametersForImportCommand extends $Command<
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetParametersForImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParametersForImportCommandInput, GetParametersForImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetParametersForImportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetParametersForImportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetParametersForImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetParametersForImportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParametersForImportCommandOutput> {
    return deserializeAws_json1_1GetParametersForImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
