module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // Handles styles
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/file-mock.js', // Handles assets
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text'],
};
