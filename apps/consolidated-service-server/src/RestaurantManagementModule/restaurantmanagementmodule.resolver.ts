import * as graphql from "@nestjs/graphql";
import { RestaurantManagementDto } from "../restaurantManagementModule/RestaurantManagementDto";
import { RestaurantManagementModuleService } from "./restaurantmanagementmodule.service";

export class RestaurantManagementModuleResolver {
  constructor(protected readonly service: RestaurantManagementModuleService) {}

  @graphql.Query(() => String)
  async ManageRestaurant(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ManageRestaurant(args);
  }

  @graphql.Mutation(() => RestaurantManagementDto)
  async ManageRestaurantOperations(
    @graphql.Args()
    args: RestaurantManagementDto
  ): Promise<RestaurantManagementDto> {
    return this.service.ManageRestaurantOperations(args);
  }
}
