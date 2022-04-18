import moment from "moment";
const parseBirthday = (birthday) => (birthday ? birthday.split(" ")[0] : "");

const getAge = (birthday) =>
  birthday ? moment(birthday).fromNow(true).split(" ")[0] : "";

const containsNumber = (inputArray) =>
  inputArray ? inputArray.filter((input) => !isNaN(input)).length > 0 : false;

const containsWords = (inputArray) =>
  inputArray ? inputArray.filter((input) => isNaN(input)).length > 0 : false;

export { parseBirthday, getAge, containsNumber, containsWords };
