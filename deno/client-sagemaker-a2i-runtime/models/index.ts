
import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "../../smithy-client/mod.ts";
import { MetadataBearer as $MetadataBearer } from "../../types/mod.ts";

/**
 * <p>Your request has the same name as another active human loop but has different input data. You cannot start two
 *     human loops with the same name and different input data.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export enum ContentClassifier {
  FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation",
}

export interface DeleteHumanLoopRequest {
  __type?: "DeleteHumanLoopRequest";
  /**
   * <p>The name of the human loop that you want to delete.</p>
   */
  HumanLoopName: string | undefined;
}

export namespace DeleteHumanLoopRequest {
  export const filterSensitiveLog = (obj: DeleteHumanLoopRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteHumanLoopRequest => __isa(o, "DeleteHumanLoopRequest");
}

export interface DeleteHumanLoopResponse {
  __type?: "DeleteHumanLoopResponse";
}

export namespace DeleteHumanLoopResponse {
  export const filterSensitiveLog = (obj: DeleteHumanLoopResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteHumanLoopResponse => __isa(o, "DeleteHumanLoopResponse");
}

export interface DescribeHumanLoopRequest {
  __type?: "DescribeHumanLoopRequest";
  /**
   * <p>The name of the human loop that you want information about.</p>
   */
  HumanLoopName: string | undefined;
}

export namespace DescribeHumanLoopRequest {
  export const filterSensitiveLog = (obj: DescribeHumanLoopRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeHumanLoopRequest => __isa(o, "DescribeHumanLoopRequest");
}

export interface DescribeHumanLoopResponse {
  __type?: "DescribeHumanLoopResponse";
  /**
   * <p>The status of the human loop. </p>
   */
  HumanLoopStatus: HumanLoopStatus | string | undefined;

  /**
   * <p>A failure code that identifies
   *       the
   *       type of failure.</p>
   */
  FailureCode?: string;

  /**
   * <p>An object that contains information about the output of the human loop.</p>
   */
  HumanLoopOutput?: HumanLoopOutput;

  /**
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   */
  HumanLoopArn: string | undefined;

  /**
   * <p>The creation time when Amazon Augmented AI created the human loop.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why a human loop failed. The failure reason is returned when the status of the
   *       human loop is <code>Failed</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the human loop. The name must be lowercase, unique within the Region in your
   *       account, and can have up to 63 characters. Valid characters: a-z, 0-9, and - (hyphen).</p>
   */
  HumanLoopName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;
}

export namespace DescribeHumanLoopResponse {
  export const filterSensitiveLog = (obj: DescribeHumanLoopResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeHumanLoopResponse => __isa(o, "DescribeHumanLoopResponse");
}

/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be labeled.</p>
 */
export interface HumanLoopDataAttributes {
  __type?: "HumanLoopDataAttributes";
  /**
   * <p>Declares that your content is free of personally identifiable information or adult content.</p>
   *          <p>Amazon SageMaker can restrict the Amazon Mechanical Turk workers who can view your task based on this information.</p>
   */
  ContentClassifiers: (ContentClassifier | string)[] | undefined;
}

export namespace HumanLoopDataAttributes {
  export const filterSensitiveLog = (obj: HumanLoopDataAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HumanLoopDataAttributes => __isa(o, "HumanLoopDataAttributes");
}

/**
 * <p>An object containing the human loop input in JSON format.</p>
 */
export interface HumanLoopInput {
  __type?: "HumanLoopInput";
  /**
   * <p>Serialized input from the human loop. The input must be a string representation of a file in JSON format.</p>
   */
  InputContent: string | undefined;
}

export namespace HumanLoopInput {
  export const filterSensitiveLog = (obj: HumanLoopInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HumanLoopInput => __isa(o, "HumanLoopInput");
}

/**
 * <p>Information about where the human output will be stored.</p>
 */
export interface HumanLoopOutput {
  __type?: "HumanLoopOutput";
  /**
   * <p>The location of the Amazon S3 object where Amazon Augmented AI stores your human loop output.</p>
   */
  OutputS3Uri: string | undefined;
}

export namespace HumanLoopOutput {
  export const filterSensitiveLog = (obj: HumanLoopOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HumanLoopOutput => __isa(o, "HumanLoopOutput");
}

export enum HumanLoopStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Summary information about the human loop.</p>
 */
export interface HumanLoopSummary {
  __type?: "HumanLoopSummary";
  /**
   * <p>The name of the human loop.</p>
   */
  HumanLoopName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition used to configure the human
   *       loop.</p>
   */
  FlowDefinitionArn?: string;

