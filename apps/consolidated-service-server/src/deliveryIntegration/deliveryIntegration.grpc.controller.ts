import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryIntegrationService } from "./deliveryIntegration.service";
import { DeliveryIntegrationGrpcControllerBase } from "./base/deliveryIntegration.grpc.controller.base";

@swagger.ApiTags("deliveryIntegrations")
@common.Controller("deliveryIntegrations")
export class DeliveryIntegrationGrpcController extends DeliveryIntegrationGrpcControllerBase {
  constructor(protected readonly service: DeliveryIntegrationService) {
    super(service);
  }
}
