import { Reservation } from "../reservation/Reservation";

export type Inventory = {
  createdAt: Date;
  id: string;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
