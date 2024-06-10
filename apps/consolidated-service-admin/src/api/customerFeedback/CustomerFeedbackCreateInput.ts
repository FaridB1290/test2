import { NotificationCreateNestedManyWithoutCustomerFeedbacksInput } from "./NotificationCreateNestedManyWithoutCustomerFeedbacksInput";
import { RestaurantManagementWhereUniqueInput } from "../restaurantManagement/RestaurantManagementWhereUniqueInput";

export type CustomerFeedbackCreateInput = {
  notifications?: NotificationCreateNestedManyWithoutCustomerFeedbacksInput;
  restaurantManagement?: RestaurantManagementWhereUniqueInput | null;
};
