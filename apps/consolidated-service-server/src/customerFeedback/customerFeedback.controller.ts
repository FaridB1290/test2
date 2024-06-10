import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerFeedbackService } from "./customerFeedback.service";
import { CustomerFeedbackControllerBase } from "./base/customerFeedback.controller.base";

@swagger.ApiTags("customerFeedbacks")
@common.Controller("customerFeedbacks")
export class CustomerFeedbackController extends CustomerFeedbackControllerBase {
  constructor(
    protected readonly service: CustomerFeedbackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
