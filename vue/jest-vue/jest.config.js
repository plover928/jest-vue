module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/__tests__/**/*.js?(x)'],
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"]
}
