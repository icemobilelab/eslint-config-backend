'use strict';

module.exports = {

    globals: {
        MyGlobals: true
    },
    env: {
        node: 2,
        es6: true,
        mocha: true
    },
    plugins: [
        'jsdoc'
    ],
    rules: {
        'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
        'camelcase': 2,
        'comma-style': [2, 'last'],
        'curly': 2,
        'eqeqeq': 2,
        'func-names': 2,
        'guard-for-in': 2,
        'indent': ['error', 4],
        'wrap-iife': 2,
        'no-use-before-define': [2, 'nofunc'],
        'new-cap': 2,
        'quotes': [2, 'single'],
        'no-trailing-spaces': 2,
        'max-len': [2, 120],
        'no-underscore-dangle': 0,
        'strict': 2,
        'no-shadow': 0,
        'no-console': 2,
        'semi': 'error',
        'no-undef': 'error',
        'no-unused-vars': 'error',
        'jsdoc/check-param-names': 1,
        'jsdoc/check-tag-names': 1,
        'jsdoc/check-types': 1,
        'jsdoc/no-undefined-types': 1,
        'jsdoc/require-description-complete-sentence': 0,
        'jsdoc/require-example': 0,
        'jsdoc/require-hyphen-before-param-description': 0,
        'jsdoc/require-param': 1,
        'jsdoc/require-param-description': 0,
        'jsdoc/require-param-name': 1,
        'jsdoc/require-param-type': 1,
        'jsdoc/require-returns-description': 0,
        'jsdoc/require-returns-type': 1,
        'jsdoc/valid-types': 1
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    settings: {
        jsdoc: {
            tagNamePreference: {
                returns: 'return'
            }
        }
    }
};