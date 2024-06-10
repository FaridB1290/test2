import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RestaurantManagementTitle } from "../restaurantManagement/RestaurantManagementTitle";

export const LoyaltyProgramEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="restaurantManagement.id"
          reference="RestaurantManagement"
          label="RestaurantManagement"
        >
          <SelectInput optionText={RestaurantManagementTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
