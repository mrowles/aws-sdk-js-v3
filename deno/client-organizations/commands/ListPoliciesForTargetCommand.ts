
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient.ts";
import { ListPoliciesForTargetRequest, ListPoliciesForTargetResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListPoliciesForTargetCommand,
  serializeAws_json1_1ListPoliciesForTargetCommand,
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

export type ListPoliciesForTargetCommandInput = ListPoliciesForTargetRequest;
export type ListPoliciesForTargetCommandOutput = ListPoliciesForTargetResponse & __MetadataBearer;

export class ListPoliciesForTargetCommand extends $Command<
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPoliciesForTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPoliciesForTargetCommandInput, ListPoliciesForTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListPoliciesForTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPoliciesForTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPoliciesForTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPoliciesForTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPoliciesForTargetCommandOutput> {
    return deserializeAws_json1_1ListPoliciesForTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
