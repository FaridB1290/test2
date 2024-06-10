import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InventoryModuleService } from "./inventorymodule.service";
import { InventoryDto } from "../inventoryModule/InventoryDto";

@swagger.ApiTags("inventoryModules")
@common.Controller("inventoryModules")
export class InventoryModuleController {
  constructor(protected readonly service: InventoryModuleService) {}

  @common.Get("/:id/create-inventory-item")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateInventoryItem(
    @common.Body()
    body: InventoryDto
  ): Promise<string> {
        return this.service.CreateInventoryItem(body);
      }

  @common.Post("/inventory/new")
  @swagger.ApiOkResponse({
    type: InventoryDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewInventoryItem(
    @common.Body()
    body: InventoryDto
  ): Promise<InventoryDto> {
        return this.service.CreateNewInventoryItem(body);
      }
}
