import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type DeliveryIntegrationCreateInput = {
  reservation?: ReservationWhereUniqueInput | null;
};
