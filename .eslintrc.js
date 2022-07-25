module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
    ecmaFeatures : {
      jsx : false
    }
  },
  rules: {
    "no-console": "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "vue/no-deprecated-slot-attribute": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "vue/no-v-html": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-implicit-any": "off",
    "no-empty": "off",
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        multiline: { delimiter: "none", requireLast: false },
        singleline: { delimiter: "comma", requireLast: false },
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "no-tabs": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-var": "error",
    "no-use-before-define": "off",
    "vue/multi-word-component-names": "off",
    indent: ["warn", 2, { SwitchCase: 0 }],
    "no-mixed-spaces-and-tabs": ["off", "smart-tabs"],
    quotes: ["warn", "double"],
    "prefer-const": ["error"],
    "arrow-parens": ["warn", "as-needed"],
    "no-return-assign": "off",
    curly: "off",
    "vue/html-indent": [
      "warn",
      "tab",
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    "vue/no-mutating-props": "off",
    "object-property-newline": "off",
    "require-atomic-updates": "off",
    "require-await": "off",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
  plugins: ["unused-imports"],
}
