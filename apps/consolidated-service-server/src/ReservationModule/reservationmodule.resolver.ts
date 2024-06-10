import * as graphql from "@nestjs/graphql";
import { ReservationDto } from "../reservationModule/ReservationDto";
import { ReservationModuleService } from "./reservationmodule.service";

export class ReservationModuleResolver {
  constructor(protected readonly service: ReservationModuleService) {}

  @graphql.Mutation(() => ReservationDto)
  async CreateNewReservation(
    @graphql.Args()
    args: ReservationDto
  ): Promise<ReservationDto> {
    return this.service.CreateNewReservation(args);
  }

  @graphql.Query(() => String)
  async CreateReservation(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateReservation(args);
  }
}
