
import { constructStack } from "../middleware-stack/mod.ts";
import { HttpRequest } from "../protocol-http/mod.ts";
import { Client, Command } from "../smithy-client/mod.ts";
import { MetadataBearer, MiddlewareStack } from "../types/mod.ts";

export interface OperationInput {
  String: string;
}

export type InputTypesUnion = OperationInput;

export interface OperationOutput extends MetadataBearer {
  Data: string;
  $metadata: {};
}

export type OutputTypesUnion = OperationOutput;

const output: OperationOutput = { Data: "data", $metadata: {} };

const input: OperationInput = { String: "input" };

export const fooClient: Client<any, InputTypesUnion, OutputTypesUnion, any> = {
  config: {},
  middlewareStack: constructStack<InputTypesUnion, OutputTypesUnion>(),
  send: (command: Command<InputTypesUnion, OutputTypesUnion, any, OperationInput, OperationOutput>) =>
    command.resolveMiddleware(fooClient.middlewareStack, fooClient.config, undefined)({ input }),
  destroy: () => {},
};

export const operationCommand: Command<InputTypesUnion, OutputTypesUnion, any, OperationInput, OperationOutput> = {
  middlewareStack: constructStack<object, OutputTypesUnion>(),
  input: {} as any,
  resolveMiddleware: (stack: MiddlewareStack<InputTypesUnion, OutputTypesUnion>) => {
    const concatStack = stack.concat(operationCommand.middlewareStack);
    return concatStack.resolve(() => Promise.resolve({ output, response: {} }), {} as any);
  },
};

export const httpRequest = new HttpRequest({
  protocol: "https:",
  path: "/foo",
  hostname: "foo-service.us-east-1.amazonaws.com",
  headers: {},
  method: "GET",
  body: "",
});
