import { DeliveryIntegrationListRelationFilter } from "../deliveryIntegration/DeliveryIntegrationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";

export type ReservationWhereInput = {
  deliveryIntegrations?: DeliveryIntegrationListRelationFilter;
  id?: StringFilter;
  inventory?: InventoryWhereUniqueInput;
};
