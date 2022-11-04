module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    semi: ["error", "always"],
    "space-before-function-paren": "error",
    "arrow-spacing": "error",
    "block-spacing": "error",
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
