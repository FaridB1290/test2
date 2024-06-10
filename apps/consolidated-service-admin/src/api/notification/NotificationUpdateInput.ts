import { CustomerFeedbackWhereUniqueInput } from "../customerFeedback/CustomerFeedbackWhereUniqueInput";

export type NotificationUpdateInput = {
  customerFeedback?: CustomerFeedbackWhereUniqueInput | null;
};
