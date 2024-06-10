import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DeliveryIntegrationTitle } from "../deliveryIntegration/DeliveryIntegrationTitle";
import { InventoryTitle } from "../inventory/InventoryTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="deliveryIntegrations"
          reference="DeliveryIntegration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryIntegrationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="inventory.id"
          reference="Inventory"
          label="Inventory"
        >
          <SelectInput optionText={InventoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
