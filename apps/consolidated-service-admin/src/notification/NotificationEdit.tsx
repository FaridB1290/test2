import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomerFeedbackTitle } from "../customerFeedback/CustomerFeedbackTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customerFeedback.id"
          reference="CustomerFeedback"
          label="CustomerFeedback"
        >
          <SelectInput optionText={CustomerFeedbackTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
