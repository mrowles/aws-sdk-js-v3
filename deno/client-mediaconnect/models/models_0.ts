
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "../../smithy-client/mod.ts";
import { MetadataBearer as $MetadataBearer } from "../../types/mod.ts";

export enum Algorithm {
  aes128 = "aes128",
  aes192 = "aes192",
  aes256 = "aes256",
}

export enum KeyType {
  speke = "speke",
  static_key = "static-key",
}

/**
 * Information about the encryption of the flow.
 */
export interface Encryption {
  /**
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   */
  SecretArn?: string;

  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  KeyType?: KeyType | string;

  /**
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  ResourceId?: string;

  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  DeviceId?: string;

  /**
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Region?: string;

  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   */
  ConstantInitializationVector?: string;

  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   */
  Algorithm: Algorithm | string | undefined;

  /**
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   */
  RoleArn: string | undefined;

  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Url?: string;
}

export namespace Encryption {
  export const filterSensitiveLog = (obj: Encryption): any => ({
    ...obj,
  });
}

export enum Protocol {
  rist = "rist",
  rtp = "rtp",
  rtp_fec = "rtp-fec",
  zixi_pull = "zixi-pull",
  zixi_push = "zixi-push",
}

/**
 * The settings for attaching a VPC interface to an output.
 */
export interface VpcInterfaceAttachment {
  /**
   * The name of the VPC interface to use for this output.
   */
  VpcInterfaceName?: string;
}

export namespace VpcInterfaceAttachment {
  export const filterSensitiveLog = (obj: VpcInterfaceAttachment): any => ({
    ...obj,
  });
}

/**
 * The output that you want to add to this flow.
 */
export interface AddOutputRequest {
  /**
   * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
   */
  Description?: string;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: Encryption;

  /**
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;

  /**
   * The remote ID for the Zixi-pull output stream.
   */
  RemoteId?: string;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * The protocol to use for the output.
   */
  Protocol: Protocol | string | undefined;

  /**
   * The IP address from which video will be sent to output destinations.
   */
  Destination?: string;

  /**
   * The name of the output. This value must be unique within the current flow.
   */
  Name?: string;

  /**
   * The maximum latency in milliseconds for Zixi-based streams.
   */
  MaxLatency?: number;

  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];
}

export namespace AddOutputRequest {
  export const filterSensitiveLog = (obj: AddOutputRequest): any => ({
    ...obj,
  });
}

export enum EntitlementStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * The settings for a flow entitlement.
 */
export interface Entitlement {
  /**
   * An indication of whether the entitlement is enabled.
   */
  EntitlementStatus?: EntitlementStatus | string;

  /**
   * The ARN of the entitlement.
   */
  EntitlementArn: string | undefined;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   */
  Subscribers: string[] | undefined;

  /**
   * The name of the entitlement.
   */
  Name: string | undefined;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   */
  Encryption?: Encryption;

  /**
   * A description of the entitlement.
   */
  Description?: string;

  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;
}

export namespace Entitlement {
  export const filterSensitiveLog = (obj: Entitlement): any => ({
    ...obj,
  });
}

/**
 * The entitlements that you want to grant on a flow.
 */
export interface GrantEntitlementRequest {
  /**
   * The name of the entitlement. This value must be unique within the current flow.
   */
  Name?: string;

  /**
   * The type of encryption that will be used on the output that is associated with this entitlement.
   */
  Encryption?: Encryption;

  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   */
  Description?: string;

  /**
   * An indication of whether the new entitlement should be enabled or disabled as soon as it is created. If you don’t specify the entitlementStatus field in your request, MediaConnect sets it to ENABLED.
   */
  EntitlementStatus?: EntitlementStatus | string;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flows using your content as the source.
   */
  Subscribers: string[] | undefined;
}

export namespace GrantEntitlementRequest {
  export const filterSensitiveLog = (obj: GrantEntitlementRequest): any => ({
    ...obj,
  });
}

