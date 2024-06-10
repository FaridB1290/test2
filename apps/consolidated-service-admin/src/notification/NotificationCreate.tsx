import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerFeedbackTitle } from "../customerFeedback/CustomerFeedbackTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customerFeedback.id"
          reference="CustomerFeedback"
          label="CustomerFeedback"
        >
          <SelectInput optionText={CustomerFeedbackTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
