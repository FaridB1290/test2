import { Module } from "@nestjs/common";
import { ReservationModuleService } from "./reservationmodule.service";
import { ReservationModuleController } from "./reservationmodule.controller";
import { ReservationModuleResolver } from "./reservationmodule.resolver";

@Module({
  controllers: [ReservationModuleController],
  providers: [ReservationModuleService, ReservationModuleResolver],
  exports: [ReservationModuleService],
})
export class ReservationModuleModule {}
