import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeliveryIntegrationResolverBase } from "./base/deliveryIntegration.resolver.base";
import { DeliveryIntegration } from "./base/DeliveryIntegration";
import { DeliveryIntegrationService } from "./deliveryIntegration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeliveryIntegration)
export class DeliveryIntegrationResolver extends DeliveryIntegrationResolverBase {
  constructor(
    protected readonly service: DeliveryIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
