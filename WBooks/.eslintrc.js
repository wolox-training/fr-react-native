module.exports = {
    "env": {
      "es6": true,
      "node": true,
      "browser": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "prettier",
      "flowtype"
    ],
    "extends": [
      "eslint:recommended",
      "airbnb",
      "plugin:react/recommended",
      "prettier",
      "prettier/flowtype",
      "prettier/react"
    ],
    "globals": {
      "__DEV__": true,
    },
    "rules": {
      "prettier/prettier": ["error", { printWidth: 110, singleQuote: true }],
      "no-invalid-this": "off",
      "no-return-assign": "off",
      "no-param-reassign": "off",
      "no-nested-ternary": "off",
      "react/require-default-props": "off",
      "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
      "react/prop-types": [2, { ignore: ["style", "children", "dispatch"] } ],
      "import/order": ["error", {"newlines-between": "always"}],
      "import/prefer-default-export": "off",
      "import/no-unresolved": "error",
      "import/extensions": ["error", { js: "never" }],
      "import/named": 2,
      "import/default": 2,
      "import/namespace": 2,
      "import/no-absolute-path": "error",
      "import/no-extraneous-dependencies": "off",
      "import/export": 2,
      "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "to" ]
      }]
    },
  
  };
  