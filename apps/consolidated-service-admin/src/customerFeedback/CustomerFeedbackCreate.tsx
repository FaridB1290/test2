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

import { NotificationTitle } from "../notification/NotificationTitle";
import { RestaurantManagementTitle } from "../restaurantManagement/RestaurantManagementTitle";

export const CustomerFeedbackCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
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
