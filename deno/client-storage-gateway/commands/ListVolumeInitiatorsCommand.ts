
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { ListVolumeInitiatorsInput, ListVolumeInitiatorsOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListVolumeInitiatorsCommand,
  serializeAws_json1_1ListVolumeInitiatorsCommand,
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

export type ListVolumeInitiatorsCommandInput = ListVolumeInitiatorsInput;
export type ListVolumeInitiatorsCommandOutput = ListVolumeInitiatorsOutput & __MetadataBearer;

export class ListVolumeInitiatorsCommand extends $Command<
  ListVolumeInitiatorsCommandInput,
  ListVolumeInitiatorsCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVolumeInitiatorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVolumeInitiatorsCommandInput, ListVolumeInitiatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListVolumeInitiatorsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListVolumeInitiatorsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListVolumeInitiatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVolumeInitiatorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVolumeInitiatorsCommandOutput> {
    return deserializeAws_json1_1ListVolumeInitiatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
