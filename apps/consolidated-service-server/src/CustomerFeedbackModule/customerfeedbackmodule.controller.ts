import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CustomerFeedbackModuleService } from "./customerfeedbackmodule.service";
import { CustomerFeedbackDto } from "../customerFeedbackModule/CustomerFeedbackDto";

@swagger.ApiTags("customerFeedbackModules")
@common.Controller("customerFeedbackModules")
export class CustomerFeedbackModuleController {
  constructor(protected readonly service: CustomerFeedbackModuleService) {}

  @common.Get("/:id/create-customer-feedback")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCustomerFeedback(
    @common.Body()
    body: CustomerFeedbackDto
  ): Promise<string> {
        return this.service.CreateCustomerFeedback(body);
      }

  @common.Post("/feedback/new")
  @swagger.ApiOkResponse({
    type: CustomerFeedbackDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewCustomerFeedback(
    @common.Body()
    body: CustomerFeedbackDto
  ): Promise<CustomerFeedbackDto> {
        return this.service.CreateNewCustomerFeedback(body);
      }
}
