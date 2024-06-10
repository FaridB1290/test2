import { SortOrder } from "../../util/SortOrder";

export type CustomerFeedbackOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  restaurantManagementId?: SortOrder;
  updatedAt?: SortOrder;
};
