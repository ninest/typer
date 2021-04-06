module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    semi: [2, "always"],
    "no-unused-vars": "warn",
  },
};
