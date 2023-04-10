module.exports = {
  // 运行环境
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  // 规则包
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential", // eslint-plugin-vue
    "plugin:@typescript-eslint/recommended" // typescript 规则
  ],
  "overrides": [
  ],
  // 解析typescript文件
  "parser": "@typescript-eslint/parser",
  // 解析器配置项
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  // 自定义规则
  "rules": {
  }
}
