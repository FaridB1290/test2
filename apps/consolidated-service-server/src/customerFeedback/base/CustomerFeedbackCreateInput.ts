/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NotificationCreateNestedManyWithoutCustomerFeedbacksInput } from "./NotificationCreateNestedManyWithoutCustomerFeedbacksInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { RestaurantManagementWhereUniqueInput } from "../../restaurantManagement/base/RestaurantManagementWhereUniqueInput";

@InputType()
class CustomerFeedbackCreateInput {
  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutCustomerFeedbacksInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutCustomerFeedbacksInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutCustomerFeedbacksInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutCustomerFeedbacksInput;

  @ApiProperty({
    required: false,
    type: () => RestaurantManagementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RestaurantManagementWhereUniqueInput)
  @IsOptional()
  @Field(() => RestaurantManagementWhereUniqueInput, {
    nullable: true,
  })
  restaurantManagement?: RestaurantManagementWhereUniqueInput | null;
}

export { CustomerFeedbackCreateInput as CustomerFeedbackCreateInput };
