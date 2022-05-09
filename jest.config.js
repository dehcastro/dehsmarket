module.exports = {
  collectCoverageFrom: [
    //'**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/(styles|style).{js,ts}',
    '!<rootDir>/src/pages/_app.{js,jsx,ts,tsx}',
    '!<rootDir>/src/miragejs/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/testHelpers/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/_document.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$']
}
