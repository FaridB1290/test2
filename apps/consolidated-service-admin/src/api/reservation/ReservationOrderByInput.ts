import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inventoryId?: SortOrder;
  updatedAt?: SortOrder;
};
