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
import { LoyaltyProgramService } from "../loyaltyProgram.service";
import { LoyaltyProgramCreateInput } from "./LoyaltyProgramCreateInput";
import { LoyaltyProgramWhereInput } from "./LoyaltyProgramWhereInput";
import { LoyaltyProgramWhereUniqueInput } from "./LoyaltyProgramWhereUniqueInput";
import { LoyaltyProgramFindManyArgs } from "./LoyaltyProgramFindManyArgs";
import { LoyaltyProgramUpdateInput } from "./LoyaltyProgramUpdateInput";
import { LoyaltyProgram } from "./LoyaltyProgram";

export class LoyaltyProgramGrpcControllerBase {
  constructor(protected readonly service: LoyaltyProgramService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LoyaltyProgram })
  @GrpcMethod("LoyaltyProgramService", "createLoyaltyProgram")
  async createLoyaltyProgram(
    @common.Body() data: LoyaltyProgramCreateInput
  ): Promise<LoyaltyProgram> {
    return await this.service.createLoyaltyProgram({
      data: {
        ...data,

        restaurantManagement: data.restaurantManagement
          ? {
              connect: data.restaurantManagement,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        restaurantManagement: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LoyaltyProgram] })
  @ApiNestedQuery(LoyaltyProgramFindManyArgs)
  @GrpcMethod("LoyaltyProgramService", "loyaltyPrograms")
  async loyaltyPrograms(
    @common.Req() request: Request
  ): Promise<LoyaltyProgram[]> {
    const args = plainToClass(LoyaltyProgramFindManyArgs, request.query);
    return this.service.loyaltyPrograms({
      ...args,
      select: {
        createdAt: true,
        id: true,

        restaurantManagement: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LoyaltyProgram })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("LoyaltyProgramService", "loyaltyProgram")
  async loyaltyProgram(
    @common.Param() params: LoyaltyProgramWhereUniqueInput
  ): Promise<LoyaltyProgram | null> {
    const result = await this.service.loyaltyProgram({
      where: params,
      select: {
        createdAt: true,
        id: true,

        restaurantManagement: {
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
  @swagger.ApiOkResponse({ type: LoyaltyProgram })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("LoyaltyProgramService", "updateLoyaltyProgram")
  async updateLoyaltyProgram(
    @common.Param() params: LoyaltyProgramWhereUniqueInput,
    @common.Body() data: LoyaltyProgramUpdateInput
  ): Promise<LoyaltyProgram | null> {
    try {
      return await this.service.updateLoyaltyProgram({
        where: params,
        data: {
          ...data,

          restaurantManagement: data.restaurantManagement
            ? {
                connect: data.restaurantManagement,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          restaurantManagement: {
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
  @swagger.ApiOkResponse({ type: LoyaltyProgram })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("LoyaltyProgramService", "deleteLoyaltyProgram")
  async deleteLoyaltyProgram(
    @common.Param() params: LoyaltyProgramWhereUniqueInput
  ): Promise<LoyaltyProgram | null> {
    try {
      return await this.service.deleteLoyaltyProgram({
        where: params,
        select: {
          createdAt: true,
          id: true,

          restaurantManagement: {
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
