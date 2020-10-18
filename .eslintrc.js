module.exports = {
  parser: "@typescript-eslint/parser",

  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],

  ignorePatterns: ["dist/", "node_modules/"],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module",
  },

  rules: {
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/camelcase": "off",
  },

  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
