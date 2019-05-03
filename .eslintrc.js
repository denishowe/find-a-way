module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest/globals": true,
  },
  "extends": "airbnb",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
  },
  "plugins": [ "jest", "react" ],
  "rules": {
    "jsx-a11y/label-has-for": "off",
    "no-plusplus": "off",
  }
};
