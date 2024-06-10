import { Injectable } from "@nestjs/common";
import { CustomerFeedbackDto } from "../customerFeedbackModule/CustomerFeedbackDto";

@Injectable()
export class CustomerFeedbackModuleService {
  constructor() {}
  async CreateCustomerFeedback(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateNewCustomerFeedback(args: CustomerFeedbackDto): Promise<CustomerFeedbackDto> {
    throw new Error("Not implemented");
  }
}
