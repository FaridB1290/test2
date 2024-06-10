import { DeliveryIntegration } from "../deliveryIntegration/DeliveryIntegration";
import { Inventory } from "../inventory/Inventory";

export type Reservation = {
  createdAt: Date;
  deliveryIntegrations?: Array<DeliveryIntegration>;
  id: string;
  inventory?: Inventory | null;
  updatedAt: Date;
};
