import { DeliveryIntegrationCreateNestedManyWithoutReservationsInput } from "./DeliveryIntegrationCreateNestedManyWithoutReservationsInput";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";

export type ReservationCreateInput = {
  deliveryIntegrations?: DeliveryIntegrationCreateNestedManyWithoutReservationsInput;
  inventory?: InventoryWhereUniqueInput | null;
};
