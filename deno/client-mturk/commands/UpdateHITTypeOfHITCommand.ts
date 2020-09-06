
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { UpdateHITTypeOfHITRequest, UpdateHITTypeOfHITResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1UpdateHITTypeOfHITCommand,
  serializeAws_json1_1UpdateHITTypeOfHITCommand,
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

export type UpdateHITTypeOfHITCommandInput = UpdateHITTypeOfHITRequest;
export type UpdateHITTypeOfHITCommandOutput = UpdateHITTypeOfHITResponse & __MetadataBearer;

export class UpdateHITTypeOfHITCommand extends $Command<
  UpdateHITTypeOfHITCommandInput,
  UpdateHITTypeOfHITCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateHITTypeOfHITCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateHITTypeOfHITRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateHITTypeOfHITResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHITTypeOfHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateHITTypeOfHITCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHITTypeOfHITCommandOutput> {
    return deserializeAws_json1_1UpdateHITTypeOfHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
