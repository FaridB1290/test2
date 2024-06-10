import { Injectable } from "@nestjs/common";
import { RestaurantManagementDto } from "../restaurantManagementModule/RestaurantManagementDto";

@Injectable()
export class RestaurantManagementModuleService {
  constructor() {}
  async ManageRestaurant(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ManageRestaurantOperations(args: RestaurantManagementDto): Promise<RestaurantManagementDto> {
    throw new Error("Not implemented");
  }
}
