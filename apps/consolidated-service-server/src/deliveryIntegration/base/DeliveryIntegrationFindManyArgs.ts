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
import { DeliveryIntegrationWhereInput } from "./DeliveryIntegrationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DeliveryIntegrationOrderByInput } from "./DeliveryIntegrationOrderByInput";

@ArgsType()
class DeliveryIntegrationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DeliveryIntegrationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DeliveryIntegrationWhereInput, { nullable: true })
  @Type(() => DeliveryIntegrationWhereInput)
  where?: DeliveryIntegrationWhereInput;

  @ApiProperty({
    required: false,
    type: [DeliveryIntegrationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DeliveryIntegrationOrderByInput], { nullable: true })
  @Type(() => DeliveryIntegrationOrderByInput)
  orderBy?: Array<DeliveryIntegrationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DeliveryIntegrationFindManyArgs as DeliveryIntegrationFindManyArgs };