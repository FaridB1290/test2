import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerFeedbackService } from "./customerFeedback.service";
import { CustomerFeedbackGrpcControllerBase } from "./base/customerFeedback.grpc.controller.base";

@swagger.ApiTags("customerFeedbacks")
@common.Controller("customerFeedbacks")
export class CustomerFeedbackGrpcController extends CustomerFeedbackGrpcControllerBase {
  constructor(protected readonly service: CustomerFeedbackService) {
    super(service);
  }
}
