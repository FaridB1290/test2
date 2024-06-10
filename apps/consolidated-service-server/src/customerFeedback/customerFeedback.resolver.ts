import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CustomerFeedbackResolverBase } from "./base/customerFeedback.resolver.base";
import { CustomerFeedback } from "./base/CustomerFeedback";
import { CustomerFeedbackService } from "./customerFeedback.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CustomerFeedback)
export class CustomerFeedbackResolver extends CustomerFeedbackResolverBase {
  constructor(
    protected readonly service: CustomerFeedbackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
