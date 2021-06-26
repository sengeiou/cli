module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6, //也就是ES6语法支持的意思
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react'],
    globals: {
        $: true,
    },
    rules: {
        // 禁止使用 var
        'no-var': 'error',
        'no-console': 'error',
        'react/display-name': 'off',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
};
