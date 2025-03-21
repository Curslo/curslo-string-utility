import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.node, 
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json", 
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      js,
      "@typescript-eslint": tseslint.plugin, 
    },
    extends: [
      "eslint:recommended", 
      "plugin:@typescript-eslint/recommended", 
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:prettier/recommended",
    ],
    rules: {
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-console": "warn", 
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn", 
    },
  },
]);
