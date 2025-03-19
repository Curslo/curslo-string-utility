## Curslo String Utilities

A lightweight utility package for string manipulations in JavaScript and TypeScript.

## 🚀 Installation

Install via npm, yarn or pnpm:

```sh
npm install curslo-string-utilities
```

# OR yarn

```sh
yarn add curslo-string-utilities
```

# OR pnpm

```sh
pnpm add curslo-string-utilities
```

# 📖 Usage

Import the package in your JavaScript or TypeScript project:

```js
const {
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
  randomString,
} = require("curslo-string-utilities");
```

# // OR in TypeScript:

```ts
import {
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
  randomString,
} from "curslo-string-utilities";
```

## 🔥 Functions & Examples

# 1️⃣ capitalize(word)

Converts the first letter of a word to uppercase.

```js
console.log(capitalize("hello world")); // "Hello world"
```

# 2️⃣ toCamelCase(str)

Converts a string to camelCase.

```js
console.log(toCamelCase("hello world")); // "helloWorld"
```

# 3️⃣ toSnakeCase(str)

Converts a string to snake_case.

```js
console.log(toSnakeCase("hello world")); // "hello_world"
```

# 4️⃣ toKebabCase(str)

Converts a string to kebab-case.

```js
console.log(toKebabCase("hello world")); // "hello-world"
```

# 5️⃣ reverseString(str)

Reverses the given string.

```js
console.log(reverseString("hello")); // "olleh"
```

# 6️⃣ truncateString(str, length)

Truncates a string to a given length and adds "..." at the end.

```js
console.log(truncateString("Hello World", 5)); // "Hello..."
```

# 7️⃣ isPalindrome(str)

Checks if a string is a palindrome.

```js
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```

# 8️⃣ removeWhitespace(str)

Removes all whitespace from a string.

```js
console.log(removeWhitespace("Hello World")); // "HelloWorld"
```

# 9️⃣ countWords(str)

Counts the number of words in a string.

```js
console.log(countWords("This is a test")); // 4
```

# 🔟 toTitleCase(str)

Converts a string to title case.

```js
console.log(toTitleCase("hello world")); // "Hello World"
```

# 1️⃣1️⃣ maskString(str, visibleChars = 4)

Masks all but the last visibleChars characters in a string.

```js
console.log(maskString("1234567890")); // "**\*\***7890"
console.log(maskString("secretPassword", 3)); // "\***\*\*\*\*\*\*\***ord"
```

# 1️⃣2️⃣ randomString(length)

Generates a random alphanumeric string of the given length.

```js
console.log(randomString(8)); // Example output: "A1B2C3D4"
```

# ✅ Testing

Run tests using Jest:

```sh
npm test
```

## 👨‍💻 Contributing

Contributions are welcome!

Fork the repository
Make your changes
Open a pull request

## 🔨 Development

If you want to contribute or modify this package:

1. Clone the repository:
   ```sh
   git clone https://github.com/Curslo/curslo-string-utilities.git
   cd curslo-string-utilities
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build the package:
   ```sh
   npm run build
   ```
4. Run tests:
   ```sh
   npm test
   ```

## 🌟 Support

If you like this package, please ⭐ star the repository on GitHub!

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📢 Changelog

- **v2.1.2** (Latest)
  - **Converted to TypeScript** for better type safety.
  - Updated package exports for **ES Module & CommonJS compatibility**.
  - Added more string utilities
  - Can Build, run test with jest and its the most stable version
- **v2.1.0**
  - Initial release with string utility functions.
  - **Converted to TypeScript** for better type safety.
  - Updated package exports for **ES Module & CommonJS compatibility**.
