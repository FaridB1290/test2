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
import { DeliveryIntegrationService } from "../deliveryIntegration.service";
import { DeliveryIntegrationCreateInput } from "./DeliveryIntegrationCreateInput";
import { DeliveryIntegrationWhereInput } from "./DeliveryIntegrationWhereInput";
import { DeliveryIntegrationWhereUniqueInput } from "./DeliveryIntegrationWhereUniqueInput";
import { DeliveryIntegrationFindManyArgs } from "./DeliveryIntegrationFindManyArgs";
import { DeliveryIntegrationUpdateInput } from "./DeliveryIntegrationUpdateInput";
import { DeliveryIntegration } from "./DeliveryIntegration";

export class DeliveryIntegrationGrpcControllerBase {
  constructor(protected readonly service: DeliveryIntegrationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeliveryIntegration })
  @GrpcMethod("DeliveryIntegrationService", "createDeliveryIntegration")
  async createDeliveryIntegration(
    @common.Body() data: DeliveryIntegrationCreateInput
  ): Promise<DeliveryIntegration> {
    return await this.service.createDeliveryIntegration({
      data: {
        ...data,

        reservation: data.reservation
          ? {
              connect: data.reservation,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        reservation: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DeliveryIntegration] })
  @ApiNestedQuery(DeliveryIntegrationFindManyArgs)
  @GrpcMethod("DeliveryIntegrationService", "deliveryIntegrations")
  async deliveryIntegrations(
    @common.Req() request: Request
  ): Promise<DeliveryIntegration[]> {
    const args = plainToClass(DeliveryIntegrationFindManyArgs, request.query);
    return this.service.deliveryIntegrations({
      ...args,
      select: {
        createdAt: true,
        id: true,

        reservation: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeliveryIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DeliveryIntegrationService", "deliveryIntegration")
  async deliveryIntegration(
    @common.Param() params: DeliveryIntegrationWhereUniqueInput
  ): Promise<DeliveryIntegration | null> {
    const result = await this.service.deliveryIntegration({
      where: params,
      select: {
        createdAt: true,
        id: true,

        reservation: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: DeliveryIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DeliveryIntegrationService", "updateDeliveryIntegration")
  async updateDeliveryIntegration(
    @common.Param() params: DeliveryIntegrationWhereUniqueInput,
    @common.Body() data: DeliveryIntegrationUpdateInput
  ): Promise<DeliveryIntegration | null> {
    try {
      return await this.service.updateDeliveryIntegration({
        where: params,
        data: {
          ...data,

          reservation: data.reservation
            ? {
                connect: data.reservation,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          reservation: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: DeliveryIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DeliveryIntegrationService", "deleteDeliveryIntegration")
  async deleteDeliveryIntegration(
    @common.Param() params: DeliveryIntegrationWhereUniqueInput
  ): Promise<DeliveryIntegration | null> {
    try {
      return await this.service.deleteDeliveryIntegration({
        where: params,
        select: {
          createdAt: true,
          id: true,

          reservation: {
            select: {
              id: true,
            },
          },

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
}