  /**
   * <p>The status of the human loop. </p>
   */
  HumanLoopStatus?: HumanLoopStatus | string;

  /**
   * <p>When Amazon Augmented AI created the human loop.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The reason why the human loop failed. A failure reason is returned when the status of the
   *       human loop is <code>Failed</code>.</p>
   */
  FailureReason?: string;
}

export namespace HumanLoopSummary {
  export const filterSensitiveLog = (obj: HumanLoopSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is HumanLoopSummary => __isa(o, "HumanLoopSummary");
}

/**
 * <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

export interface ListHumanLoopsRequest {
  __type?: "ListHumanLoopsRequest";
  /**
   * <p>(Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>(Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The total number of items to return. If the total number of available items is more than
   *       the value specified in <code>MaxResults</code>, then a <code>NextToken</code> is returned in
   *       the output. You can use this token to display the next page of results. </p>
   */
  MaxResults?: number;

  /**
   * <p>A token to display the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>Optional. The order for displaying results. Valid values: <code>Ascending</code> and
   *         <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListHumanLoopsRequest {
  export const filterSensitiveLog = (obj: ListHumanLoopsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListHumanLoopsRequest => __isa(o, "ListHumanLoopsRequest");
}

export interface ListHumanLoopsResponse {
  __type?: "ListHumanLoopsResponse";
  /**
   * <p>A token to display the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of objects that contain information about the human loops.</p>
   */
  HumanLoopSummaries: HumanLoopSummary[] | undefined;
}

export namespace ListHumanLoopsResponse {
  export const filterSensitiveLog = (obj: ListHumanLoopsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListHumanLoopsResponse => __isa(o, "ListHumanLoopsResponse");
}

/**
 * <p>We couldn't find
 *       the
 *       requested resource.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>You exceeded your
 *       service
 *       quota. Delete some resources or request an increase in your
 *       service
 *       quota.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceQuotaExceededException => __isa(o, "ServiceQuotaExceededException");
}

export enum SortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface StartHumanLoopRequest {
  __type?: "StartHumanLoopRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition associated with this human
   *       loop.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>An object that contains information about the human loop.</p>
   */
  HumanLoopInput: HumanLoopInput | undefined;

  /**
   * <p>The name of the human loop.</p>
   */
  HumanLoopName: string | undefined;

  /**
   * <p>Attributes of the specified data. Use <code>DataAttributes</code> to specify if your data
   *       is free of personally identifiable information and/or free of adult content.</p>
   */
  DataAttributes?: HumanLoopDataAttributes;
}

export namespace StartHumanLoopRequest {
  export const filterSensitiveLog = (obj: StartHumanLoopRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartHumanLoopRequest => __isa(o, "StartHumanLoopRequest");
}

export interface StartHumanLoopResponse {
  __type?: "StartHumanLoopResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   */
  HumanLoopArn?: string;
}

export namespace StartHumanLoopResponse {
  export const filterSensitiveLog = (obj: StartHumanLoopResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartHumanLoopResponse => __isa(o, "StartHumanLoopResponse");
}

export interface StopHumanLoopRequest {
  __type?: "StopHumanLoopRequest";
  /**
   * <p>The name of the human loop that you want to stop.</p>
   */
  HumanLoopName: string | undefined;
}

export namespace StopHumanLoopRequest {
  export const filterSensitiveLog = (obj: StopHumanLoopRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopHumanLoopRequest => __isa(o, "StopHumanLoopRequest");
}

export interface StopHumanLoopResponse {
  __type?: "StopHumanLoopResponse";
}

export namespace StopHumanLoopResponse {
  export const filterSensitiveLog = (obj: StopHumanLoopResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopHumanLoopResponse => __isa(o, "StopHumanLoopResponse");
}

/**
 * <p>You exceeded
 *       the
 *       maximum number of requests.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

/**
 * <p>The
 *       request isn't valid. Check the syntax and try again.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}
