# ESLint backend rules

## Purpose
Generic ESLint rules package for IceMobile NodeJS backend services

## How to include in your project

Include a `.npmrc` file in your project, the contents of the file should contain a npm token. Please see other projects or LastPass for the token.

Run the following commands:
* `npm i --save-dev eslint`
* `npm i --save-dev @icemobile/eslint-config-backend`

Include the following snippet in the `.eslintrc` file in your project:
```
{
    "extends": "@icemobile/eslint-config-backend"
}
```

Make sure that the npm token is available within the docker image (`ADD .npmrc .`).
Example `Dockerfile.dev`:
```
# Pulling Node.js base image
FROM node:12-alpine AS base

RUN apk --no-cache add git

WORKDIR /opt/app

# Skip npm install if package.json didn't changed
ADD package.json .
ADD package-lock.json .
ADD .npmrc .

ARG githubToken

RUN git config --global url."https://${githubToken}:x-oauth-basic@github.com/".insteadOf "https://github.com/"

RUN npm ci && \
    rm -f /etc/.npmrc

# Loading application code
ADD . /opt/app

FROM base

WORKDIR /opt/app

# Expose API port
EXPOSE 9090

CMD ["npm", "run", "debug"]
```
