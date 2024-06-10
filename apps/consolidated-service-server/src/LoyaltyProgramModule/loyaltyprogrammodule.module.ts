import { Module } from "@nestjs/common";
import { LoyaltyProgramModuleService } from "./loyaltyprogrammodule.service";
import { LoyaltyProgramModuleController } from "./loyaltyprogrammodule.controller";
import { LoyaltyProgramModuleResolver } from "./loyaltyprogrammodule.resolver";

@Module({
  controllers: [LoyaltyProgramModuleController],
  providers: [LoyaltyProgramModuleService, LoyaltyProgramModuleResolver],
  exports: [LoyaltyProgramModuleService],
})
export class LoyaltyProgramModuleModule {}
