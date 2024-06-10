import { RestaurantManagementWhereInput } from "./RestaurantManagementWhereInput";
import { RestaurantManagementOrderByInput } from "./RestaurantManagementOrderByInput";

export type RestaurantManagementFindManyArgs = {
  where?: RestaurantManagementWhereInput;
  orderBy?: Array<RestaurantManagementOrderByInput>;
  skip?: number;
  take?: number;
};
