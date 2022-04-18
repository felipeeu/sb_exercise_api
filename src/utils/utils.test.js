import {
  parseBirthday,
  getAge,
  containsNumber,
  containsWords,
  containsPhoneNumber,
  parsePhoneNumber,
} from "./utils";

const DATE_TEST_TITLE = "Utils/ Date / ";
const INPUT_TEST_TITLE = "Utils/ Input / ";

const birthday = "1995-12-23T02:44:26 +03:00";
describe(`${DATE_TEST_TITLE}`, () => {
  test("Check if hour was removed from birthday", () => {
    expect(parseBirthday(birthday)).toBe("1995-12-23T02:44:26");
  });
  test("If there isn't birthday return empty string", () => {
    expect(parseBirthday(null)).toBe("");
  });
  test("get age from parsed birthday", () => {
    expect(getAge(parseBirthday(birthday))).toBe("26");
  });
  test("get age 0 if there is no birthday", () => {
    expect(getAge(parseBirthday(""))).toBe("");
  });
});

describe(`${INPUT_TEST_TITLE}`, () => {
  test("Verify if there is number inside array", () => {
    expect(containsNumber(["John", "30"])).toBe(true);
  });
  test("Test fails if there is no numbers", () => {
    expect(containsNumber(["John"])).not.toBe(true);
  });
  test("Verify if there is words inside array", () => {
    expect(containsWords(["John", "7"])).toBe(true);
  });
  test("Verify if there is phone inside array", () => {
    expect(containsPhoneNumber([" 5856678"])).toBe(true);
  });
  test("Remove code area from phone ", () => {
    expect(parsePhoneNumber("(456) 5856678")).toBe("5856678");
  });
});
