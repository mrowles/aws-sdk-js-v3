import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_browser from '@aws/util-body-length-browser';
import {GetDifferences} from '../model/GetDifferences';
import {GetDifferencesInput} from '../types/GetDifferencesInput';
import {GetDifferencesOutput} from '../types/GetDifferencesOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetDifferencesCommand implements __aws_types.Command<
    GetDifferencesInput,
    GetDifferencesOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {

    constructor(readonly input: GetDifferencesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<GetDifferencesInput, GetDifferencesOutput, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetDifferencesInput, GetDifferencesOutput, ReadableStream> {
        const {
            handler: Handler,
            httpHandler
        } = configuration;
        const stack = clientStack.clone();

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetDifferences
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            class extends __aws_middleware_content_length.ContentLengthMiddleware {
                constructor(
                    next: __aws_types.Handler<any, any, any>
                ) {
                    super(
                        __aws_util_body_length_browser.calculateBodyLength,
                        next
                    );
                }
            },
            {
                step: 'build',
                tags: contentLengthTag,
                priority: 80
            }
        );

        const coreHandler = new Handler(handlerExecutionContext);
        return stack.resolve(coreHandler, handlerExecutionContext);
    }
}