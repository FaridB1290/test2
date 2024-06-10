import { ReservationCreateNestedManyWithoutInventoriesInput } from "./ReservationCreateNestedManyWithoutInventoriesInput";

export type InventoryCreateInput = {
  reservations?: ReservationCreateNestedManyWithoutInventoriesInput;
};
