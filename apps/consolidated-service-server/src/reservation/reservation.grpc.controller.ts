import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReservationService } from "./reservation.service";
import { ReservationGrpcControllerBase } from "./base/reservation.grpc.controller.base";

@swagger.ApiTags("reservations")
@common.Controller("reservations")
export class ReservationGrpcController extends ReservationGrpcControllerBase {
  constructor(protected readonly service: ReservationService) {
    super(service);
  }
}
