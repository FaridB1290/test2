import { CustomerFeedbackWhereUniqueInput } from "../customerFeedback/CustomerFeedbackWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type NotificationWhereInput = {
  customerFeedback?: CustomerFeedbackWhereUniqueInput;
  id?: StringFilter;
};
