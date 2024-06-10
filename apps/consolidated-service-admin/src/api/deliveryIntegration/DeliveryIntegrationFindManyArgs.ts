import { DeliveryIntegrationWhereInput } from "./DeliveryIntegrationWhereInput";
import { DeliveryIntegrationOrderByInput } from "./DeliveryIntegrationOrderByInput";

export type DeliveryIntegrationFindManyArgs = {
  where?: DeliveryIntegrationWhereInput;
  orderBy?: Array<DeliveryIntegrationOrderByInput>;
  skip?: number;
  take?: number;
};
