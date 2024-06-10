import { Module } from "@nestjs/common";
import { InventoryModuleService } from "./inventorymodule.service";
import { InventoryModuleController } from "./inventorymodule.controller";
import { InventoryModuleResolver } from "./inventorymodule.resolver";

@Module({
  controllers: [InventoryModuleController],
  providers: [InventoryModuleService, InventoryModuleResolver],
  exports: [InventoryModuleService],
})
export class InventoryModuleModule {}
