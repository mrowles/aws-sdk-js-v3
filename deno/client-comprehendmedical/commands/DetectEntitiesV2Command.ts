
import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient.ts";
import { DetectEntitiesV2Request, DetectEntitiesV2Response } from "../models/index.ts";
import {
  deserializeAws_json1_1DetectEntitiesV2Command,
  serializeAws_json1_1DetectEntitiesV2Command,
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

export type DetectEntitiesV2CommandInput = DetectEntitiesV2Request;
export type DetectEntitiesV2CommandOutput = DetectEntitiesV2Response & __MetadataBearer;

export class DetectEntitiesV2Command extends $Command<
  DetectEntitiesV2CommandInput,
  DetectEntitiesV2CommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectEntitiesV2CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DetectEntitiesV2Request.filterSensitiveLog,
      outputFilterSensitiveLog: DetectEntitiesV2Response.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectEntitiesV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectEntitiesV2Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectEntitiesV2CommandOutput> {
    return deserializeAws_json1_1DetectEntitiesV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
