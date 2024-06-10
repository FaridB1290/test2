import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InventoryService } from "./inventory.service";
import { InventoryGrpcControllerBase } from "./base/inventory.grpc.controller.base";

@swagger.ApiTags("inventories")
@common.Controller("inventories")
export class InventoryGrpcController extends InventoryGrpcControllerBase {
  constructor(protected readonly service: InventoryService) {
    super(service);
  }
}
