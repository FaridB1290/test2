import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnalyticsService } from "./analytics.service";
import { AnalyticsGrpcControllerBase } from "./base/analytics.grpc.controller.base";

@swagger.ApiTags("analytics")
@common.Controller("analytics")
export class AnalyticsGrpcController extends AnalyticsGrpcControllerBase {
  constructor(protected readonly service: AnalyticsService) {
    super(service);
  }
}
