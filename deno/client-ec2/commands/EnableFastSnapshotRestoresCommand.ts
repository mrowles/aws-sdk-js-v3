
import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { EnableFastSnapshotRestoresRequest, EnableFastSnapshotRestoresResult } from "../models/index.ts";
import {
  deserializeAws_ec2EnableFastSnapshotRestoresCommand,
  serializeAws_ec2EnableFastSnapshotRestoresCommand,
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

export type EnableFastSnapshotRestoresCommandInput = EnableFastSnapshotRestoresRequest;
export type EnableFastSnapshotRestoresCommandOutput = EnableFastSnapshotRestoresResult & __MetadataBearer;

export class EnableFastSnapshotRestoresCommand extends $Command<
  EnableFastSnapshotRestoresCommandInput,
  EnableFastSnapshotRestoresCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableFastSnapshotRestoresCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableFastSnapshotRestoresCommandInput, EnableFastSnapshotRestoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: EnableFastSnapshotRestoresRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableFastSnapshotRestoresResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableFastSnapshotRestoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableFastSnapshotRestoresCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableFastSnapshotRestoresCommandOutput> {
    return deserializeAws_ec2EnableFastSnapshotRestoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
