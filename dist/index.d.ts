declare function capitalize(word: string): string;
declare function toCamelCase(str: string): string;
declare function toSnakeCase(str: string): string;
declare function toKebabCase(str: string): string;
declare function reverseString(str: string): string;
declare function truncateString(str: string, length: number): string;
declare function isPalindrome(str: string): boolean;
declare const strUtils: {
    capitalize: typeof capitalize;
    toCamelCase: typeof toCamelCase;
    toSnakeCase: typeof toSnakeCase;
    toKebabCase: typeof toKebabCase;
    reverseString: typeof reverseString;
    truncateString: typeof truncateString;
    isPalindrome: typeof isPalindrome;
};
export default strUtils;
