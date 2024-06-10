import { Injectable } from "@nestjs/common";
import { ReservationDto } from "../reservationModule/ReservationDto";

@Injectable()
export class ReservationModuleService {
  constructor() {}
  async CreateNewReservation(args: ReservationDto): Promise<ReservationDto> {
    throw new Error("Not implemented");
  }
  async CreateReservation(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
