import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { RestaurantManagementWhereUniqueInput } from "../restaurantManagement/RestaurantManagementWhereUniqueInput";

export type CustomerFeedbackWhereInput = {
  id?: StringFilter;
  notifications?: NotificationListRelationFilter;
  restaurantManagement?: RestaurantManagementWhereUniqueInput;
};
