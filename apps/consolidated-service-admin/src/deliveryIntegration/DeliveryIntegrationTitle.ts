import { DeliveryIntegration as TDeliveryIntegration } from "../api/deliveryIntegration/DeliveryIntegration";

export const DELIVERYINTEGRATION_TITLE_FIELD = "id";

export const DeliveryIntegrationTitle = (
  record: TDeliveryIntegration
): string => {
  return record.id?.toString() || String(record.id);
};
