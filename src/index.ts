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

const strUtils = {
  capitalize,
  toCamelCase,
  toSnakeCase,
  toKebabCase,
  reverseString,
  truncateString,
  isPalindrome,
};

export default strUtils;
