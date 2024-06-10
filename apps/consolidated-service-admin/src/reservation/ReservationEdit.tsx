import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DeliveryIntegrationTitle } from "../deliveryIntegration/DeliveryIntegrationTitle";
import { InventoryTitle } from "../inventory/InventoryTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