/**
 * An entitlement that has been granted to you from other AWS accounts.
 */
export interface ListedEntitlement {
  /**
   * The name of the entitlement.
   */
  EntitlementName: string | undefined;

  /**
   * The ARN of the entitlement.
   */
  EntitlementArn: string | undefined;

  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;
}

export namespace ListedEntitlement {
  export const filterSensitiveLog = (obj: ListedEntitlement): any => ({
    ...obj,
  });
}

export enum SourceType {
  ENTITLED = "ENTITLED",
  OWNED = "OWNED",
}

export enum Status {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
  ERROR = "ERROR",
  STANDBY = "STANDBY",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UPDATING = "UPDATING",
}

/**
 * Provides a summary of a flow, including its ARN, Availability Zone, and source type.
 */
export interface ListedFlow {
  /**
   * The Availability Zone that the flow was created in.
   */
  AvailabilityZone: string | undefined;

  /**
   * A description of the flow.
   */
  Description: string | undefined;

  /**
   * The ARN of the flow.
   */
  FlowArn: string | undefined;

  /**
   * The name of the flow.
   */
  Name: string | undefined;

  /**
   * The current status of the flow.
   */
  Status: Status | string | undefined;

  /**
   * The type of source. This value is either owned (originated somewhere other than an AWS Elemental MediaConnect flow owned by another AWS account) or entitled (originated at an AWS Elemental MediaConnect flow owned by another AWS account).
   */
  SourceType: SourceType | string | undefined;
}

export namespace ListedFlow {
  export const filterSensitiveLog = (obj: ListedFlow): any => ({
    ...obj,
  });
}

/**
 * Attributes related to the transport stream that are used in a source or output.
 */
export interface Transport {
  /**
   * The remote ID for the Zixi-pull stream.
   */
  RemoteId?: string;

  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   */
  MaxLatency?: number;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The protocol that is used by the source or output.
   */
  Protocol: Protocol | string | undefined;

  /**
   * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;
}

export namespace Transport {
  export const filterSensitiveLog = (obj: Transport): any => ({
    ...obj,
  });
}

/**
 * The settings for an output.
 */
export interface Output {
  /**
   * The address where you want to send the output.
   */
  Destination?: string;

  /**
   * The input ARN of the AWS Elemental MediaLive channel. This parameter is relevant only for outputs that were added by creating a MediaLive input.
   */
  MediaLiveInputArn?: string;

  /**
   * Attributes related to the transport stream that are used in the output.
   */
  Transport?: Transport;

  /**
   * The ARN of the output.
   */
  OutputArn: string | undefined;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: Encryption;

  /**
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;

  /**
   * A description of the output.
   */
  Description?: string;

  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * The name of the output. This value must be unique within the current flow.
   */
  Name: string | undefined;

  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * The ARN of the entitlement on the originator''s flow. This value is relevant only on entitled flows.
   */
  EntitlementArn?: string;
}

export namespace Output {
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
}

/**
 * The settings for the source of the flow.
 */
export interface SetSourceRequest {
  /**
   * The name of the VPC interface to use for this source.
   */
  VpcInterfaceName?: string;

  /**
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   */
  MaxLatency?: number;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;

  /**
   * The name of the source.
   */
  Name?: string;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: Encryption;

  /**
   * The protocol that is used by the source.
   */
  Protocol?: Protocol | string;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;
}

export namespace SetSourceRequest {
  export const filterSensitiveLog = (obj: SetSourceRequest): any => ({
    ...obj,
  });
}

/**
 * The settings for the source of the flow.
 */
export interface Source {
  /**
   * The ARN of the source.
   */
  SourceArn: string | undefined;

  /**
   * The name of the source.
   */
  Name: string | undefined;

  /**
   * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
   */
  DataTransferSubscriberFeePercent?: number;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The name of the VPC Interface this Source is configured with.
   */
  VpcInterfaceName?: string;

