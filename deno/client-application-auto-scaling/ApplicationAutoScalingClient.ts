
import {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "./commands/DeleteScalingPolicyCommand.ts";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand.ts";
import {
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput,
} from "./commands/DeregisterScalableTargetCommand.ts";
import {
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
} from "./commands/DescribeScalableTargetsCommand.ts";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "./commands/DescribeScalingActivitiesCommand.ts";
import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "./commands/DescribeScalingPoliciesCommand.ts";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand.ts";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "./commands/PutScalingPolicyCommand.ts";
import { PutScheduledActionCommandInput, PutScheduledActionCommandOutput } from "./commands/PutScheduledActionCommand.ts";
import {
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
} from "./commands/RegisterScalableTargetCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | DeleteScalingPolicyCommandInput
  | DeleteScheduledActionCommandInput
  | DeregisterScalableTargetCommandInput
  | DescribeScalableTargetsCommandInput
  | DescribeScalingActivitiesCommandInput
  | DescribeScalingPoliciesCommandInput
  | DescribeScheduledActionsCommandInput
  | PutScalingPolicyCommandInput
  | PutScheduledActionCommandInput
  | RegisterScalableTargetCommandInput;

export type ServiceOutputTypes =
  | DeleteScalingPolicyCommandOutput
  | DeleteScheduledActionCommandOutput
  | DeregisterScalableTargetCommandOutput
  | DescribeScalableTargetsCommandOutput
  | DescribeScalingActivitiesCommandOutput
  | DescribeScalingPoliciesCommandOutput
  | DescribeScheduledActionsCommandOutput
  | PutScalingPolicyCommandOutput
  | PutScheduledActionCommandOutput
  | RegisterScalableTargetCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ApplicationAutoScalingClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ApplicationAutoScalingClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>With Application Auto Scaling, you can configure automatic scaling for the following
 *          resources:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon ECS services</p>
 *             </li>
 *             <li>
 *                <p>Amazon EC2 Spot Fleet requests</p>
 *             </li>
 *             <li>
 *                <p>Amazon EMR clusters</p>
 *             </li>
 *             <li>
 *                <p>Amazon AppStream 2.0 fleets</p>
 *             </li>
 *             <li>
 *                <p>Amazon DynamoDB tables and global secondary indexes throughput capacity</p>
 *             </li>
 *             <li>
 *                <p>Amazon Aurora Replicas</p>
 *             </li>
 *             <li>
 *                <p>Amazon SageMaker endpoint variants</p>
 *             </li>
 *             <li>
 *                <p>Custom resources provided by your own applications or services</p>
 *             </li>
 *             <li>
 *                <p>Amazon Comprehend document classification endpoints</p>
 *             </li>
 *             <li>
 *                <p>AWS Lambda function provisioned concurrency</p>
 *             </li>
 *             <li>
 *                <p>Amazon Keyspaces (for Apache Cassandra) tables</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>API Summary</b>
 *          </p>
 *          <p>The Application Auto Scaling service API includes three key sets of actions: </p>
 *          <ul>
 *             <li>
 *                <p>Register and manage scalable targets - Register AWS or custom resources as
 *                scalable targets (a resource that Application Auto Scaling can scale), set minimum and maximum
 *                capacity limits, and retrieve information on existing scalable targets.</p>
 *             </li>
 *             <li>
 *                <p>Configure and manage automatic scaling - Define scaling policies to dynamically
 *                scale your resources in response to CloudWatch alarms, schedule one-time or recurring
 *                scaling actions, and retrieve your recent scaling activity history.</p>
 *             </li>
 *             <li>
 *                <p>Suspend and resume scaling - Temporarily suspend and later resume automatic
 *                scaling by calling the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html">RegisterScalableTarget</a> API action for any Application Auto Scaling scalable target. You
 *                can suspend and resume (individually or in combination) scale-out activities that are
 *                triggered by a scaling policy, scale-in activities that are triggered by a scaling
 *                policy, and scheduled scaling.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>To learn more about Application Auto Scaling, including information about granting IAM users required
 *          permissions for Application Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling
 *             User Guide</a>.</p>
 */
export class ApplicationAutoScalingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ApplicationAutoScalingClientResolvedConfig
> {
  readonly config: ApplicationAutoScalingClientResolvedConfig;

  constructor(configuration: ApplicationAutoScalingClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
