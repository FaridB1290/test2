import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeliveryIntegrationModuleBase } from "./base/deliveryIntegration.module.base";
import { DeliveryIntegrationService } from "./deliveryIntegration.service";
import { DeliveryIntegrationController } from "./deliveryIntegration.controller";
import { DeliveryIntegrationGrpcController } from "./deliveryIntegration.grpc.controller";
import { DeliveryIntegrationResolver } from "./deliveryIntegration.resolver";

@Module({
  imports: [DeliveryIntegrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    DeliveryIntegrationController,
    DeliveryIntegrationGrpcController,
  ],
  providers: [DeliveryIntegrationService, DeliveryIntegrationResolver],
  exports: [DeliveryIntegrationService],
})
export class DeliveryIntegrationModule {}
