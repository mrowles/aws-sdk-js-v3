import { BatchGetChannelCommandInput, BatchGetChannelCommandOutput } from "./commands/BatchGetChannelCommand";
import { BatchGetStreamKeyCommandInput, BatchGetStreamKeyCommandOutput } from "./commands/BatchGetStreamKeyCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateStreamKeyCommandInput, CreateStreamKeyCommandOutput } from "./commands/CreateStreamKeyCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import { DeleteStreamKeyCommandInput, DeleteStreamKeyCommandOutput } from "./commands/DeleteStreamKeyCommand";
import { GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import { GetStreamCommandInput, GetStreamCommandOutput } from "./commands/GetStreamCommand";
import { GetStreamKeyCommandInput, GetStreamKeyCommandOutput } from "./commands/GetStreamKeyCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListStreamKeysCommandInput, ListStreamKeysCommandOutput } from "./commands/ListStreamKeysCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutMetadataCommandInput, PutMetadataCommandOutput } from "./commands/PutMetadataCommand";
import { StopStreamCommandInput, StopStreamCommandOutput } from "./commands/StopStreamCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
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
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchGetChannelCommandInput
  | BatchGetStreamKeyCommandInput
  | CreateChannelCommandInput
  | CreateStreamKeyCommandInput
  | DeleteChannelCommandInput
  | DeleteStreamKeyCommandInput
  | GetChannelCommandInput
  | GetStreamCommandInput
  | GetStreamKeyCommandInput
  | ListChannelsCommandInput
  | ListStreamKeysCommandInput
  | ListStreamsCommandInput
  | ListTagsForResourceCommandInput
  | PutMetadataCommandInput
  | StopStreamCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput;

export type ServiceOutputTypes =
  | BatchGetChannelCommandOutput
  | BatchGetStreamKeyCommandOutput
  | CreateChannelCommandOutput
  | CreateStreamKeyCommandOutput
  | DeleteChannelCommandOutput
  | DeleteStreamKeyCommandOutput
  | GetChannelCommandOutput
  | GetStreamCommandOutput
  | GetStreamKeyCommandOutput
  | ListChannelsCommandOutput
  | ListStreamKeysCommandOutput
  | ListStreamsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutMetadataCommandOutput
  | StopStreamCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput;

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

export type IvsClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type IvsClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>
 *             <b>Introduction</b>
 *          </p>
 *
 *          <p>The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP
 *       API and an <a href="http://aws.amazon.com/sns">AWS SNS</a> event stream for responses. JSON
 *       is used for both requests and responses, including errors.</p>
 *
 *          <p>The API is an AWS regional service, currently in these regions: us-west-2, us-east-1, and
 *       eu-west-1.</p>
 *          <p>
 *             <i>
 *                <b>All API request parameters and URLs are case sensitive.
 *         </b>
 *             </i>
 *          </p>
 *
 *          <p>For a summary of notable documentation changes in each release, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/doc-history.html"> Document
 *       History</a>.</p>
 *
 *          <p>
 *             <b>Service Endpoints</b>
 *          </p>
 *          <p>The following are the Amazon IVS service endpoints (all HTTPS): </p>
 *          <p>Region name: US West (Oregon)</p>
 *          <ul>
 *             <li>
 *                <p>Region: <code>us-west-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Endpoint: <code>ivs.us-west-2.amazonaws.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Region name: US East (Virginia)</p>
 *          <ul>
 *             <li>
 *                <p>Region: <code>us-east-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Endpoint: <code>ivs.us-east-1.amazonaws.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Region name: EU West (Dublin)</p>
 *          <ul>
 *             <li>
 *                <p>Region: <code>eu-west-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Endpoint: <code>ivs.eu-west-1.amazonaws.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Allowed Header Values</b>
 *          </p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Accept:</b>
 *                   </code> application/json</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Accept-Encoding:</b>
 *                   </code> gzip, deflate</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Content-Type:</b>
 *                   </code>application/json</p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <b>Resources</b>
 *          </p>
 *          <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/GSIVS.html"> Getting Started with Amazon
 *         IVS</a>):</p>
 *
 *          <ul>
 *             <li>
 *                <p>Channel — Stores configuration data related to your live stream. You first create a
 *           channel and then use the channel’s stream key to start your live stream. See the <a>Channel</a> endpoints for more information. </p>
 *             </li>
 *             <li>
 *                <p>Stream key — An identifier assigned by Amazon IVS when you create a channel, which is
 *           then used to authorize streaming. See the <a>StreamKey</a> endpoints for more
 *           information. <i>
 *                      <b>Treat the stream key like a secret, since it
 *               allows anyone to stream to the channel.</b>
 *                   </i>
 *                </p>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *
 *          <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
 *       comprises a <i>key</i> and a <i>value</i>, both set by you. For
 *       example, you might set a tag as <code>topic:nature</code> to label a particular video
 *       category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
 *         Resources</a> for more information, including restrictions that apply to tags.</p>
 *
 *          <p>Tags can help you identify and organize your AWS resources. For example, you can use the
 *       same tag for different resources to indicate that they are related. You can also use tags to
 *       manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">
 *         Access Tags</a>). </p>
 *
 *          <p>The Amazon IVS API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following
 *       resources support tagging: Channels and Stream Keys.</p>
 *
 *          <p>
 *             <b>API Endpoints</b>
 *          </p>
 *
 *          <p>
 *             <a>Channel</a>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateChannel</a> — Creates a new channel and an associated stream
 *           key to start streaming.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetChannel</a> — Gets the channel configuration for the specified
 *           channel ARN (Amazon Resource Name).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchGetChannel</a> — Performs <a>GetChannel</a> on
 *           multiple ARNs simultaneously.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListChannels</a> — Gets summary information about all channels in
 *           your account, in the AWS region where the API request is processed. This list can be
 *           filtered to match a specified string.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateChannel</a> — Updates a channel's configuration. This does
 *           not affect an ongoing stream of this channel. You must stop and restart the stream for the
 *           changes to take effect.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteChannel</a> — Deletes the specified channel.</p>
 *             </li>
 *          </ul>
 *
 *          <p>
 *             <a>StreamKey</a>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateStreamKey</a> — Creates a stream key, used to initiate a
 *           stream, for the specified channel ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetStreamKey</a> — Gets stream key information for the specified
 *           ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchGetStreamKey</a> — Performs <a>GetStreamKey</a> on
 *           multiple ARNs simultaneously.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStreamKeys</a> — Gets summary information about stream keys
 *           for the specified channel.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteStreamKey</a> — Deletes the stream key for the specified
 *           ARN, so it can no longer be used to stream.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>
 *             <a>Stream</a>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetStream</a> — Gets information about the active (live) stream on
 *           a specified channel.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStreams</a> — Gets summary information about live streams in
 *           your account, in the AWS region where the API request is processed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopStream</a> — Disconnects the incoming RTMPS stream for the specified channel.  Can be used in conjunction
 *           with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutMetadata</a> — Inserts metadata into an RTMPS stream for the specified
 *           channel. A maximum of 5 requests per second per channel is allowed, each with a maximum
 *           1KB payload.</p>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> AWS
 *       Tags</a>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>TagResource</a> — Adds or updates tags for the AWS resource with the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a> — Gets information about AWS tags for the specified ARN.</p>
 *             </li>
 *          </ul>
 */
export class IvsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IvsClientResolvedConfig
> {
  readonly config: IvsClientResolvedConfig;

  constructor(configuration: IvsClientConfig) {
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
