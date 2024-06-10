import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  customerFeedbackId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
