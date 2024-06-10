import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliveryIntegrationService } from "./deliveryIntegration.service";
import { DeliveryIntegrationControllerBase } from "./base/deliveryIntegration.controller.base";

@swagger.ApiTags("deliveryIntegrations")
@common.Controller("deliveryIntegrations")
export class DeliveryIntegrationController extends DeliveryIntegrationControllerBase {
  constructor(
    protected readonly service: DeliveryIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