  /**
   * Attributes related to the transport stream that are used in the source.
   */
  Transport?: Transport;

  /**
   * The type of encryption that is used on the content ingested from this source.
   */
  Decryption?: Encryption;

  /**
   * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * The IP address that the flow will be listening on for incoming content.
   */
  IngestIp?: string;
}

export namespace Source {
  export const filterSensitiveLog = (obj: Source): any => ({
    ...obj,
  });
}

/**
 * The settings for a VPC Source.
 */
export interface VpcInterface {
  /**
   * Immutable and has to be a unique against other VpcInterfaces in this Flow
   */
  Name: string | undefined;

  /**
   * IDs of the network interfaces created in customer's account by MediaConnect.
   */
  NetworkInterfaceIds: string[] | undefined;

  /**
   * Security Group IDs to be used on ENI.
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Subnet must be in the AZ of the Flow
   */
  SubnetId: string | undefined;

  /**
   * Role Arn MediaConnect can assumes to create ENIs in customer's account
   */
  RoleArn: string | undefined;
}

export namespace VpcInterface {
  export const filterSensitiveLog = (obj: VpcInterface): any => ({
    ...obj,
  });
}

/**
 * Desired VPC Interface for a Flow
 */
export interface VpcInterfaceRequest {
  /**
   * Subnet must be in the AZ of the Flow
   */
  SubnetId: string | undefined;

  /**
   * Security Group IDs to be used on ENI.
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * Role Arn MediaConnect can assumes to create ENIs in customer's account
   */
  RoleArn: string | undefined;

