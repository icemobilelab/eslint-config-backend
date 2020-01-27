# ESLint backend rules

## Purpose
Generic ESLint rules package for IceMobile NodeJS backend services

## How to include in your project

Include a `.npmrc` file in your project, the contents of the file should contain a npm token. Please see other projects or LastPass for the token.

Run the following commands:
* `npm i --save-dev eslint`
* `npm i --save-dev eslint-plugin-jsdoc`
* `npm i --save-dev @icemobile/eslint-config-backend`

Include the following snippet in the `.eslintrc` file in your project:
```
{
    "extends": "@icemobile/eslint-config-backend"
}
```
