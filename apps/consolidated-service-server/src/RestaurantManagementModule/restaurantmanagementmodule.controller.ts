import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RestaurantManagementModuleService } from "./restaurantmanagementmodule.service";
import { RestaurantManagementDto } from "../restaurantManagementModule/RestaurantManagementDto";

@swagger.ApiTags("restaurantManagementModules")
@common.Controller("restaurantManagementModules")
export class RestaurantManagementModuleController {
  constructor(protected readonly service: RestaurantManagementModuleService) {}

  @common.Get("/:id/manage-restaurant")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageRestaurant(
    @common.Body()
    body: RestaurantManagementDto
  ): Promise<string> {
        return this.service.ManageRestaurant(body);
      }

  @common.Post("/restaurant/manage")
  @swagger.ApiOkResponse({
    type: RestaurantManagementDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageRestaurantOperations(
    @common.Body()
    body: RestaurantManagementDto
  ): Promise<RestaurantManagementDto> {
        return this.service.ManageRestaurantOperations(body);
      }
}