  /**
   * The name of the VPC Interface. This value must be unique within the current flow.
   */
  Name: string | undefined;
}

export namespace VpcInterfaceRequest {
  export const filterSensitiveLog = (obj: VpcInterfaceRequest): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface AddFlowOutputs420Exception extends __SmithyException, $MetadataBearer {
  name: "AddFlowOutputs420Exception";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace AddFlowOutputs420Exception {
  export const filterSensitiveLog = (obj: AddFlowOutputs420Exception): any => ({
    ...obj,
  });
}

/**
 * A request to add outputs to the specified flow.
 */
export interface AddFlowOutputsRequest {
  /**
   * The flow that you want to add outputs to.
   */
  FlowArn: string | undefined;

  /**
   * A list of outputs that you want to add.
   */
  Outputs: AddOutputRequest[] | undefined;
}

export namespace AddFlowOutputsRequest {
  export const filterSensitiveLog = (obj: AddFlowOutputsRequest): any => ({
    ...obj,
  });
}

export interface AddFlowOutputsResponse {
  /**
   * The ARN of the flow that these outputs were added to.
   */
  FlowArn?: string;

  /**
   * The details of the newly added outputs.
   */
  Outputs?: Output[];
}

export namespace AddFlowOutputsResponse {
  export const filterSensitiveLog = (obj: AddFlowOutputsResponse): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * A request to add sources to the flow.
 */
export interface AddFlowSourcesRequest {
  /**
   * A list of sources that you want to add.
   */
  Sources: SetSourceRequest[] | undefined;

  /**
   * The flow that you want to mutate.
   */
  FlowArn: string | undefined;
}

export namespace AddFlowSourcesRequest {
  export const filterSensitiveLog = (obj: AddFlowSourcesRequest): any => ({
    ...obj,
  });
}

export interface AddFlowSourcesResponse {
  /**
   * The ARN of the flow that these sources were added to.
   */
  FlowArn?: string;

  /**
   * The details of the newly added sources.
   */
  Sources?: Source[];
}

export namespace AddFlowSourcesResponse {
  export const filterSensitiveLog = (obj: AddFlowSourcesResponse): any => ({
    ...obj,
  });
}

/**
 * A request to add VPC interfaces to the flow.
 */
export interface AddFlowVpcInterfacesRequest {
  /**
   * The flow that you want to mutate.
   */
  FlowArn: string | undefined;

  /**
   * A list of VPC interfaces that you want to add.
   */
  VpcInterfaces: VpcInterfaceRequest[] | undefined;
}

export namespace AddFlowVpcInterfacesRequest {
  export const filterSensitiveLog = (obj: AddFlowVpcInterfacesRequest): any => ({
    ...obj,
  });
}

export interface AddFlowVpcInterfacesResponse {
  /**
   * The details of the newly added VPC interfaces.
   */
  VpcInterfaces?: VpcInterface[];

  /**
   * The ARN of the flow that these VPC interfaces were added to.
   */
  FlowArn?: string;
}

export namespace AddFlowVpcInterfacesResponse {
  export const filterSensitiveLog = (obj: AddFlowVpcInterfacesResponse): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface CreateFlow420Exception extends __SmithyException, $MetadataBearer {
  name: "CreateFlow420Exception";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace CreateFlow420Exception {
  export const filterSensitiveLog = (obj: CreateFlow420Exception): any => ({
    ...obj,
  });
}

export enum State {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * The settings for source failover
 */
export interface FailoverConfig {
  State?: State | string;
  /**
   * Search window time to look for dash-7 packets
   */
  RecoveryWindow?: number;
}

export namespace FailoverConfig {
  export const filterSensitiveLog = (obj: FailoverConfig): any => ({
    ...obj,
  });
}

/**
 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
 */
export interface CreateFlowRequest {
  /**
   * The VPC interfaces you want on the flow.
   */
  VpcInterfaces?: VpcInterfaceRequest[];

  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
   */
  AvailabilityZone?: string;

  /**
   * The settings for source failover
   */
  SourceFailoverConfig?: FailoverConfig;

  /**
   * The entitlements that you want to grant on a flow.
   */
  Entitlements?: GrantEntitlementRequest[];

  Sources?: SetSourceRequest[];
  /**
   * The outputs that you want to add to this flow.
   */
  Outputs?: AddOutputRequest[];

  /**
   * The name of the flow.
   */
  Name: string | undefined;

  /**
   * The settings for the source of the flow.
   */
  Source?: SetSourceRequest;
}

export namespace CreateFlowRequest {
  export const filterSensitiveLog = (obj: CreateFlowRequest): any => ({
    ...obj,
  });
}

/**
 * The settings for a flow, including its source, outputs, and entitlements.
 */
export interface Flow {
  /**
   * The settings for the source of the flow.
   */
  Source: Source | undefined;

  /**
   * The name of the flow.
   */
  Name: string | undefined;

  /**
   * The entitlements in this flow.
   */
  Entitlements: Entitlement[] | undefined;

  Sources?: Source[];
  /**
   * The VPC Interfaces for this flow.
   */
  VpcInterfaces?: VpcInterface[];

  /**
   * The IP address from which video will be sent to output destinations.
   */
  EgressIp?: string;

  /**
   * The settings for source failover
   */
  SourceFailoverConfig?: FailoverConfig;

  /**
   * The outputs in this flow.
   */
  Outputs: Output[] | undefined;

  /**
   * A description of the flow. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
   */
  FlowArn: string | undefined;

  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
   */
  AvailabilityZone: string | undefined;

  /**
   * The current status of the flow.
   */
  Status: Status | string | undefined;
}

export namespace Flow {
  export const filterSensitiveLog = (obj: Flow): any => ({
    ...obj,
  });
}

export interface CreateFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;
}

export namespace CreateFlowResponse {
  export const filterSensitiveLog = (obj: CreateFlowResponse): any => ({
    ...obj,
  });
}

export interface DeleteFlowRequest {
  /**
   * The ARN of the flow that you want to delete.
   */
  FlowArn: string | undefined;
}

export namespace DeleteFlowRequest {
  export const filterSensitiveLog = (obj: DeleteFlowRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowResponse {
  /**
   * The ARN of the flow that was deleted.
   */
  FlowArn?: string;

  /**
   * The status of the flow when the DeleteFlow process begins.
   */
  Status?: Status | string;
}

export namespace DeleteFlowResponse {
  export const filterSensitiveLog = (obj: DeleteFlowResponse): any => ({
    ...obj,
  });
}

export interface DescribeFlowRequest {
  /**
   * The ARN of the flow that you want to describe.
   */
  FlowArn: string | undefined;
}

export namespace DescribeFlowRequest {
  export const filterSensitiveLog = (obj: DescribeFlowRequest): any => ({
    ...obj,
  });
}

/**
 * Messages that provide the state of the flow.
 */
export interface Messages {
  /**
   * A list of errors that might have been generated from processes on this flow.
   */
  Errors: string[] | undefined;
}

export namespace Messages {
  export const filterSensitiveLog = (obj: Messages): any => ({
    ...obj,
  });
}

export interface DescribeFlowResponse {
  /**
   * Messages that provide the state of the flow.
   */
  Messages?: Messages;

  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;
}

export namespace DescribeFlowResponse {
  export const filterSensitiveLog = (obj: DescribeFlowResponse): any => ({
    ...obj,
  });
}

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface GrantFlowEntitlements420Exception extends __SmithyException, $MetadataBearer {
  name: "GrantFlowEntitlements420Exception";
  $fault: "client";
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string | undefined;
}

export namespace GrantFlowEntitlements420Exception {
  export const filterSensitiveLog = (obj: GrantFlowEntitlements420Exception): any => ({
    ...obj,
  });
}

/**
 * A request to grant entitlements on a flow.
 */
export interface GrantFlowEntitlementsRequest {
  /**
   * The list of entitlements that you want to grant.
   */
  Entitlements: GrantEntitlementRequest[] | undefined;

  /**
   * The flow that you want to grant entitlements on.
   */
  FlowArn: string | undefined;
}

export namespace GrantFlowEntitlementsRequest {
  export const filterSensitiveLog = (obj: GrantFlowEntitlementsRequest): any => ({
    ...obj,
  });
}

export interface GrantFlowEntitlementsResponse {
  /**
   * The entitlements that were just granted.
   */
  Entitlements?: Entitlement[];

  /**
   * The ARN of the flow that these entitlements were granted to.
   */
  FlowArn?: string;
}

export namespace GrantFlowEntitlementsResponse {
  export const filterSensitiveLog = (obj: GrantFlowEntitlementsResponse): any => ({
    ...obj,
  });
}

export interface ListEntitlementsRequest {
  /**
   * The maximum number of results to return per API request. For example, you submit a ListEntitlements request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 20 results per page.
   */
  MaxResults?: number;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

export namespace ListEntitlementsRequest {
  export const filterSensitiveLog = (obj: ListEntitlementsRequest): any => ({
    ...obj,
  });
}

export interface ListEntitlementsResponse {
  /**
   * A list of entitlements that have been granted to you from other AWS accounts.
   */
  Entitlements?: ListedEntitlement[];

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListEntitlements request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListEntitlements request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

export namespace ListEntitlementsResponse {
  export const filterSensitiveLog = (obj: ListEntitlementsResponse): any => ({
    ...obj,
  });
}

export interface ListFlowsRequest {
  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
   */
  NextToken?: string;

  /**
   * The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   */
  MaxResults?: number;
}

export namespace ListFlowsRequest {
  export const filterSensitiveLog = (obj: ListFlowsRequest): any => ({
    ...obj,
  });
}

export interface ListFlowsResponse {
  /**
   * A list of flow summaries.
   */
  Flows?: ListedFlow[];

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.
   */
  NextToken?: string;
}

export namespace ListFlowsResponse {
  export const filterSensitiveLog = (obj: ListFlowsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource for which to list the tags.
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface RemoveFlowOutputRequest {
  /**
   * The flow that you want to remove an output from.
   */
  FlowArn: string | undefined;

  /**
   * The ARN of the output that you want to remove.
   */
  OutputArn: string | undefined;
}

export namespace RemoveFlowOutputRequest {
  export const filterSensitiveLog = (obj: RemoveFlowOutputRequest): any => ({
    ...obj,
  });
}

export interface RemoveFlowOutputResponse {
  /**
   * The ARN of the flow that is associated with the output you removed.
   */
  FlowArn?: string;

  /**
   * The ARN of the output that was removed.
   */
  OutputArn?: string;
}

export namespace RemoveFlowOutputResponse {
  export const filterSensitiveLog = (obj: RemoveFlowOutputResponse): any => ({
    ...obj,
  });
}

export interface RemoveFlowSourceRequest {
  /**
   * The flow that you want to remove a source from.
   */
  FlowArn: string | undefined;

  /**
   * The ARN of the source that you want to remove.
   */
  SourceArn: string | undefined;
}

export namespace RemoveFlowSourceRequest {
  export const filterSensitiveLog = (obj: RemoveFlowSourceRequest): any => ({
    ...obj,
  });
}

export interface RemoveFlowSourceResponse {
  /**
   * The ARN of the flow that is associated with the source you removed.
   */
  FlowArn?: string;

  /**
   * The ARN of the source that was removed.
   */
  SourceArn?: string;
}

export namespace RemoveFlowSourceResponse {
  export const filterSensitiveLog = (obj: RemoveFlowSourceResponse): any => ({
    ...obj,
  });
}

export interface RemoveFlowVpcInterfaceRequest {
  /**
   * The flow that you want to remove a VPC interface from.
   */
  FlowArn: string | undefined;

  /**
   * The name of the VPC interface that you want to remove.
   */
  VpcInterfaceName: string | undefined;
}

export namespace RemoveFlowVpcInterfaceRequest {
  export const filterSensitiveLog = (obj: RemoveFlowVpcInterfaceRequest): any => ({
    ...obj,
  });
}

export interface RemoveFlowVpcInterfaceResponse {
  /**
   * The ARN of the flow that is associated with the VPC interface you removed.
   */
  FlowArn?: string;

  /**
   * The name of the VPC interface that was removed.
   */
  VpcInterfaceName?: string;

  /**
   * IDs of network interfaces associated with the removed VPC interface that Media Connect was unable to remove.
   */
  NonDeletedNetworkInterfaceIds?: string[];
}

export namespace RemoveFlowVpcInterfaceResponse {
  export const filterSensitiveLog = (obj: RemoveFlowVpcInterfaceResponse): any => ({
    ...obj,
  });
}

export interface RevokeFlowEntitlementRequest {
  /**
   * The ARN of the entitlement that you want to revoke.
   */
  EntitlementArn: string | undefined;

  /**
   * The flow that you want to revoke an entitlement from.
   */
  FlowArn: string | undefined;
}

export namespace RevokeFlowEntitlementRequest {
  export const filterSensitiveLog = (obj: RevokeFlowEntitlementRequest): any => ({
    ...obj,
  });
}

export interface RevokeFlowEntitlementResponse {
  /**
   * The ARN of the flow that the entitlement was revoked from.
   */
  FlowArn?: string;

  /**
   * The ARN of the entitlement that was revoked.
   */
  EntitlementArn?: string;
}

export namespace RevokeFlowEntitlementResponse {
  export const filterSensitiveLog = (obj: RevokeFlowEntitlementResponse): any => ({
    ...obj,
  });
}

export interface StartFlowRequest {
  /**
   * The ARN of the flow that you want to start.
   */
  FlowArn: string | undefined;
}

export namespace StartFlowRequest {
  export const filterSensitiveLog = (obj: StartFlowRequest): any => ({
    ...obj,
  });
}

export interface StartFlowResponse {
  /**
   * The ARN of the flow that you started.
   */
  FlowArn?: string;

  /**
   * The status of the flow when the StartFlow process begins.
   */
  Status?: Status | string;
}

export namespace StartFlowResponse {
  export const filterSensitiveLog = (obj: StartFlowResponse): any => ({
    ...obj,
  });
}

export interface StopFlowRequest {
  /**
   * The ARN of the flow that you want to stop.
   */
  FlowArn: string | undefined;
}

export namespace StopFlowRequest {
  export const filterSensitiveLog = (obj: StopFlowRequest): any => ({
    ...obj,
  });
}

export interface StopFlowResponse {
  /**
   * The ARN of the flow that you stopped.
   */
  FlowArn?: string;

  /**
   * The status of the flow when the StopFlow process begins.
   */
  Status?: Status | string;
}

export namespace StopFlowResponse {
  export const filterSensitiveLog = (obj: StopFlowResponse): any => ({
    ...obj,
  });
}

/**
 * The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 */
export interface TagResourceRequest {
  /**
   * A map from tag keys to values. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   */
  Tags: { [key: string]: string } | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource to which to add tags.
   */
  ResourceArn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the AWS Elemental MediaConnect resource from which to delete tags.
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * The settings for source failover
 */
export interface UpdateFailoverConfig {
  State?: State | string;
  /**
   * Recovery window time to look for dash-7 packets
   */
  RecoveryWindow?: number;
}

export namespace UpdateFailoverConfig {
  export const filterSensitiveLog = (obj: UpdateFailoverConfig): any => ({
    ...obj,
  });
}

/**
 * A request to update flow.
 */
export interface UpdateFlowRequest {
  /**
   * The settings for source failover
   */
  SourceFailoverConfig?: UpdateFailoverConfig;

  /**
   * The flow that you want to update.
   */
  FlowArn: string | undefined;
}

export namespace UpdateFlowRequest {
  export const filterSensitiveLog = (obj: UpdateFlowRequest): any => ({
    ...obj,
  });
}

export interface UpdateFlowResponse {
  /**
   * The settings for a flow, including its source, outputs, and entitlements.
   */
  Flow?: Flow;
}

export namespace UpdateFlowResponse {
  export const filterSensitiveLog = (obj: UpdateFlowResponse): any => ({
    ...obj,
  });
}

/**
 * Information about the encryption of the flow.
 */
export interface UpdateEncryption {
  /**
   * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Region?: string;

  /**
   * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
   */
  RoleArn?: string;

  /**
   * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  Url?: string;

  /**
   * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
   */
  Algorithm?: Algorithm | string;

  /**
   * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  KeyType?: KeyType | string;

  /**
   * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  DeviceId?: string;

  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
   */
  ConstantInitializationVector?: string;

  /**
   * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
   */
  ResourceId?: string;

  /**
   * The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
   */
  SecretArn?: string;
}

export namespace UpdateEncryption {
  export const filterSensitiveLog = (obj: UpdateEncryption): any => ({
    ...obj,
  });
}

/**
 * The entitlement fields that you want to update.
 */
export interface UpdateFlowEntitlementRequest {
  /**
   * An indication of whether you want to enable the entitlement to allow access, or disable it to stop streaming content to the subscriber’s flow temporarily. If you don’t specify the entitlementStatus field in your request, MediaConnect leaves the value unchanged.
   */
  EntitlementStatus?: EntitlementStatus | string;

  /**
   * The type of encryption that will be used on the output associated with this entitlement.
   */
  Encryption?: UpdateEncryption;

  /**
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   */
  Description?: string;

  /**
   * The flow that is associated with the entitlement that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * The ARN of the entitlement that you want to update.
   */
  EntitlementArn: string | undefined;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   */
  Subscribers?: string[];
}

export namespace UpdateFlowEntitlementRequest {
  export const filterSensitiveLog = (obj: UpdateFlowEntitlementRequest): any => ({
    ...obj,
  });
}

export interface UpdateFlowEntitlementResponse {
  /**
   * The settings for a flow entitlement.
   */
  Entitlement?: Entitlement;

  /**
   * The ARN of the flow that this entitlement was granted on.
   */
  FlowArn?: string;
}

export namespace UpdateFlowEntitlementResponse {
  export const filterSensitiveLog = (obj: UpdateFlowEntitlementResponse): any => ({
    ...obj,
  });
}

/**
 * The fields that you want to update in the output.
 */
export interface UpdateFlowOutputRequest {
  /**
   * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  CidrAllowList?: string[];

  /**
   * The IP address where you want to send the output.
   */
  Destination?: string;

  /**
   * A description of the output. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the end user.
   */
  Description?: string;

  /**
   * The ARN of the output that you want to update.
   */
  OutputArn: string | undefined;

  /**
   * The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
   */
  Encryption?: UpdateEncryption;

  /**
   * The port to use when content is distributed to this output.
   */
  Port?: number;

  /**
   * The flow that is associated with the output that you want to update.
   */
  FlowArn: string | undefined;

  /**
   * The remote ID for the Zixi-pull stream.
   */
  RemoteId?: string;

  /**
   * The maximum latency in milliseconds for Zixi-based streams.
   */
  MaxLatency?: number;

  /**
   * The protocol to use for the output.
   */
  Protocol?: Protocol | string;

  /**
   * The name of the VPC interface attachment to use for this output.
   */
  VpcInterfaceAttachment?: VpcInterfaceAttachment;

  /**
   * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
   */
  SmoothingLatency?: number;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;
}

export namespace UpdateFlowOutputRequest {
  export const filterSensitiveLog = (obj: UpdateFlowOutputRequest): any => ({
    ...obj,
  });
}

export interface UpdateFlowOutputResponse {
  /**
   * The settings for an output.
   */
  Output?: Output;

  /**
   * The ARN of the flow that is associated with the updated output.
   */
  FlowArn?: string;
}

export namespace UpdateFlowOutputResponse {
  export const filterSensitiveLog = (obj: UpdateFlowOutputResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update the source of a flow.
 */
export interface UpdateFlowSourceRequest {
  /**
   * The name of the VPC Interface to configure this Source with.
   */
  VpcInterfaceName?: string;

  /**
   * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
   */
  MaxBitrate?: number;

  /**
   * The ARN of the source that you want to update.
   */
  SourceArn: string | undefined;

  /**
   * The type of encryption used on the content ingested from this source.
   */
  Decryption?: UpdateEncryption;

  /**
   * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
   */
  StreamId?: string;

  /**
   * The protocol that is used by the source.
   */
  Protocol?: Protocol | string;

  /**
   * The ARN of the entitlement that allows you to subscribe to this flow. The entitlement is set by the flow originator, and the ARN is generated as part of the originator's flow.
   */
  EntitlementArn?: string;

  /**
   * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
   */
  MaxLatency?: number;

  /**
   * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
   */
  WhitelistCidr?: string;

  /**
   * The port that the flow will be listening on for incoming content.
   */
  IngestPort?: number;

  /**
   * The flow that is associated with the source that you want to update.
   */
  FlowArn: string | undefined;
}

export namespace UpdateFlowSourceRequest {
  export const filterSensitiveLog = (obj: UpdateFlowSourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateFlowSourceResponse {
  /**
   * The ARN of the flow that you want to update.
   */
  FlowArn?: string;

  /**
   * The settings for the source of the flow.
   */
  Source?: Source;
}

export namespace UpdateFlowSourceResponse {
  export const filterSensitiveLog = (obj: UpdateFlowSourceResponse): any => ({
    ...obj,
  });
}
