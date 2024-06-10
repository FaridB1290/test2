import * as graphql from "@nestjs/graphql";
import { CustomerFeedbackDto } from "../customerFeedbackModule/CustomerFeedbackDto";
import { CustomerFeedbackModuleService } from "./customerfeedbackmodule.service";

export class CustomerFeedbackModuleResolver {
  constructor(protected readonly service: CustomerFeedbackModuleService) {}

  @graphql.Query(() => String)
  async CreateCustomerFeedback(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateCustomerFeedback(args);
  }

  @graphql.Mutation(() => CustomerFeedbackDto)
  async CreateNewCustomerFeedback(
    @graphql.Args()
    args: CustomerFeedbackDto
  ): Promise<CustomerFeedbackDto> {
    return this.service.CreateNewCustomerFeedback(args);
  }
}
