import { CustomerFeedback } from "../customerFeedback/CustomerFeedback";

export type Notification = {
  createdAt: Date;
  customerFeedback?: CustomerFeedback | null;
  id: string;
  updatedAt: Date;
};
