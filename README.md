# Yet Another JavaScript Testing Framework

[![npm version](https://badge.fury.io/js/yajstf.svg)](https://badge.fury.io/js/yajstf)

## Description

yajstf is a very lightweight testing framework that is incredibly fast to get started with.

If you are curious about how to write a testing framework, take a peek into the code and if you want to borrow any sourcce code just take a look at the terms and conditions in the [License](#license).

## Getting Started

### Installing yajstf

Install yajstf using [`npm`](https://www.npmjs.com/):

```bash
npm install --save-dev yajstf
```
Or [`yarn`](https://yarnpkg.com/en/):

```bash
yarn add --dev yajstf
```


### Writing your first test

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a `sum.js` file:

```javascript
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Then, create a file named `sum.test.js`. This will contain our actual test:

```javascript
const assert = require('assert');
const { sum } = require('../index');


test('adds 1 + 2 to equal 3', () => {
  assert.strictEqual(sum(1, 2), 3);
});

```



Add the following section to your `package.json`:

```json
{
  "scripts": {
    "test": "jtf"
  }
}
```

Finally, run `npm run test` or `yarn test` and yajstf will print this message:

```bash
✓  TEST - adds 1 + 2 to equal 3 - PASSED
```

**You just successfully wrote your first test using yajstf!**

This test used `assert` and `strictEqual` to test that two values were exactly identical.


### Running from command line

You can run yajstf directly from the CLI (if it's globally available in your `PATH`, e.g. by `npm install yajstf --global`) or `yarn global add yajstf`.


### License

yajstf is [WTFPL licensed](http://www.wtfpl.net/about/).
