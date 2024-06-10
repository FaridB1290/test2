import { RestaurantManagement } from "../restaurantManagement/RestaurantManagement";

export type LoyaltyProgram = {
  createdAt: Date;
  id: string;
  restaurantManagement?: RestaurantManagement | null;
  updatedAt: Date;
};
