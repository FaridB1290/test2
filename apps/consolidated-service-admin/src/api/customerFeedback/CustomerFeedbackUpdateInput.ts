import { NotificationUpdateManyWithoutCustomerFeedbacksInput } from "./NotificationUpdateManyWithoutCustomerFeedbacksInput";
import { RestaurantManagementWhereUniqueInput } from "../restaurantManagement/RestaurantManagementWhereUniqueInput";

export type CustomerFeedbackUpdateInput = {
  notifications?: NotificationUpdateManyWithoutCustomerFeedbacksInput;
  restaurantManagement?: RestaurantManagementWhereUniqueInput | null;
};
