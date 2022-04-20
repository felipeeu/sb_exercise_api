import { parsePhoneNumber, getAge, parseBirthday } from "../../../utils";

const verifyNameOrAddress = (contacts, inputSplitted) => {
  return contacts.filter((contact) =>
    inputSplitted.find(
      (input) =>
        contact?.name.toLowerCase().includes(input.toLowerCase()) ||
        contact.address.toLowerCase().includes(input.toLowerCase())
    )
  );
};

const verifyAge = (contacts, inputSplitted) => {
  return contacts.filter((contact) =>
    inputSplitted.find(
      (input) => input == getAge(parseBirthday(contact?.birthday))
    )
  );
};

const verifyPhoneNumber = (contacts, inputSplitted) => {
  return contacts.filter((contact) =>
    inputSplitted.find(
      (input) => parsePhoneNumber(contact?.phone_number) === input
    )
  );
};
export { verifyPhoneNumber, verifyNameOrAddress, verifyAge };
