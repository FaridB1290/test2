/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { InventoryService } from "../inventory.service";
import { InventoryCreateInput } from "./InventoryCreateInput";
import { InventoryWhereInput } from "./InventoryWhereInput";
import { InventoryWhereUniqueInput } from "./InventoryWhereUniqueInput";
import { InventoryFindManyArgs } from "./InventoryFindManyArgs";
import { InventoryUpdateInput } from "./InventoryUpdateInput";
import { Inventory } from "./Inventory";
import { ReservationFindManyArgs } from "../../reservation/base/ReservationFindManyArgs";
import { Reservation } from "../../reservation/base/Reservation";
import { ReservationWhereUniqueInput } from "../../reservation/base/ReservationWhereUniqueInput";

export class InventoryGrpcControllerBase {
  constructor(protected readonly service: InventoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Inventory })
  @GrpcMethod("InventoryService", "createInventory")
  async createInventory(
    @common.Body() data: InventoryCreateInput
  ): Promise<Inventory> {
    return await this.service.createInventory({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Inventory] })
  @ApiNestedQuery(InventoryFindManyArgs)
  @GrpcMethod("InventoryService", "inventories")
  async inventories(@common.Req() request: Request): Promise<Inventory[]> {
    const args = plainToClass(InventoryFindManyArgs, request.query);
    return this.service.inventories({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Inventory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("InventoryService", "inventory")
  async inventory(
    @common.Param() params: InventoryWhereUniqueInput
  ): Promise<Inventory | null> {
    const result = await this.service.inventory({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Inventory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("InventoryService", "updateInventory")
  async updateInventory(
    @common.Param() params: InventoryWhereUniqueInput,
    @common.Body() data: InventoryUpdateInput
  ): Promise<Inventory | null> {
    try {
      return await this.service.updateInventory({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Inventory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("InventoryService", "deleteInventory")
  async deleteInventory(
    @common.Param() params: InventoryWhereUniqueInput
  ): Promise<Inventory | null> {
    try {
      return await this.service.deleteInventory({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/reservations")
  @ApiNestedQuery(ReservationFindManyArgs)
  @GrpcMethod("InventoryService", "findManyReservations")
  async findManyReservations(
    @common.Req() request: Request,
    @common.Param() params: InventoryWhereUniqueInput
  ): Promise<Reservation[]> {
    const query = plainToClass(ReservationFindManyArgs, request.query);
    const results = await this.service.findReservations(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        inventory: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reservations")
  @GrpcMethod("InventoryService", "connectReservations")
  async connectReservations(
    @common.Param() params: InventoryWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservations: {
        connect: body,
      },
    };
    await this.service.updateInventory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reservations")
  @GrpcMethod("InventoryService", "updateReservations")
  async updateReservations(
    @common.Param() params: InventoryWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservations: {
        set: body,
      },
    };
    await this.service.updateInventory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reservations")
  @GrpcMethod("InventoryService", "disconnectReservations")
  async disconnectReservations(
    @common.Param() params: InventoryWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reservations: {
        disconnect: body,
      },
    };
    await this.service.updateInventory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
