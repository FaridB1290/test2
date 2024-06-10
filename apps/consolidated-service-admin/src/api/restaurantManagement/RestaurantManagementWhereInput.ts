import { CustomerFeedbackListRelationFilter } from "../customerFeedback/CustomerFeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoyaltyProgramListRelationFilter } from "../loyaltyProgram/LoyaltyProgramListRelationFilter";

export type RestaurantManagementWhereInput = {
  customerFeedbacks?: CustomerFeedbackListRelationFilter;
  id?: StringFilter;
  loyaltyPrograms?: LoyaltyProgramListRelationFilter;
};
