'use strict';

module.exports = {

    globals: {
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'v'
    },
    env: {
        node: 2,
        es6: true,
        mocha: true
    },
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
        'no-unused-vars': 'error'
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