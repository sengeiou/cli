module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: ['plugin:vue/essential'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: ['vue'],
    rules: {
        /**
         * 禁用 console
         */
        'no-console': [2, { allow: ['warn', 'error'] }],
        /**
         * 禁止重复定义类的成员
         */
        'no-dupe-class-members': 'error',
        /**
         * 禁止对象字面量中出现重复的 key
         */
        'no-dupe-keys': 'error',
        /**
         * 禁止重复导入模块
         */
        'no-duplicate-imports': 'error',
        /**
         * 禁止出现空语句块
         */
        'no-empty': 'error',
        /**
         * 禁止解构赋值中出现空 {} 或 []
         */
        'no-empty-pattern': 'error',
        /**
         * 禁止不必要的布尔转换
         */
        'no-extra-boolean-cast': 'error',
        /**
         * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
         */
        'no-fallthrough': 'error',
        /**
         * 禁止使用 var
         */
        'no-var': 'error',
    },
};
