module.exports = {
  root: true,
  extends: ["airbnb", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "prettier/@typescript-eslint", "prettier/react", "plugin:react/recommended"],
  env: {
    browser: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  rules: {
    "arrow-parens": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "import/imports-first": ["error", "absolute-first"],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "no-console": "warn",
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-use-before-define": 0,
    "object-curly-newline": "off",
    "prettier/prettier": "error",
    "react/display-name": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"]
      }
    ],
    "react/jsx-props-no-spreading": ["error", {
      html: "ignore",
      custom: "ignore",
      exceptions: [""],
    }],
    "react/no-multi-comp": "error",
    "react/prop-types": "error"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx"],
        "paths": ["src"]
      }
    }
  }
};
