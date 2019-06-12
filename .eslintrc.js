module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
    ],
    "plugins": [
        "@typescript-eslint",
        "react",
        "jsx-a11y",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "project": "./tsconfig.json",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "pragma": "h"
        }
    },
    "rules": {
        "prettier/prettier": ['error', {
            printWidth: 120,
            singleQuote: true,
            trailingComma: "es5",
            tabWidth: 4,
        }],
    }
}
