import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { CustomerFeedbackTitle } from "../customerFeedback/CustomerFeedbackTitle";
import { LoyaltyProgramTitle } from "../loyaltyProgram/LoyaltyProgramTitle";

export const RestaurantManagementEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="customerFeedbacks"
          reference="CustomerFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerFeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="loyaltyPrograms"
          reference="LoyaltyProgram"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LoyaltyProgramTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
