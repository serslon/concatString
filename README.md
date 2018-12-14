# Motivation

Many times I need to joining strings in different projects.

For example, make a full name for users/customers with a prefix or without it. But not all fields customer filled. Then you joined string with space, many times we have an incorrect string with space inside, before, and after a sentence. It is not a big problem because simple function decided this problem. But it happened many times, and I decided to make this library for more comfortable implement this functionality to any projects.

# Install

For install function into your project, you need run command:

```bash
npm install --sav concat-string
```

or

```bash
yarn add concat-string
```

# Usage

You can use many ways for execute this function:

- as parameters `concatString(par1, par2, par3,...)`
- as arrays `concatString([par1, par2, par3])`
- as mixes parameters `concatString([par1, par2, par3], par4)`.

## node.js

```javascript

const concatString = require('concat-string');
...
const fullName = concatString(userProfile.prefix, userProfile.firstName, userProfile.lastName);
...
```

## babel

```javascript
import concatString from 'concat-string';
...
const fullName = concatString(userProfile.prefix, userProfile.firstName, userProfile.lastName);
...
```

# License

[MIT](./LICENSE)
