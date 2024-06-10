import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotificationModuleService } from "./notificationmodule.service";
import { NotificationDto } from "../notificationModule/NotificationDto";

@swagger.ApiTags("notificationModules")
@common.Controller("notificationModules")
export class NotificationModuleController {
  constructor(protected readonly service: NotificationModuleService) {}

  @common.Post("/notification/send")
  @swagger.ApiOkResponse({
    type: NotificationDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendCustomerNotification(
    @common.Body()
    body: string
  ): Promise<NotificationDto> {
        return this.service.SendCustomerNotification(body);
      }

  @common.Get("/:id/send-notification")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendNotification(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SendNotification(body);
      }
}
