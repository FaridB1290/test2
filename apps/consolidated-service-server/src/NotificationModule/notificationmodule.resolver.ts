import * as graphql from "@nestjs/graphql";
import { NotificationDto } from "../notificationModule/NotificationDto";
import { NotificationModuleService } from "./notificationmodule.service";

export class NotificationModuleResolver {
  constructor(protected readonly service: NotificationModuleService) {}

  @graphql.Mutation(() => NotificationDto)
  async SendCustomerNotification(
    @graphql.Args()
    args: NotificationDto
  ): Promise<NotificationDto> {
    return this.service.SendCustomerNotification(args);
  }

  @graphql.Query(() => String)
  async SendNotification(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendNotification(args);
  }
}
