import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantManagementModuleBase } from "./base/restaurantManagement.module.base";
import { RestaurantManagementService } from "./restaurantManagement.service";
import { RestaurantManagementController } from "./restaurantManagement.controller";
import { RestaurantManagementGrpcController } from "./restaurantManagement.grpc.controller";
import { RestaurantManagementResolver } from "./restaurantManagement.resolver";

@Module({
  imports: [RestaurantManagementModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    RestaurantManagementController,
    RestaurantManagementGrpcController,
  ],
  providers: [RestaurantManagementService, RestaurantManagementResolver],
  exports: [RestaurantManagementService],
})
export class RestaurantManagementModule {}
