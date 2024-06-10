import * as graphql from "@nestjs/graphql";
import { LoyaltyProgramDto } from "../loyaltyProgramModule/LoyaltyProgramDto";
import { LoyaltyProgramModuleService } from "./loyaltyprogrammodule.service";

export class LoyaltyProgramModuleResolver {
  constructor(protected readonly service: LoyaltyProgramModuleService) {}

  @graphql.Query(() => String)
  async RegisterLoyaltyProgram(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RegisterLoyaltyProgram(args);
  }

  @graphql.Mutation(() => LoyaltyProgramDto)
  async RegisterLoyaltyProgramDetails(
    @graphql.Args()
    args: LoyaltyProgramDto
  ): Promise<LoyaltyProgramDto> {
    return this.service.RegisterLoyaltyProgramDetails(args);
  }
}
