module.exports = {
  roots: ['<rootDir>/tests'],
  globals: {},
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/applications/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@ts/(.*)': '<rootDir>/src/ts/$1'
  }
}
