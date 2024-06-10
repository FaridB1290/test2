import { Reservation } from "../reservation/Reservation";

export type DeliveryIntegration = {
  createdAt: Date;
  id: string;
  reservation?: Reservation | null;
  updatedAt: Date;
};
