# 📜 Curslo String Utilities

A simple utility package for string manipulations, now with **TypeScript support!** 🎉

---

## 📦 Installation

You can install this package via **npm** or **yarn** or **pnpm**:

```sh
npm install curslo-string-utilities
```

or  

```sh
yarn add curslo-string-utilities
```

or

```sh
pnpm add curslo-string-utilities
```

---

## 🚀 Usage

### For JavaScript Users

Use **CommonJS** `require()`:

```js
const { capitalize, toCamelCase } = require("curslo-string-utilities");

console.log(capitalize("hello")); // "Hello"
console.log(toCamelCase("hello world")); // "helloWorld"
```

---

### For TypeScript Users

Use **ES Module Imports**:

```ts
import { capitalize, toCamelCase } from "curslo-string-utilities";

console.log(capitalize("hello")); // "Hello"
console.log(toCamelCase("hello world")); // "helloWorld"
```

---

## 🔧 Available Functions

| Function        | Description |
|----------------|-------------|
| `capitalize(str: string): string` | Capitalizes the first letter of a string. |
| `toCamelCase(str: string): string` | Converts a string to camelCase. |
| `toSnakeCase(str: string): string` | Converts a string to snake_case. |
| `toKebabCase(str: string): string` | Converts a string to kebab-case. |
| `reverseString(str: string): string` | Reverses a given string. |
| `truncateString(str: string, length: number): string` | Truncates a string and adds "..." if it exceeds the specified length. |
| `isPalindrome(str: string): boolean` | Checks if a string is a palindrome. |

---

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

---

## 📢 Changelog

- **v2.0.0** (Latest)
  - **Converted to TypeScript** for better type safety.
  - Updated package exports for **ES Module & CommonJS compatibility**.
- **v1.1.5**  
  - Initial release with string utility functions.

---

## 📜 License

This project is licensed under the **MIT License**.

---

