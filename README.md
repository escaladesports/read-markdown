# JavaScript Module Boilerplate

A simple JavaScript boilerplate that outputs to ES5 and ES6.

## Getting started

```bash
git clone git@github.com:escaladesports/javascript-module-boilerplate.git --depth=1 your-module
cd your-module
yarn
yarn reset
```

Also make sure to edit the `package.json` file with a new name, version number, author, and anything else you might need.

## Usage

- `yarn build`: Build browser and node versions of the module
- `yarn dev`: Run live dev mode
- `yarn test`: Run mocha tests
- `yarn analyze`: View bundle sizes

# Unit Testing

Unit tests will be performed pre-commit and pre-publish. You can change this in the npm scripts if this doesn't work well with your use case.