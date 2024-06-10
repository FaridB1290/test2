import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RestaurantManagementTitle } from "../restaurantManagement/RestaurantManagementTitle";

export const LoyaltyProgramCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="restaurantManagement.id"
          reference="RestaurantManagement"
          label="RestaurantManagement"
        >
          <SelectInput optionText={RestaurantManagementTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
