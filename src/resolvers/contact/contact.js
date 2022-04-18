import {
  parseBirthday,
  getAge,
  containsNumber,
  containsWords,
} from "../../utils";

const contactFilters = (contacts, input) => {
  const shouldApplyFilters = input !== null;

  if (!shouldApplyFilters) {
    return contacts;
  }

  const inputSplitted = input?.split(" ");
  const shouldApplyNameFilter =
    shouldApplyFilters && containsWords(inputSplitted);
  const shouldApplyPhoneFilter = containsNumber(inputSplitted);
  const shouldApplyBirthdayFilter = containsNumber(inputSplitted);

  if (shouldApplyNameFilter) {
    contacts = contacts.filter((contact) =>
      inputSplitted.find((input) =>
        contact?.name.toLowerCase().includes(input.toLowerCase())
      )
    );
  }
  if (shouldApplyPhoneFilter) {
    contacts = contacts.filter((contact) =>
      inputSplitted.find((input) => contact?.phone_number.includes(input))
    );
  }
  if (shouldApplyBirthdayFilter) {
    contacts = contacts.filter((contact) =>
      inputSplitted.find(
        (input) => input == getAge(parseBirthday(contact?.birthday))
      )
    );
  }
  return contacts;
};

export { contactFilters };
