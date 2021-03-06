
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "../../smithy-client/mod.ts";
import { MetadataBearer as $MetadataBearer } from "../../types/mod.ts";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum ConnectionType {
  CONNECTION_CREDENTIALS = "CONNECTION_CREDENTIALS",
  WEBSOCKET = "WEBSOCKET",
}

export interface CreateParticipantConnectionRequest {
  /**
   * <p>Participant Token as obtained from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContactResponse.html">StartChatContact</a> API response.</p>
   */
  ParticipantToken: string | undefined;

  /**
   * <p>Type of connection information required.</p>
   */
  Type: (ConnectionType | string)[] | undefined;
}

export namespace CreateParticipantConnectionRequest {
  export const filterSensitiveLog = (obj: CreateParticipantConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Connection credentials. </p>
 */
export interface ConnectionCredentials {
  /**
   * <p>The expiration of the token.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  Expiry?: string;

  /**
   * <p>The connection token.</p>
   */
  ConnectionToken?: string;
}

export namespace ConnectionCredentials {
  export const filterSensitiveLog = (obj: ConnectionCredentials): any => ({
    ...obj,
  });
}

/**
 * <p>The websocket for the participant's connection.</p>
 */
export interface Websocket {
  /**
   * <p>The URL of the websocket.</p>
   */
  Url?: string;

  /**
   * <p>The URL expiration timestamp in ISO date format.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  ConnectionExpiry?: string;
}

export namespace Websocket {
  export const filterSensitiveLog = (obj: Websocket): any => ({
    ...obj,
  });
}

export interface CreateParticipantConnectionResponse {
  /**
   * <p>Creates the participant's connection credentials. The authentication token associated
   *             with the participant's connection.</p>
   */
  ConnectionCredentials?: ConnectionCredentials;

  /**
   * <p>Creates the participant's websocket connection.</p>
   */
  Websocket?: Websocket;
}

export namespace CreateParticipantConnectionResponse {
  export const filterSensitiveLog = (obj: CreateParticipantConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DisconnectParticipantRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;
}

export namespace DisconnectParticipantRequest {
  export const filterSensitiveLog = (obj: DisconnectParticipantRequest): any => ({
    ...obj,
  });
}

export interface DisconnectParticipantResponse {}

export namespace DisconnectParticipantResponse {
  export const filterSensitiveLog = (obj: DisconnectParticipantResponse): any => ({
    ...obj,
  });
}

export enum ScanDirection {
  BACKWARD = "BACKWARD",
  FORWARD = "FORWARD",
}

export enum SortKey {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>A filtering option for where to start. For example, if you sent 100 messages, start
 *             with message 50. </p>
 */
export interface StartPosition {
  /**
   * <p>The time in ISO format where to start.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;

  /**
   * <p>The start position of the most recent message where you want to start. </p>
   */
  MostRecent?: number;

  /**
   * <p>The ID of the message or event where to start. </p>
   */
  Id?: string;
}

export namespace StartPosition {
  export const filterSensitiveLog = (obj: StartPosition): any => ({
    ...obj,
  });
}

export interface GetTranscriptRequest {
  /**
   * <p>The sort order for the records. Default: DESCENDING.</p>
   */
  SortOrder?: SortKey | string;

  /**
   * <p>The contactId from the current contact chain for which transcript is needed.</p>
   */
  ContactId?: string;

  /**
   * <p>A filtering option for where to start.</p>
   */
  StartPosition?: StartPosition;

  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the page. Default: 10.
   *            </p>
   */
  MaxResults?: number;

  /**
   * <p>The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. </p>
   */
  ScanDirection?: ScanDirection | string;
}

export namespace GetTranscriptRequest {
  export const filterSensitiveLog = (obj: GetTranscriptRequest): any => ({
    ...obj,
  });
}

export enum ParticipantRole {
  AGENT = "AGENT",
  CUSTOMER = "CUSTOMER",
  SYSTEM = "SYSTEM",
}

export enum ChatItemType {
  CONNECTION_ACK = "CONNECTION_ACK",
  EVENT = "EVENT",
  MESSAGE = "MESSAGE",
}

/**
 * <p>An item - message or event - that has been sent. </p>
 */
export interface Item {
  /**
   * <p>The ID of the sender in the session.</p>
   */
  ParticipantId?: string;

  /**
   * <p>The type of content of the item.</p>
   */
  ContentType?: string;

  /**
   * <p>Type of the item: message or event. </p>
   */
  Type?: ChatItemType | string;

  /**
   * <p>The content of the message or event.</p>
   */
  Content?: string;

  /**
   * <p>The time when the message or event was sent.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;

  /**
   * <p>The chat display name of the sender.</p>
   */
  DisplayName?: string;

  /**
   * <p>The ID of the item.</p>
   */
  Id?: string;

  /**
   * <p>The role of the sender. For example, is it a customer, agent, or system.</p>
   */
  ParticipantRole?: ParticipantRole | string;
}

export namespace Item {
  export const filterSensitiveLog = (obj: Item): any => ({
    ...obj,
  });
}

export interface GetTranscriptResponse {
  /**
   * <p>The initial contact ID for the contact. </p>
   */
  InitialContactId?: string;

  /**
   * <p>The list of messages in the session.</p>
   */
  Transcript?: Item[];

  /**
   * <p>The pagination token. Use the value returned previously in the next subsequent request
   *             to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace GetTranscriptResponse {
  export const filterSensitiveLog = (obj: GetTranscriptResponse): any => ({
    ...obj,
  });
}

export interface SendEventRequest {
  /**
   * <p>The authentication token associated with the participant's connection.</p>
   */
  ConnectionToken: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The content type of the request. Supported types are:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>application/vnd.amazonaws.connect.event.typing</p>
   *             </li>
   *             <li>
   *                 <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p>
   *             </li>
   *          </ul>
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the event to be sent (for example, message text). This is not yet
   *             supported.</p>
   */
  Content?: string;
}

export namespace SendEventRequest {
  export const filterSensitiveLog = (obj: SendEventRequest): any => ({
    ...obj,
  });
}

export interface SendEventResponse {
  /**
   * <p>The ID of the response.</p>
   */
  Id?: string;

  /**
   * <p>The time when the event was sent.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;
}

export namespace SendEventResponse {
  export const filterSensitiveLog = (obj: SendEventResponse): any => ({
    ...obj,
  });
}

export interface SendMessageRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The type of the content. Supported types are text/plain.</p>
   */
  ContentType: string | undefined;

  /**
   * <p>The authentication token associated with the connection.</p>
   */
  ConnectionToken: string | undefined;

  /**
   * <p>The content of the message.</p>
   */
  Content: string | undefined;
}

export namespace SendMessageRequest {
  export const filterSensitiveLog = (obj: SendMessageRequest): any => ({
    ...obj,
  });
}

export interface SendMessageResponse {
  /**
   * <p>The ID of the message.</p>
   */
  Id?: string;

  /**
   * <p>The time when the message was sent.</p>
   *         <p>It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ. For example,
   *             2019-11-08T02:41:28.172Z.</p>
   */
  AbsoluteTime?: string;
}

export namespace SendMessageResponse {
  export const filterSensitiveLog = (obj: SendMessageResponse): any => ({
    ...obj,
  });
}
