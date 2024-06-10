import { CustomerFeedbackWhereUniqueInput } from "../customerFeedback/CustomerFeedbackWhereUniqueInput";

export type NotificationCreateInput = {
  customerFeedback?: CustomerFeedbackWhereUniqueInput | null;
};
