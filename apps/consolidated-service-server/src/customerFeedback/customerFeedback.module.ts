import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerFeedbackModuleBase } from "./base/customerFeedback.module.base";
import { CustomerFeedbackService } from "./customerFeedback.service";
import { CustomerFeedbackController } from "./customerFeedback.controller";
import { CustomerFeedbackGrpcController } from "./customerFeedback.grpc.controller";
import { CustomerFeedbackResolver } from "./customerFeedback.resolver";

@Module({
  imports: [CustomerFeedbackModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerFeedbackController, CustomerFeedbackGrpcController],
  providers: [CustomerFeedbackService, CustomerFeedbackResolver],
  exports: [CustomerFeedbackService],
})
export class CustomerFeedbackModule {}
