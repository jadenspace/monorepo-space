module.exports = {
  root: true,
  plugins: ["react-hooks", "@typescript-eslint", "prettier"],
  extends: [
    "plugin:@next/next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true, // document나 window 인식되게 함
    node: true,
    es6: true,
  },
  rules: {
    // React Hooks 규칙
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // React 규칙
    "react/react-in-jsx-scope": "off",

    // Next.js 규칙들은 extends에서 자동으로 포함됨
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
    createDefaultProgram: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
};
