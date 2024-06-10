import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InventoryModuleBase } from "./base/inventory.module.base";
import { InventoryService } from "./inventory.service";
import { InventoryController } from "./inventory.controller";
import { InventoryGrpcController } from "./inventory.grpc.controller";
import { InventoryResolver } from "./inventory.resolver";

@Module({
  imports: [InventoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [InventoryController, InventoryGrpcController],
  providers: [InventoryService, InventoryResolver],
  exports: [InventoryService],
})
export class InventoryModule {}
