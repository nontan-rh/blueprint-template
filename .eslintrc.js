module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react",
    ],
    "plugins": [
        "@typescript-eslint"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    },
    "env": {
        "browser": true,
    },
};
