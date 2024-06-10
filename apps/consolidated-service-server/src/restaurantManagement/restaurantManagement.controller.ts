import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantManagementService } from "./restaurantManagement.service";
import { RestaurantManagementControllerBase } from "./base/restaurantManagement.controller.base";

@swagger.ApiTags("restaurantManagements")
@common.Controller("restaurantManagements")
export class RestaurantManagementController extends RestaurantManagementControllerBase {
  constructor(
    protected readonly service: RestaurantManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
