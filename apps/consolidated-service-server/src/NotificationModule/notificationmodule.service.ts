import { Injectable } from "@nestjs/common";
import { NotificationDto } from "../notificationModule/NotificationDto";

@Injectable()
export class NotificationModuleService {
  constructor() {}
  async SendCustomerNotification(args: NotificationDto): Promise<NotificationDto> {
    throw new Error("Not implemented");
  }
  async SendNotification(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
