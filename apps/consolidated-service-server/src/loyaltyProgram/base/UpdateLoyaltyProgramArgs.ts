/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LoyaltyProgramWhereUniqueInput } from "./LoyaltyProgramWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LoyaltyProgramUpdateInput } from "./LoyaltyProgramUpdateInput";

@ArgsType()
class UpdateLoyaltyProgramArgs {
  @ApiProperty({
    required: true,
    type: () => LoyaltyProgramWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LoyaltyProgramWhereUniqueInput)
  @Field(() => LoyaltyProgramWhereUniqueInput, { nullable: false })
  where!: LoyaltyProgramWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LoyaltyProgramUpdateInput,
  })
  @ValidateNested()
  @Type(() => LoyaltyProgramUpdateInput)
  @Field(() => LoyaltyProgramUpdateInput, { nullable: false })
  data!: LoyaltyProgramUpdateInput;
}

export { UpdateLoyaltyProgramArgs as UpdateLoyaltyProgramArgs };
