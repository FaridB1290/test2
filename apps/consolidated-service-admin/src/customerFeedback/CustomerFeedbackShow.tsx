import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CUSTOMERFEEDBACK_TITLE_FIELD } from "./CustomerFeedbackTitle";
import { RESTAURANTMANAGEMENT_TITLE_FIELD } from "../restaurantManagement/RestaurantManagementTitle";

export const CustomerFeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="RestaurantManagement"
          source="restaurantmanagement.id"
          reference="RestaurantManagement"
        >
          <TextField source={RESTAURANTMANAGEMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Notification"
          target="customerFeedbackId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerFeedback"
              source="customerfeedback.id"
              reference="CustomerFeedback"
            >
              <TextField source={CUSTOMERFEEDBACK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
