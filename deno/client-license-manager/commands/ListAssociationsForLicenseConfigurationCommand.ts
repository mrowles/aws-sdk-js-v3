
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient.ts";
import {
  ListAssociationsForLicenseConfigurationRequest,
  ListAssociationsForLicenseConfigurationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand,
  serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand,
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

export type ListAssociationsForLicenseConfigurationCommandInput = ListAssociationsForLicenseConfigurationRequest;
export type ListAssociationsForLicenseConfigurationCommandOutput = ListAssociationsForLicenseConfigurationResponse &
  __MetadataBearer;

export class ListAssociationsForLicenseConfigurationCommand extends $Command<
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssociationsForLicenseConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListAssociationsForLicenseConfigurationCommandInput,
    ListAssociationsForLicenseConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListAssociationsForLicenseConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociationsForLicenseConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAssociationsForLicenseConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssociationsForLicenseConfigurationCommandOutput> {
    return deserializeAws_json1_1ListAssociationsForLicenseConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
