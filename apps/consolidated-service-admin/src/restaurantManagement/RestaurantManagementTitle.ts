import { RestaurantManagement as TRestaurantManagement } from "../api/restaurantManagement/RestaurantManagement";

export const RESTAURANTMANAGEMENT_TITLE_FIELD = "id";

export const RestaurantManagementTitle = (
  record: TRestaurantManagement
): string => {
  return record.id?.toString() || String(record.id);
};
