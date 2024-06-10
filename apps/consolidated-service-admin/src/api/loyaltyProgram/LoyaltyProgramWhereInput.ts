import { StringFilter } from "../../util/StringFilter";
import { RestaurantManagementWhereUniqueInput } from "../restaurantManagement/RestaurantManagementWhereUniqueInput";

export type LoyaltyProgramWhereInput = {
  id?: StringFilter;
  restaurantManagement?: RestaurantManagementWhereUniqueInput;
};
