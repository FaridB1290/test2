import { StringFilter } from "../../util/StringFilter";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type DeliveryIntegrationWhereInput = {
  id?: StringFilter;
  reservation?: ReservationWhereUniqueInput;
};
