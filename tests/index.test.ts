import {
  capitalize,
  isPalindrome,
  reverseString,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  truncateString
} from "../src/index";

test("capitalize should capitalize the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverseString should reverse the string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("toCamelCase should convert a string to camelCase", () => {
  expect(toCamelCase("hello world")).toBe("helloWorld");
});

test("toKebabCase should convert a string to kebab-case", () => {
  expect(toKebabCase("hello world")).toBe("hello-world");
});

test("toSnakeCase should convert a string to snake_case", () => {
  expect(toSnakeCase("hello world")).toBe("hello_world");
});

test("truncateString should truncate the string", () => {
  expect(truncateString("hello world", 5)).toBe("hello...");
});

describe("isPalindrome", () => {
  test("should return true for a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("should return true for a palindrome with spaces", () => {
    expect(isPalindrome("nurses run")).toBe(true);
  });

  test("should return true for a palindrome with mixed case", () => {
    expect(isPalindrome("Madam")).toBe(true);
  });
});
