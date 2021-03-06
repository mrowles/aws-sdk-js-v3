
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { CreateInstanceExportTaskRequest, CreateInstanceExportTaskResult } from "../models/models_0.ts";
import {
  deserializeAws_ec2CreateInstanceExportTaskCommand,
  serializeAws_ec2CreateInstanceExportTaskCommand,
} from "../protocols/Aws_ec2.ts";
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

export type CreateInstanceExportTaskCommandInput = CreateInstanceExportTaskRequest;
export type CreateInstanceExportTaskCommandOutput = CreateInstanceExportTaskResult & __MetadataBearer;

export class CreateInstanceExportTaskCommand extends $Command<
  CreateInstanceExportTaskCommandInput,
  CreateInstanceExportTaskCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateInstanceExportTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInstanceExportTaskCommandInput, CreateInstanceExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateInstanceExportTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateInstanceExportTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateInstanceExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateInstanceExportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInstanceExportTaskCommandOutput> {
    return deserializeAws_ec2CreateInstanceExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
