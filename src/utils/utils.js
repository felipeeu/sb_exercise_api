import moment from "moment";
const parseBirthday = (birthday) => (birthday ? birthday.split(" ")[0] : "");

const getAge = (birthday) => {
  if (birthday) {
    const age = moment(birthday).fromNow(true).split(" ")[0];
    return age === "a" ? "1" : age;
  } else {
    return "";
  }
};

const containsNumber = (inputArray) =>
  inputArray
    ? inputArray.some((input) => !isNaN(input) && input.length < 3)
    : false;

const containsWords = (inputArray) =>
  inputArray ? inputArray.some((input) => isNaN(input)) : false;

const containsPhoneNumber = (inputArray) =>
  inputArray
    ? inputArray.some((input) => {
        return /\d{3}\d{4}/.test(input);
      })
    : false;

const parsePhoneNumber = (phoneNumber) =>
  phoneNumber ? phoneNumber.split(" ")[1] : "";

export {
  parseBirthday,
  getAge,
  containsNumber,
  containsWords,
  containsPhoneNumber,
  parsePhoneNumber,
};
