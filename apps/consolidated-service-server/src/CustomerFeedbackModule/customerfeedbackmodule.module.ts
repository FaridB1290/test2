import { Module } from "@nestjs/common";
import { CustomerFeedbackModuleService } from "./customerfeedbackmodule.service";
import { CustomerFeedbackModuleController } from "./customerfeedbackmodule.controller";
import { CustomerFeedbackModuleResolver } from "./customerfeedbackmodule.resolver";

@Module({
  controllers: [CustomerFeedbackModuleController],
  providers: [CustomerFeedbackModuleService, CustomerFeedbackModuleResolver],
  exports: [CustomerFeedbackModuleService],
})
export class CustomerFeedbackModuleModule {}
