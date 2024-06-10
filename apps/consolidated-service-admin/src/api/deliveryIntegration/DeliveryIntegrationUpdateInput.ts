import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type DeliveryIntegrationUpdateInput = {
  reservation?: ReservationWhereUniqueInput | null;
};
