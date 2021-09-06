// eslint-disable-next-line @typescript-eslint/no-var-requires
const basic = require('../basic/index.js')

const extensionRulesByBasic = {}
const extensionRuleNames = [
    'brace-style',
    'comma-dangle',
    'comma-spacing',
    'default-param-last',
    'dot-notation',
    'func-call-spacing',
    'indent',
    'init-declarations',
    'keyword-spacing',
    'lines-between-class-members',
    'no-array-constructor',
    'no-dupe-class-members',
    'no-duplicate-imports',
    'no-empty-function',
    'no-extra-parens',
    'no-extra-semi',
    'no-implied-eval',
    'no-invalid-this',
    'no-loop-func',
    'no-loss-of-precision',
    'no-magic-numbers',
    'no-redeclare',
    'no-shadow',
    'no-throw-literal',
    'no-unused-expressions',
    'no-unused-vars',
    'no-use-before-define',
    'no-useless-constructor',
    'object-curly-spacing',
    'quotes',
    'require-await',
    // "return-await",
    'semi',
    'space-before-function-paren',
    'space-infix-ops',
]
extensionRuleNames.forEach((ruleName) => {
    extensionRulesByBasic[ruleName] = ['off']
    extensionRulesByBasic[`@typescript-eslint/${ruleName}`] = basic.rules[ruleName]
})
extensionRuleNames['no-return-await'] = ['off']
extensionRulesByBasic['return-await'] = basic.rules['no-return-await']

module.exports = {
    overrides: [],
    extends: ['./eslint.basic.js', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
    },
    rules: {
        // "@typescript-eslint/eslint-plugin": "^4.29.2",

        /* Extension Rules */
        ...extensionRulesByBasic,
    },
}
