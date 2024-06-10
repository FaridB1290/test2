import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryIntegrationServiceBase } from "./base/deliveryIntegration.service.base";

@Injectable()
export class DeliveryIntegrationService extends DeliveryIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
