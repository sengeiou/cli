const fabric = require('@umijs/fabric');

module.exports = {
    ...fabric.default,
    rules: {
        ...fabric.default.rules,
        'arrow-body-style': 'off',
    },
    plugins: [...fabric.default.plugins, 'react-hooks'],
    parserOptions: {
        ...fabric.default.parserOptions,
        project: './tsconfig.json',
    },
};
