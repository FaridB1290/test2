import { CustomerFeedback } from "../customerFeedback/CustomerFeedback";
import { LoyaltyProgram } from "../loyaltyProgram/LoyaltyProgram";

export type RestaurantManagement = {
  createdAt: Date;
  customerFeedbacks?: Array<CustomerFeedback>;
  id: string;
  loyaltyPrograms?: Array<LoyaltyProgram>;
  updatedAt: Date;
};
