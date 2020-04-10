module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  //extends: ["eslint:recommended"],//不要使用代码格式化
  extends: "prettier", //使用prettier来格式化代码
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": "off"
  }
};
