import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantManagementServiceBase } from "./base/restaurantManagement.service.base";

@Injectable()
export class RestaurantManagementService extends RestaurantManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
