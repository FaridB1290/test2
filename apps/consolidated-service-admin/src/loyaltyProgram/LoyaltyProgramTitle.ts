import { LoyaltyProgram as TLoyaltyProgram } from "../api/loyaltyProgram/LoyaltyProgram";

export const LOYALTYPROGRAM_TITLE_FIELD = "id";

export const LoyaltyProgramTitle = (record: TLoyaltyProgram): string => {
  return record.id?.toString() || String(record.id);
};
