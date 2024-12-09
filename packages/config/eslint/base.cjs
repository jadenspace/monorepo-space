const js = require("@eslint/js");
const eslintConfigPrettier = require("eslint-config-prettier");
const turboPlugin = require("eslint-plugin-turbo");
const onlyWarn = require("eslint-plugin-only-warn");

const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];

module.exports = { config };
