
import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient.ts";
import { ForgetDeviceRequest } from "../models/index.ts";
import {
  deserializeAws_json1_1ForgetDeviceCommand,
  serializeAws_json1_1ForgetDeviceCommand,
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

export type ForgetDeviceCommandInput = ForgetDeviceRequest;
export type ForgetDeviceCommandOutput = __MetadataBearer;

export class ForgetDeviceCommand extends $Command<
  ForgetDeviceCommandInput,
  ForgetDeviceCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ForgetDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ForgetDeviceCommandInput, ForgetDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ForgetDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ForgetDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ForgetDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ForgetDeviceCommandOutput> {
    return deserializeAws_json1_1ForgetDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
