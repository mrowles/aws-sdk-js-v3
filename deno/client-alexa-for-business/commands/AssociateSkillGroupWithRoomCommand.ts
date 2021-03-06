
import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient.ts";
import { AssociateSkillGroupWithRoomRequest, AssociateSkillGroupWithRoomResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociateSkillGroupWithRoomCommand,
  serializeAws_json1_1AssociateSkillGroupWithRoomCommand,
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

export type AssociateSkillGroupWithRoomCommandInput = AssociateSkillGroupWithRoomRequest;
export type AssociateSkillGroupWithRoomCommandOutput = AssociateSkillGroupWithRoomResponse & __MetadataBearer;

export class AssociateSkillGroupWithRoomCommand extends $Command<
  AssociateSkillGroupWithRoomCommandInput,
  AssociateSkillGroupWithRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateSkillGroupWithRoomCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateSkillGroupWithRoomCommandInput, AssociateSkillGroupWithRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AssociateSkillGroupWithRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSkillGroupWithRoomResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateSkillGroupWithRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateSkillGroupWithRoomCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateSkillGroupWithRoomCommandOutput> {
    return deserializeAws_json1_1AssociateSkillGroupWithRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
