
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand.ts";
import { CreateHapgCommandInput, CreateHapgCommandOutput } from "./commands/CreateHapgCommand.ts";
import { CreateHsmCommandInput, CreateHsmCommandOutput } from "./commands/CreateHsmCommand.ts";
import { CreateLunaClientCommandInput, CreateLunaClientCommandOutput } from "./commands/CreateLunaClientCommand.ts";
import { DeleteHapgCommandInput, DeleteHapgCommandOutput } from "./commands/DeleteHapgCommand.ts";
import { DeleteHsmCommandInput, DeleteHsmCommandOutput } from "./commands/DeleteHsmCommand.ts";
import { DeleteLunaClientCommandInput, DeleteLunaClientCommandOutput } from "./commands/DeleteLunaClientCommand.ts";
import { DescribeHapgCommandInput, DescribeHapgCommandOutput } from "./commands/DescribeHapgCommand.ts";
import { DescribeHsmCommandInput, DescribeHsmCommandOutput } from "./commands/DescribeHsmCommand.ts";
import { DescribeLunaClientCommandInput, DescribeLunaClientCommandOutput } from "./commands/DescribeLunaClientCommand.ts";
import { GetConfigCommandInput, GetConfigCommandOutput } from "./commands/GetConfigCommand.ts";
import { ListAvailableZonesCommandInput, ListAvailableZonesCommandOutput } from "./commands/ListAvailableZonesCommand.ts";
import { ListHapgsCommandInput, ListHapgsCommandOutput } from "./commands/ListHapgsCommand.ts";
import { ListHsmsCommandInput, ListHsmsCommandOutput } from "./commands/ListHsmsCommand.ts";
import { ListLunaClientsCommandInput, ListLunaClientsCommandOutput } from "./commands/ListLunaClientsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { ModifyHapgCommandInput, ModifyHapgCommandOutput } from "./commands/ModifyHapgCommand.ts";
import { ModifyHsmCommandInput, ModifyHsmCommandOutput } from "./commands/ModifyHsmCommand.ts";
import { ModifyLunaClientCommandInput, ModifyLunaClientCommandOutput } from "./commands/ModifyLunaClientCommand.ts";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand.ts";
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
  | AddTagsToResourceCommandInput
  | CreateHapgCommandInput
  | CreateHsmCommandInput
  | CreateLunaClientCommandInput
  | DeleteHapgCommandInput
  | DeleteHsmCommandInput
  | DeleteLunaClientCommandInput
  | DescribeHapgCommandInput
  | DescribeHsmCommandInput
  | DescribeLunaClientCommandInput
  | GetConfigCommandInput
  | ListAvailableZonesCommandInput
  | ListHapgsCommandInput
  | ListHsmsCommandInput
  | ListLunaClientsCommandInput
  | ListTagsForResourceCommandInput
  | ModifyHapgCommandInput
  | ModifyHsmCommandInput
  | ModifyLunaClientCommandInput
  | RemoveTagsFromResourceCommandInput;

export type ServiceOutputTypes =
  | AddTagsToResourceCommandOutput
  | CreateHapgCommandOutput
  | CreateHsmCommandOutput
  | CreateLunaClientCommandOutput
  | DeleteHapgCommandOutput
  | DeleteHsmCommandOutput
  | DeleteLunaClientCommandOutput
  | DescribeHapgCommandOutput
  | DescribeHsmCommandOutput
  | DescribeLunaClientCommandOutput
  | GetConfigCommandOutput
  | ListAvailableZonesCommandOutput
  | ListHapgsCommandOutput
  | ListHsmsCommandOutput
  | ListLunaClientsCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyHapgCommandOutput
  | ModifyHsmCommandOutput
  | ModifyLunaClientCommandOutput
  | RemoveTagsFromResourceCommandOutput;

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

export type CloudHSMClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CloudHSMClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS CloudHSM Service</fullname>
 *          <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 */
export class CloudHSMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudHSMClientResolvedConfig
> {
  readonly config: CloudHSMClientResolvedConfig;

  constructor(configuration: CloudHSMClientConfig) {
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
