import {
  AlexaForBusinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AlexaForBusinessClient";
import {
  DisassociateSkillGroupFromRoomRequest,
  DisassociateSkillGroupFromRoomResponse
} from "../models/index";
import {
  deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand,
  serializeAws_json1_1DisassociateSkillGroupFromRoomCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DisassociateSkillGroupFromRoomCommandInput = DisassociateSkillGroupFromRoomRequest;
export type DisassociateSkillGroupFromRoomCommandOutput = DisassociateSkillGroupFromRoomResponse;

export class DisassociateSkillGroupFromRoomCommand extends $Command<
  DisassociateSkillGroupFromRoomCommandInput,
  DisassociateSkillGroupFromRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateSkillGroupFromRoomCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateSkillGroupFromRoomCommandInput,
    DisassociateSkillGroupFromRoomCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateSkillGroupFromRoomCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateSkillGroupFromRoomCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DisassociateSkillGroupFromRoomCommandOutput> {
    return deserializeAws_json1_1DisassociateSkillGroupFromRoomCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
