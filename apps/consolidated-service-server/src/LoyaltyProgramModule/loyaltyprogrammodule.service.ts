import { Injectable } from "@nestjs/common";
import { LoyaltyProgramDto } from "../loyaltyProgramModule/LoyaltyProgramDto";

@Injectable()
export class LoyaltyProgramModuleService {
  constructor() {}
  async RegisterLoyaltyProgram(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RegisterLoyaltyProgramDetails(args: LoyaltyProgramDto): Promise<LoyaltyProgramDto> {
    throw new Error("Not implemented");
  }
}
