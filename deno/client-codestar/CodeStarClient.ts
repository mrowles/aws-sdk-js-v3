
import {
  AssociateTeamMemberCommandInput,
  AssociateTeamMemberCommandOutput,
} from "./commands/AssociateTeamMemberCommand.ts";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand.ts";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand.ts";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand.ts";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand.ts";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand.ts";
import {
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "./commands/DescribeUserProfileCommand.ts";
import {
  DisassociateTeamMemberCommandInput,
  DisassociateTeamMemberCommandOutput,
} from "./commands/DisassociateTeamMemberCommand.ts";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand.ts";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand.ts";
import { ListTagsForProjectCommandInput, ListTagsForProjectCommandOutput } from "./commands/ListTagsForProjectCommand.ts";
import { ListTeamMembersCommandInput, ListTeamMembersCommandOutput } from "./commands/ListTeamMembersCommand.ts";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "./commands/ListUserProfilesCommand.ts";
import { TagProjectCommandInput, TagProjectCommandOutput } from "./commands/TagProjectCommand.ts";
import { UntagProjectCommandInput, UntagProjectCommandOutput } from "./commands/UntagProjectCommand.ts";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand.ts";
import { UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput } from "./commands/UpdateTeamMemberCommand.ts";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand.ts";
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
  | AssociateTeamMemberCommandInput
  | CreateProjectCommandInput
  | CreateUserProfileCommandInput
  | DeleteProjectCommandInput
  | DeleteUserProfileCommandInput
  | DescribeProjectCommandInput
  | DescribeUserProfileCommandInput
  | DisassociateTeamMemberCommandInput
  | ListProjectsCommandInput
  | ListResourcesCommandInput
  | ListTagsForProjectCommandInput
  | ListTeamMembersCommandInput
  | ListUserProfilesCommandInput
  | TagProjectCommandInput
  | UntagProjectCommandInput
  | UpdateProjectCommandInput
  | UpdateTeamMemberCommandInput
  | UpdateUserProfileCommandInput;

export type ServiceOutputTypes =
  | AssociateTeamMemberCommandOutput
  | CreateProjectCommandOutput
  | CreateUserProfileCommandOutput
  | DeleteProjectCommandOutput
  | DeleteUserProfileCommandOutput
  | DescribeProjectCommandOutput
  | DescribeUserProfileCommandOutput
  | DisassociateTeamMemberCommandOutput
  | ListProjectsCommandOutput
  | ListResourcesCommandOutput
  | ListTagsForProjectCommandOutput
  | ListTeamMembersCommandOutput
  | ListUserProfilesCommandOutput
  | TagProjectCommandOutput
  | UntagProjectCommandOutput
  | UpdateProjectCommandOutput
  | UpdateTeamMemberCommandOutput
  | UpdateUserProfileCommandOutput;

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

export type CodeStarClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CodeStarClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS CodeStar</fullname>
 *          <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the
 *       operations and data types for the AWS CodeStar API along with usage examples.</p>
 *          <p>You can use the AWS CodeStar API to work with:</p>
 *          <p>Projects and their resources, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DeleteProject</code>, which deletes a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeProject</code>, which lists the attributes of a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListProjects</code>, which lists all projects associated with your AWS
 *           account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListResources</code>, which lists the resources associated with a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTagsForProject</code>, which lists the tags associated with a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TagProject</code>, which adds tags to a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UntagProject</code>, which removes tags from a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateProject</code>, which updates the attributes of a project.</p>
 *             </li>
 *          </ul>
 *          <p>Teams and team members, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AssociateTeamMember</code>, which adds an IAM user to the team for a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTeamMembers</code>, which lists all the IAM users in the team for a
 *           project, including their roles and attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateTeamMember</code>, which updates a team member's attributes in a
 *           project.</p>
 *             </li>
 *          </ul>
 *          <p>Users, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateUserProfile</code>, which creates a user profile that contains data
 *           associated with the user across all projects.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteUserProfile</code>, which deletes all user profile information across
 *           all projects.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeUserProfile</code>, which describes the profile of a user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListUserProfiles</code>, which lists all user profiles.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateUserProfile</code>, which updates the profile for a user.</p>
 *             </li>
 *          </ul>
 */
export class CodeStarClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeStarClientResolvedConfig
> {
  readonly config: CodeStarClientResolvedConfig;

  constructor(configuration: CodeStarClientConfig) {
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
