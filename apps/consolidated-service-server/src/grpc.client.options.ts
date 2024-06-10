import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "analytics",
      "customerfeedback",
      "deliveryintegration",
      "notification",
      "restaurantmanagement",
      "loyaltyprogram",
      "inventory",
      "reservation",
      "user"
    ],
    protoPath: [
      "src/analytics/analytics.proto",
      "src/customerfeedback/customerfeedback.proto",
      "src/deliveryintegration/deliveryintegration.proto",
      "src/notification/notification.proto",
      "src/restaurantmanagement/restaurantmanagement.proto",
      "src/loyaltyprogram/loyaltyprogram.proto",
      "src/inventory/inventory.proto",
      "src/reservation/reservation.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
