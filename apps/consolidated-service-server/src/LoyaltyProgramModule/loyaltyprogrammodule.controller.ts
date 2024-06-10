import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LoyaltyProgramModuleService } from "./loyaltyprogrammodule.service";
import { LoyaltyProgramDto } from "../loyaltyProgramModule/LoyaltyProgramDto";

@swagger.ApiTags("loyaltyProgramModules")
@common.Controller("loyaltyProgramModules")
export class LoyaltyProgramModuleController {
  constructor(protected readonly service: LoyaltyProgramModuleService) {}

  @common.Get("/:id/register-loyalty-program")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterLoyaltyProgram(
    @common.Body()
    body: LoyaltyProgramDto
  ): Promise<string> {
        return this.service.RegisterLoyaltyProgram(body);
      }

  @common.Post("/loyalty/register")
  @swagger.ApiOkResponse({
    type: LoyaltyProgramDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterLoyaltyProgramDetails(
    @common.Body()
    body: LoyaltyProgramDto
  ): Promise<LoyaltyProgramDto> {
        return this.service.RegisterLoyaltyProgramDetails(body);
      }
}
