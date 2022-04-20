import {
  containsNumber,
  containsWords,
  containsPhoneNumber,
} from "../../utils";

import { verifyNameOrAddress, verifyAge, verifyPhoneNumber } from "./helpers";

const contactFilters = (db, args) => {
  const input = args?.filter?.input;
  const shouldApplyFilters = input !== null;
  let contacts = db;

  if (!shouldApplyFilters) {
    return contacts;
  }

  const inputSplitted = input?.split(" ");
  const shouldApplyNameOrAddressFilter =
    shouldApplyFilters && containsWords(inputSplitted);
  const shouldApplyPhoneFilter = containsPhoneNumber(inputSplitted);
  const shouldApplyBirthdayFilter = containsNumber(inputSplitted);

  if (shouldApplyNameOrAddressFilter) {
    contacts = verifyNameOrAddress(contacts, inputSplitted);
  }

  if (shouldApplyBirthdayFilter) {
    contacts = verifyAge(contacts, inputSplitted);
  }
  if (shouldApplyPhoneFilter) {
    contacts = verifyPhoneNumber(contacts, inputSplitted);
  }
  return contacts;
};
export { contactFilters };
