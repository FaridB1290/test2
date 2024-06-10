import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type InventoryWhereInput = {
  id?: StringFilter;
  reservations?: ReservationListRelationFilter;
};
