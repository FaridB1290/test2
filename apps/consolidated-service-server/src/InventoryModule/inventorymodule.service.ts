import { Injectable } from "@nestjs/common";
import { InventoryDto } from "../inventoryModule/InventoryDto";

@Injectable()
export class InventoryModuleService {
  constructor() {}
  async CreateInventoryItem(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateNewInventoryItem(args: InventoryDto): Promise<InventoryDto> {
    throw new Error("Not implemented");
  }
}
