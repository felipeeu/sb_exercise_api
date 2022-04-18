import {
  parseBirthday,
  getAge,
  containsNumber,
  containsWords,
  containsPhoneNumber,
  parsePhoneNumber,
} from "../../utils";

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
    contacts = contacts.filter((contact) =>
      inputSplitted.find(
        (input) =>
          contact?.name.toLowerCase().includes(input.toLowerCase()) ||
          contact.address.toLowerCase().includes(input.toLowerCase())
      )
    );
  }

  if (shouldApplyBirthdayFilter) {
    contacts = contacts.filter((contact) =>
      inputSplitted.find(
        (input) => input == getAge(parseBirthday(contact?.birthday))
      )
    );
  }
  if (shouldApplyPhoneFilter) {
    contacts = contacts.filter((contact) =>
      inputSplitted.find(
        (input) => parsePhoneNumber(contact?.phone_number) === input
      )
    );
  }

  return contacts;
};

export { contactFilters };
