import * as graphql from "@nestjs/graphql";
import { InventoryDto } from "../inventoryModule/InventoryDto";
import { InventoryModuleService } from "./inventorymodule.service";

export class InventoryModuleResolver {
  constructor(protected readonly service: InventoryModuleService) {}

  @graphql.Query(() => String)
  async CreateInventoryItem(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateInventoryItem(args);
  }

  @graphql.Mutation(() => InventoryDto)
  async CreateNewInventoryItem(
    @graphql.Args()
    args: InventoryDto
  ): Promise<InventoryDto> {
    return this.service.CreateNewInventoryItem(args);
  }
}
