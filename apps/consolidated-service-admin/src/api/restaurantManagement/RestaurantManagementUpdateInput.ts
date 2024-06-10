import { CustomerFeedbackUpdateManyWithoutRestaurantManagementsInput } from "./CustomerFeedbackUpdateManyWithoutRestaurantManagementsInput";
import { LoyaltyProgramUpdateManyWithoutRestaurantManagementsInput } from "./LoyaltyProgramUpdateManyWithoutRestaurantManagementsInput";

export type RestaurantManagementUpdateInput = {
  customerFeedbacks?: CustomerFeedbackUpdateManyWithoutRestaurantManagementsInput;
  loyaltyPrograms?: LoyaltyProgramUpdateManyWithoutRestaurantManagementsInput;
};
