import {
  capitalize,
  countWords,
  isPalindrome,
  maskString,
  randomString,
  removeWhitespace,
  reverseString,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  toTitleCase,
  truncateString,
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

describe("String Utility Functions", () => {
  test("removeWhitespace removes all spaces from a string", () => {
    expect(removeWhitespace("Hello World")).toBe("HelloWorld");
    expect(removeWhitespace("  spaced out   ")).toBe("spacedout");
    expect(removeWhitespace("no spaces")).toBe("nospaces");
  });

  test("countWords counts the number of words in a string", () => {
    expect(countWords("Hello world!")).toBe(2);
    expect(countWords("  This is a test case.  ")).toBe(5);
    expect(countWords("SingleWord")).toBe(1);
  });

  test("toTitleCase converts a string to Title Case", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
    expect(toTitleCase("this is a test")).toBe("This Is A Test");
    expect(toTitleCase("JAVASCRIPT is cool")).toBe("Javascript Is Cool");
  });

  test("maskString masks all but the last N characters", () => {
    expect(maskString("1234567890")).toBe("******7890");
    expect(maskString("mySecretText", 3)).toBe("*********ext");
    expect(maskString("short", 5)).toBe("short"); // No masking needed
  });

  test("randomString generates a string of the correct length", () => {
    const str1 = randomString(5);
    const str2 = randomString(10);

    expect(str1).toHaveLength(5);
    expect(str2).toHaveLength(10);
    expect(typeof str1).toBe("string");
    expect(typeof str2).toBe("string");
  });
});
