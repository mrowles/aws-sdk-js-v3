
import { AssumeRoleCommandInput, AssumeRoleCommandOutput } from "./commands/AssumeRoleCommand.ts";
import { AssumeRoleWithSAMLCommandInput, AssumeRoleWithSAMLCommandOutput } from "./commands/AssumeRoleWithSAMLCommand.ts";
import {
  AssumeRoleWithWebIdentityCommandInput,
  AssumeRoleWithWebIdentityCommandOutput,
} from "./commands/AssumeRoleWithWebIdentityCommand.ts";
import {
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput,
} from "./commands/DecodeAuthorizationMessageCommand.ts";
import { GetAccessKeyInfoCommandInput, GetAccessKeyInfoCommandOutput } from "./commands/GetAccessKeyInfoCommand.ts";
import { GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput } from "./commands/GetCallerIdentityCommand.ts";
import { GetFederationTokenCommandInput, GetFederationTokenCommandOutput } from "./commands/GetFederationTokenCommand.ts";
import { GetSessionTokenCommandInput, GetSessionTokenCommandOutput } from "./commands/GetSessionTokenCommand.ts";
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
  | AssumeRoleCommandInput
  | AssumeRoleWithSAMLCommandInput
  | AssumeRoleWithWebIdentityCommandInput
  | DecodeAuthorizationMessageCommandInput
  | GetAccessKeyInfoCommandInput
  | GetCallerIdentityCommandInput
  | GetFederationTokenCommandInput
  | GetSessionTokenCommandInput;

export type ServiceOutputTypes =
  | AssumeRoleCommandOutput
  | AssumeRoleWithSAMLCommandOutput
  | AssumeRoleWithWebIdentityCommandOutput
  | DecodeAuthorizationMessageCommandOutput
  | GetAccessKeyInfoCommandOutput
  | GetCallerIdentityCommandOutput
  | GetFederationTokenCommandOutput
  | GetSessionTokenCommandOutput;

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

export type STSClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type STSClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Security Token Service</fullname>
 *          <p>The AWS Security Token Service (STS) is a web service that enables you to request
 *       temporary, limited-privilege credentials for AWS Identity and Access Management (IAM) users or
 *       for users that you authenticate (federated users). This guide provides descriptions of the STS
 *       API. For more detailed information about using this service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a>. </p>
 *
 *
 *          <p>For information about setting up signatures and authorization through the API, go to
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
 *         AWS API Requests</a> in the <i>AWS General Reference</i>. For general
 *       information about the Query API, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in
 *         <i>Using IAM</i>. For information about using security tokens with other AWS
 *       products, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html">AWS Services That
 *         Work with IAM</a> in the <i>IAM User Guide</i>. </p>
 *          <p>If you're new to AWS and need additional technical information about a specific AWS
 *       product, you can find the product's technical documentation at <a href="http://aws.amazon.com/documentation/">http://aws.amazon.com/documentation/</a>. </p>
 *
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>By default, AWS Security Token Service (STS) is available as a global service, and all AWS
 *       STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. Global
 *       requests map to the US East (N. Virginia) region. AWS recommends using Regional AWS STS
 *       endpoints instead of the global endpoint to reduce latency, build in redundancy, and increase
 *       session token validity. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Managing AWS STS in an
 *         AWS Region</a> in the <i>IAM User Guide</i>.</p>
 *          <p>Most AWS Regions are enabled for operations in all AWS services by default. Those Regions
 *       are automatically activated for use with AWS STS. Some Regions, such as Asia Pacific (Hong
 *       Kong), must be manually enabled. To learn more about enabling and disabling AWS Regions, see
 *         <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS
 *         Regions</a> in the <i>AWS General Reference</i>. When you enable these AWS
 *       Regions, they are automatically activated for use with AWS STS. You cannot activate the STS
 *       endpoint for a Region that is disabled. Tokens that are valid in all AWS Regions are longer
 *       than tokens that are valid in Regions that are enabled by default. Changing this setting might
 *       affect existing systems where you temporarily store tokens. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#sts-regions-manage-tokens">Managing Global Endpoint Session Tokens</a> in the <i>IAM User
 *       Guide</i>.</p>
 *          <p>After you activate a Region for use with AWS STS, you can direct AWS STS API calls to that
 *       Region. AWS STS recommends that you provide both the Region and endpoint when you make calls
 *       to a Regional endpoint. You can provide the Region alone for manually enabled Regions, such as
 *       Asia Pacific (Hong Kong). In this case, the calls are directed to the STS Regional endpoint.
 *       However, if you provide the Region alone for Regions enabled by default, the calls are
 *       directed to the global endpoint of <code>https://sts.amazonaws.com</code>.</p>
 *          <p>To view the list of AWS STS endpoints and whether they are active by default, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html#id_credentials_temp_enable-regions_writing_code">Writing Code to Use AWS STS Regions</a> in the <i>IAM User
 *       Guide</i>.</p>
 *
 *          <p>
 *             <b>Recording API requests</b>
 *          </p>
 *          <p>STS supports AWS CloudTrail, which is a service that records AWS calls for your AWS
 *       account and delivers log files to an Amazon S3 bucket. By using information collected by
 *       CloudTrail, you can determine what requests were successfully made to STS, who made the
 *       request, when it was made, and so on.</p>
 *          <p>If you activate AWS STS endpoints in Regions other than the default global endpoint, then
 *       you must also turn on CloudTrail logging in those Regions. This is necessary to record any AWS
 *       STS API calls that are made in those Regions. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/aggregating_logs_regions_turn_on_ct.html">Turning On
 *         CloudTrail in Additional Regions</a> in the <i>AWS CloudTrail User
 *         Guide</i>.</p>
 *          <p>AWS Security Token Service (STS) is a global service with a single endpoint at
 *         <code>https://sts.amazonaws.com</code>. Calls to this endpoint are logged as calls to a
 *       global service. However, because this endpoint is physically located in the US East (N.
 *       Virginia) Region, your logs list <code>us-east-1</code> as the event Region. CloudTrail does
 *       not write these logs to the US East (Ohio) Region unless you choose to include global service
 *       logs in that Region. CloudTrail writes calls to all Regional endpoints to their respective
 *       Regions. For example, calls to sts.us-east-2.amazonaws.com are published to the US East (Ohio)
 *       Region and calls to sts.eu-central-1.amazonaws.com are published to the EU (Frankfurt)
 *       Region.</p>
 *          <p>To learn more about CloudTrail, including how to turn it on and find your log files, see
 *       the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User
 *         Guide</a>.</p>
 */
export class STSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig
> {
  readonly config: STSClientResolvedConfig;

  constructor(configuration: STSClientConfig) {
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
