import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReservationModuleService } from "./reservationmodule.service";
import { ReservationDto } from "../reservationModule/ReservationDto";

@swagger.ApiTags("reservationModules")
@common.Controller("reservationModules")
export class ReservationModuleController {
  constructor(protected readonly service: ReservationModuleService) {}

  @common.Post("/reservation/new")
  @swagger.ApiOkResponse({
    type: ReservationDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNewReservation(
    @common.Body()
    body: string
  ): Promise<ReservationDto> {
        return this.service.CreateNewReservation(body);
      }

  @common.Get("/:id/create-reservation")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateReservation(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateReservation(body);
      }
}
