import { DeliveryIntegrationUpdateManyWithoutReservationsInput } from "./DeliveryIntegrationUpdateManyWithoutReservationsInput";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";

export type ReservationUpdateInput = {
  deliveryIntegrations?: DeliveryIntegrationUpdateManyWithoutReservationsInput;
  inventory?: InventoryWhereUniqueInput | null;
};
