function capitalize(word: string): string {
  if (typeof word !== "string") return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/g, "");
}


function toSnakeCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "_");
}


function toKebabCase(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-");
}

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

function truncateString(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

function removeWhitespace(str: string): string {
  if (typeof str !== "string") throw new Error("Input must be a string");
  return str.replace(/\s+/g, "");
}

function countWords(str: string): number {
  if (typeof str !== "string") throw new Error("Input must be a string");
  return str.trim().split(/\s+/).length;
}

function toTitleCase(str: string): string {
  if (typeof str !== "string") throw new Error("Input must be a string");
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function maskString(str: string, numChars: number = 4): string {
  if (typeof str !== "string") throw new Error("Input must be a string");
  if (str.length <= numChars) return str;
  return "*".repeat(str.length - numChars) + str.slice(-numChars);
}

function randomString(length: number): string {
  if (typeof length !== "number" || length < 1)
    throw new Error("Length must be a positive number");

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export{
  capitalize,
  toCamelCase,
  toSnakeCase,
  toKebabCase,
  reverseString,
  truncateString,
  isPalindrome,
  removeWhitespace,
  countWords,
  toTitleCase,
  maskString,
  randomString
};

