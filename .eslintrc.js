module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint-config-airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": "off",
    "react/prop-types": "off",
  }
};
