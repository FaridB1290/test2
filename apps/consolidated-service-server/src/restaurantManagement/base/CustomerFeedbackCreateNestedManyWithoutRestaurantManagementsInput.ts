/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CustomerFeedbackWhereUniqueInput } from "../../customerFeedback/base/CustomerFeedbackWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CustomerFeedbackCreateNestedManyWithoutRestaurantManagementsInput {
  @Field(() => [CustomerFeedbackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerFeedbackWhereUniqueInput],
  })
  connect?: Array<CustomerFeedbackWhereUniqueInput>;
}

export { CustomerFeedbackCreateNestedManyWithoutRestaurantManagementsInput as CustomerFeedbackCreateNestedManyWithoutRestaurantManagementsInput };