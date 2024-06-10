/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DeliveryIntegrationWhereUniqueInput } from "../../deliveryIntegration/base/DeliveryIntegrationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DeliveryIntegrationUpdateManyWithoutReservationsInput {
  @Field(() => [DeliveryIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeliveryIntegrationWhereUniqueInput],
  })
  connect?: Array<DeliveryIntegrationWhereUniqueInput>;

  @Field(() => [DeliveryIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeliveryIntegrationWhereUniqueInput],
  })
  disconnect?: Array<DeliveryIntegrationWhereUniqueInput>;

  @Field(() => [DeliveryIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DeliveryIntegrationWhereUniqueInput],
  })
  set?: Array<DeliveryIntegrationWhereUniqueInput>;
}

export { DeliveryIntegrationUpdateManyWithoutReservationsInput as DeliveryIntegrationUpdateManyWithoutReservationsInput };