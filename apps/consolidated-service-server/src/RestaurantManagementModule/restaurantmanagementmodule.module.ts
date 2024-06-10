import { Module } from "@nestjs/common";
import { RestaurantManagementModuleService } from "./restaurantmanagementmodule.service";
import { RestaurantManagementModuleController } from "./restaurantmanagementmodule.controller";
import { RestaurantManagementModuleResolver } from "./restaurantmanagementmodule.resolver";

@Module({
  controllers: [RestaurantManagementModuleController],
  providers: [RestaurantManagementModuleService, RestaurantManagementModuleResolver],
  exports: [RestaurantManagementModuleService],
})
export class RestaurantManagementModuleModule {}
