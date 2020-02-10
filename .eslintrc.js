module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "@nuxtjs/eslint-config-typescript",

    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/eslint-recommended",

    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict
    // with prettier
    "prettier/@typescript-eslint",

    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    camelcase: "off",
    "no-console": ["error", { allow: ["warn", "error"] }],

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false
      }
    ],

    "getter-return": "off"
  }
};
