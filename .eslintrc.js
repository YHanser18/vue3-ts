module.exports = {
  // 运行环境
  "env": {
    "node": true,
    "commonjs": true,
    "es6": true,
  },
  // 规则包
  "extends": [
    "plugin:vue/vue3-essential", // eslint-plugin-vue
    "plugin:@typescript-eslint/recommended" // typescript 规则
  ],
  "parser": "vue-eslint-parser",
  // 解析器配置项
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "parser": "@typescript-eslint/parser"// 解析typescript文件
  },
  "plugins": ['vue', '@typescript-eslint'],
  // 自定义规则
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 0, // 关闭tab检查
    'no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],

    // 'no-var': 'error', // 禁止使用 var
    // 'no-useless-concat': 1, // 禁止不必要的字符串字面量或模板字面量的连接
    // 'no-useless-escape': 0, // 禁止不必要的转义字符
    // 'no-redeclare': 1, // 禁止多次声明同一变量
    // 'no-fallthrough': 1, // 禁止 case 语句落空
    // 'no-lonely-if': 1, // 禁止 if 作为唯一的语句出现在 else 语句中.如果一个if陈述是该else块中唯一的陈述，那么使用一个else if表格通常会更清晰。
    // 'no-irregular-whitespace': 1, // 禁止在字符串和注释之外不规则的空白
    // 'no-use-before-define': 1, // 禁止在变量定义之前使用它们
    // 'array-callback-return': 1, // 强制数组方法的回调函数中有 return 语句,Array有几种过滤，映射和折叠的方法。如果我们忘记return在这些回调中写入语句，那可能是一个错误。
    // 'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定
    // 'camelcase': 0, // 强制使用骆驼拼写法命名约定
    // 'default-case': 1, // 要求 switch 语句中有 default 分支
    // 'prefer-const': 0, // 要求使用 const 声明那些声明后不再被修改的变量.如果一个变量从不重新分配，使用const声明更好。const 声明告诉读者，“这个变量永远不会被重新分配，”减少认知负荷并提高可维护性。
    // 'vue/attributes-order': 2, // vue api使用顺序
    // 'vue/no-multiple-template-root': 0,
    'space-before-function-paren': 0, // 关闭函数前空格检查
    'vue/multi-word-component-names': 0, // 关闭组件命名规则
    // "@typescript-eslint/ban-ts-comment": 0,
    '@typescript-eslint/no-var-requires': 0,
    // "@typescript-eslint/no-non-null-assertion": 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': 0,// 禁止未使用的变量,报错关闭
    '@typescript-eslint/no-explicit-any': 0, // 禁止any类型,报错关闭
    '@typescript-eslint/ban-types': 'off', // 禁止某些类型如String、Number,报错关闭
    // 需要导出函数和类的公共类方法的显式返回和参数类型,报错关闭
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }], // 关闭对iview end-tag 检查
  },
  "globals": {
    "error": true
  },

}
