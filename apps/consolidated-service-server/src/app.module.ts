import { Module } from "@nestjs/common";
import { AnalyticsModule } from "./analytics/analytics.module";
import { CustomerFeedbackModule } from "./customerFeedback/customerFeedback.module";
import { DeliveryIntegrationModule } from "./deliveryIntegration/deliveryIntegration.module";
import { NotificationModule } from "./notification/notification.module";
import { RestaurantManagementModule } from "./restaurantManagement/restaurantManagement.module";
import { LoyaltyProgramModule } from "./loyaltyProgram/loyaltyProgram.module";
import { InventoryModule } from "./inventory/inventory.module";
import { ReservationModule } from "./reservation/reservation.module";
import { UserModule } from "./user/user.module";
import { CustomerFeedbackModuleModule } from "./CustomerFeedbackModule/customerfeedbackmodule.module";
import { InventoryModuleModule } from "./InventoryModule/inventorymodule.module";
import { LoyaltyProgramModuleModule } from "./LoyaltyProgramModule/loyaltyprogrammodule.module";
import { NotificationModuleModule } from "./NotificationModule/notificationmodule.module";
import { ReservationModuleModule } from "./ReservationModule/reservationmodule.module";
import { RestaurantManagementModuleModule } from "./RestaurantManagementModule/restaurantmanagementmodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    AnalyticsModule,
    CustomerFeedbackModule,
    DeliveryIntegrationModule,
    NotificationModule,
    RestaurantManagementModule,
    LoyaltyProgramModule,
    InventoryModule,
    ReservationModule,
    UserModule,
    CustomerFeedbackModuleModule,
    InventoryModuleModule,
    LoyaltyProgramModuleModule,
    NotificationModuleModule,
    ReservationModuleModule,
    RestaurantManagementModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
