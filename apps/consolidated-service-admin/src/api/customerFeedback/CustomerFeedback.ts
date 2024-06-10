import { Notification } from "../notification/Notification";
import { RestaurantManagement } from "../restaurantManagement/RestaurantManagement";

export type CustomerFeedback = {
  createdAt: Date;
  id: string;
  notifications?: Array<Notification>;
  restaurantManagement?: RestaurantManagement | null;
  updatedAt: Date;
};
