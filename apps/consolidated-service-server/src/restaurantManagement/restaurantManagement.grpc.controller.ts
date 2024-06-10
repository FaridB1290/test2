import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RestaurantManagementService } from "./restaurantManagement.service";
import { RestaurantManagementGrpcControllerBase } from "./base/restaurantManagement.grpc.controller.base";

@swagger.ApiTags("restaurantManagements")
@common.Controller("restaurantManagements")
export class RestaurantManagementGrpcController extends RestaurantManagementGrpcControllerBase {
  constructor(protected readonly service: RestaurantManagementService) {
    super(service);
  }
}
