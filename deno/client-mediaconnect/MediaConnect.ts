
import { MediaConnectClient } from "./MediaConnectClient.ts";
import {
  AddFlowOutputsCommand,
  AddFlowOutputsCommandInput,
  AddFlowOutputsCommandOutput,
} from "./commands/AddFlowOutputsCommand.ts";
import {
  AddFlowSourcesCommand,
  AddFlowSourcesCommandInput,
  AddFlowSourcesCommandOutput,
} from "./commands/AddFlowSourcesCommand.ts";
import {
  AddFlowVpcInterfacesCommand,
  AddFlowVpcInterfacesCommandInput,
  AddFlowVpcInterfacesCommandOutput,
} from "./commands/AddFlowVpcInterfacesCommand.ts";
import { CreateFlowCommand, CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand.ts";
import { DeleteFlowCommand, DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand.ts";
import {
  DescribeFlowCommand,
  DescribeFlowCommandInput,
  DescribeFlowCommandOutput,
} from "./commands/DescribeFlowCommand.ts";
import {
  GrantFlowEntitlementsCommand,
  GrantFlowEntitlementsCommandInput,
  GrantFlowEntitlementsCommandOutput,
} from "./commands/GrantFlowEntitlementsCommand.ts";
import {
  ListEntitlementsCommand,
  ListEntitlementsCommandInput,
  ListEntitlementsCommandOutput,
} from "./commands/ListEntitlementsCommand.ts";
import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand.ts";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  RemoveFlowOutputCommand,
  RemoveFlowOutputCommandInput,
  RemoveFlowOutputCommandOutput,
} from "./commands/RemoveFlowOutputCommand.ts";
import {
  RemoveFlowSourceCommand,
  RemoveFlowSourceCommandInput,
  RemoveFlowSourceCommandOutput,
} from "./commands/RemoveFlowSourceCommand.ts";
import {
  RemoveFlowVpcInterfaceCommand,
  RemoveFlowVpcInterfaceCommandInput,
  RemoveFlowVpcInterfaceCommandOutput,
} from "./commands/RemoveFlowVpcInterfaceCommand.ts";
import {
  RevokeFlowEntitlementCommand,
  RevokeFlowEntitlementCommandInput,
  RevokeFlowEntitlementCommandOutput,
} from "./commands/RevokeFlowEntitlementCommand.ts";
import { StartFlowCommand, StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand.ts";
import { StopFlowCommand, StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand.ts";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand.ts";
import { UpdateFlowCommand, UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand.ts";
import {
  UpdateFlowEntitlementCommand,
  UpdateFlowEntitlementCommandInput,
  UpdateFlowEntitlementCommandOutput,
} from "./commands/UpdateFlowEntitlementCommand.ts";
import {
  UpdateFlowOutputCommand,
  UpdateFlowOutputCommandInput,
  UpdateFlowOutputCommandOutput,
} from "./commands/UpdateFlowOutputCommand.ts";
import {
  UpdateFlowSourceCommand,
  UpdateFlowSourceCommandInput,
  UpdateFlowSourceCommandOutput,
} from "./commands/UpdateFlowSourceCommand.ts";
import { HttpHandlerOptions as __HttpHandlerOptions } from "../types/mod.ts";

/**
 * API for AWS Elemental MediaConnect
 */
export class MediaConnect extends MediaConnectClient {
  /**
   * Adds outputs to an existing flow. You can create up to 50 outputs per flow.
   */
  public addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowOutputsCommandOutput>;
  public addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    cb: (err: any, data?: AddFlowOutputsCommandOutput) => void
  ): void;
  public addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowOutputsCommandOutput) => void
  ): void;
  public addFlowOutputs(
    args: AddFlowOutputsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddFlowOutputsCommandOutput) => void),
    cb?: (err: any, data?: AddFlowOutputsCommandOutput) => void
  ): Promise<AddFlowOutputsCommandOutput> | void {
    const command = new AddFlowOutputsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Adds Sources to flow
   */
  public addFlowSources(
    args: AddFlowSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowSourcesCommandOutput>;
  public addFlowSources(
    args: AddFlowSourcesCommandInput,
    cb: (err: any, data?: AddFlowSourcesCommandOutput) => void
  ): void;
  public addFlowSources(
    args: AddFlowSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowSourcesCommandOutput) => void
  ): void;
  public addFlowSources(
    args: AddFlowSourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddFlowSourcesCommandOutput) => void),
    cb?: (err: any, data?: AddFlowSourcesCommandOutput) => void
  ): Promise<AddFlowSourcesCommandOutput> | void {
    const command = new AddFlowSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Adds VPC interfaces to flow
   */
  public addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFlowVpcInterfacesCommandOutput>;
  public addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): void;
  public addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): void;
  public addFlowVpcInterfaces(
    args: AddFlowVpcInterfacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddFlowVpcInterfacesCommandOutput) => void),
    cb?: (err: any, data?: AddFlowVpcInterfacesCommandOutput) => void
  ): Promise<AddFlowVpcInterfacesCommandOutput> | void {
    const command = new AddFlowVpcInterfacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
   */
  public createFlow(args: CreateFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowCommandOutput>;
  public createFlow(args: CreateFlowCommandInput, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
  public createFlow(
    args: CreateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;
  public createFlow(
    args: CreateFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFlowCommandOutput) => void),
    cb?: (err: any, data?: CreateFlowCommandOutput) => void
  ): Promise<CreateFlowCommandOutput> | void {
    const command = new CreateFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes a flow. Before you can delete a flow, you must stop the flow.
   */
  public deleteFlow(args: DeleteFlowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowCommandOutput>;
  public deleteFlow(args: DeleteFlowCommandInput, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
  public deleteFlow(
    args: DeleteFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;
  public deleteFlow(
    args: DeleteFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFlowCommandOutput) => void),
    cb?: (err: any, data?: DeleteFlowCommandOutput) => void
  ): Promise<DeleteFlowCommandOutput> | void {
    const command = new DeleteFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Displays the details of a flow. The response includes the flow ARN, name, and Availability Zone, as well as details about the source, outputs, and entitlements.
   */
  public describeFlow(
    args: DescribeFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowCommandOutput>;
  public describeFlow(args: DescribeFlowCommandInput, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
  public describeFlow(
    args: DescribeFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;
  public describeFlow(
    args: DescribeFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFlowCommandOutput) => void),
    cb?: (err: any, data?: DescribeFlowCommandOutput) => void
  ): Promise<DescribeFlowCommandOutput> | void {
    const command = new DescribeFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Grants entitlements to an existing flow.
   */
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GrantFlowEntitlementsCommandOutput>;
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): void;
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): void;
  public grantFlowEntitlements(
    args: GrantFlowEntitlementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GrantFlowEntitlementsCommandOutput) => void),
    cb?: (err: any, data?: GrantFlowEntitlementsCommandOutput) => void
  ): Promise<GrantFlowEntitlementsCommandOutput> | void {
    const command = new GrantFlowEntitlementsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
   */
  public listEntitlements(
    args: ListEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitlementsCommandOutput>;
  public listEntitlements(
    args: ListEntitlementsCommandInput,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): void;
  public listEntitlements(
    args: ListEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): void;
  public listEntitlements(
    args: ListEntitlementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEntitlementsCommandOutput) => void),
    cb?: (err: any, data?: ListEntitlementsCommandOutput) => void
  ): Promise<ListEntitlementsCommandOutput> | void {
    const command = new ListEntitlementsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Displays a list of flows that are associated with this account. This request returns a paginated result.
   */
  public listFlows(args: ListFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowsCommandOutput>;
  public listFlows(args: ListFlowsCommandInput, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
  public listFlows(
    args: ListFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;
  public listFlows(
    args: ListFlowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFlowsCommandOutput) => void),
    cb?: (err: any, data?: ListFlowsCommandOutput) => void
  ): Promise<ListFlowsCommandOutput> | void {
    const command = new ListFlowsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * List all tags on an AWS Elemental MediaConnect resource
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.
   */
  public removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowOutputCommandOutput>;
  public removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): void;
  public removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): void;
  public removeFlowOutput(
    args: RemoveFlowOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFlowOutputCommandOutput) => void),
    cb?: (err: any, data?: RemoveFlowOutputCommandOutput) => void
  ): Promise<RemoveFlowOutputCommandOutput> | void {
    const command = new RemoveFlowOutputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
   */
  public removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowSourceCommandOutput>;
  public removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): void;
  public removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): void;
  public removeFlowSource(
    args: RemoveFlowSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFlowSourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveFlowSourceCommandOutput) => void
  ): Promise<RemoveFlowSourceCommandOutput> | void {
    const command = new RemoveFlowSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.
   */
  public removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFlowVpcInterfaceCommandOutput>;
  public removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): void;
  public removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): void;
  public removeFlowVpcInterface(
    args: RemoveFlowVpcInterfaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void),
    cb?: (err: any, data?: RemoveFlowVpcInterfaceCommandOutput) => void
  ): Promise<RemoveFlowVpcInterfaceCommandOutput> | void {
    const command = new RemoveFlowVpcInterfaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
   */
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeFlowEntitlementCommandOutput>;
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): void;
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): void;
  public revokeFlowEntitlement(
    args: RevokeFlowEntitlementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeFlowEntitlementCommandOutput) => void),
    cb?: (err: any, data?: RevokeFlowEntitlementCommandOutput) => void
  ): Promise<RevokeFlowEntitlementCommandOutput> | void {
    const command = new RevokeFlowEntitlementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Starts a flow.
   */
  public startFlow(args: StartFlowCommandInput, options?: __HttpHandlerOptions): Promise<StartFlowCommandOutput>;
  public startFlow(args: StartFlowCommandInput, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
  public startFlow(
    args: StartFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;
  public startFlow(
    args: StartFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFlowCommandOutput) => void),
    cb?: (err: any, data?: StartFlowCommandOutput) => void
  ): Promise<StartFlowCommandOutput> | void {
    const command = new StartFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Stops a flow.
   */
  public stopFlow(args: StopFlowCommandInput, options?: __HttpHandlerOptions): Promise<StopFlowCommandOutput>;
  public stopFlow(args: StopFlowCommandInput, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
  public stopFlow(
    args: StopFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFlowCommandOutput) => void
  ): void;
  public stopFlow(
    args: StopFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopFlowCommandOutput) => void),
    cb?: (err: any, data?: StopFlowCommandOutput) => void
  ): Promise<StopFlowCommandOutput> | void {
    const command = new StopFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Deletes specified tags from a resource.
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates flow
   */
  public updateFlow(args: UpdateFlowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowCommandOutput>;
  public updateFlow(args: UpdateFlowCommandInput, cb: (err: any, data?: UpdateFlowCommandOutput) => void): void;
  public updateFlow(
    args: UpdateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;
  public updateFlow(
    args: UpdateFlowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowCommandOutput) => void
  ): Promise<UpdateFlowCommandOutput> | void {
    const command = new UpdateFlowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * You can change an entitlement's description, subscribers, and encryption. If you change the subscribers, the service will remove the outputs that are are used by the subscribers that are removed.
   */
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowEntitlementCommandOutput>;
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): void;
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): void;
  public updateFlowEntitlement(
    args: UpdateFlowEntitlementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowEntitlementCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowEntitlementCommandOutput) => void
  ): Promise<UpdateFlowEntitlementCommandOutput> | void {
    const command = new UpdateFlowEntitlementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates an existing flow output.
   */
  public updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowOutputCommandOutput>;
  public updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): void;
  public updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): void;
  public updateFlowOutput(
    args: UpdateFlowOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowOutputCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowOutputCommandOutput) => void
  ): Promise<UpdateFlowOutputCommandOutput> | void {
    const command = new UpdateFlowOutputCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Updates the source of a flow.
   */
  public updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFlowSourceCommandOutput>;
  public updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): void;
  public updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): void;
  public updateFlowSource(
    args: UpdateFlowSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFlowSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateFlowSourceCommandOutput) => void
  ): Promise<UpdateFlowSourceCommandOutput> | void {
    const command = new UpdateFlowSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
