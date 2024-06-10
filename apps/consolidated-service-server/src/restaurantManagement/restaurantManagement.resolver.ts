import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantManagementResolverBase } from "./base/restaurantManagement.resolver.base";
import { RestaurantManagement } from "./base/RestaurantManagement";
import { RestaurantManagementService } from "./restaurantManagement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantManagement)
export class RestaurantManagementResolver extends RestaurantManagementResolverBase {
  constructor(
    protected readonly service: RestaurantManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
