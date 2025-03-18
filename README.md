# 📦 Curslo String Utilities

Curslo String Utilities is a lightweight JavaScript package that provides essential string manipulation functions. It helps developers format, transform, and analyze strings easily.

## 🚀 Features
- ✅ **Capitalize**: Convert the first letter of a word to uppercase.
- ✅ **Camel Case**: Convert text to camelCase format.
- ✅ **Snake Case**: Convert text to snake_case format.
- ✅ **Kebab Case**: Convert text to kebab-case format.
- ✅ **Reverse String**: Reverse the characters in a string.
- ✅ **Truncate String**: Shorten a string to a specified length.
- ✅ **Palindrome Check**: Determine if a word is a palindrome.

## 📥 Installation

```sh
npm install curslo-string-utilities
```

or with Yarn:

```sh
yarn add curslo-string-utilities
```

or with pnpm:

```sh
pnpm add curslo-string-utilities
```

## 📖 Usage

### **Import the Package**
```js
const {
  capitalize,
  toCamelCase,
  toSnakeCase,
  toKebabCase,
  reverseString,
  truncateString,
  isPalindrome
} = require("curslo-string-utilities");
```

---

### **🔹 Available Functions**

#### **1️⃣ Capitalize**
Converts the first letter of a string to uppercase.

```js
console.log(capitalize("hello")); // "Hello"
```

---

#### **2️⃣ Convert to Camel Case**
Transforms a string into camelCase.

```js
console.log(toCamelCase("hello world example")); // "helloWorldExample"
```

---

#### **3️⃣ Convert to Snake Case**
Transforms a string into snake_case.

```js
console.log(toSnakeCase("hello world example")); // "hello_world_example"
```

---

#### **4️⃣ Convert to Kebab Case**
Transforms a string into kebab-case.

```js
console.log(toKebabCase("hello world example")); // "hello-world-example"
```

---

#### **5️⃣ Reverse a String**
Reverses the characters in a string.

```js
console.log(reverseString("hello")); // "olleh"
```

---

#### **6️⃣ Truncate a String**
Shortens a string to a specified length.

```js
console.log(truncateString("hello world", 5)); // "hello..."
```

---

#### **7️⃣ Check if a String is a Palindrome**
Determines whether a given word or phrase is a palindrome.

```js
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
```

---

## 🛠️ Contributing
Contributions are welcome! If you find a bug or have an improvement suggestion, feel free to open an issue or submit a pull request.

## 📜 License
This project is licensed under the MIT License.

---
🔗 **GitHub Repo**: [Curslo String Utilities](https://github.com/Curslo/curslo-string-utility)  
📦 **npm Package**: [curslo-string-utilities](https://www.npmjs.com/package/curslo-string-utilities)

