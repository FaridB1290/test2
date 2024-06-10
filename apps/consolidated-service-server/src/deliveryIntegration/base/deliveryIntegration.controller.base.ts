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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DeliveryIntegrationService } from "../deliveryIntegration.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeliveryIntegrationCreateInput } from "./DeliveryIntegrationCreateInput";
import { DeliveryIntegration } from "./DeliveryIntegration";
import { DeliveryIntegrationFindManyArgs } from "./DeliveryIntegrationFindManyArgs";
import { DeliveryIntegrationWhereUniqueInput } from "./DeliveryIntegrationWhereUniqueInput";
import { DeliveryIntegrationUpdateInput } from "./DeliveryIntegrationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DeliveryIntegrationControllerBase {
  constructor(
    protected readonly service: DeliveryIntegrationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeliveryIntegration })
  @nestAccessControl.UseRoles({
    resource: "DeliveryIntegration",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DeliveryIntegration] })
  @ApiNestedQuery(DeliveryIntegrationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DeliveryIntegration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeliveryIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DeliveryIntegration",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DeliveryIntegration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DeliveryIntegration",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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
  @nestAccessControl.UseRoles({
    resource: "DeliveryIntegration",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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