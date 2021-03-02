const path = require('path');

const { compilerOptions } = require('../../tsconfig');
const { getJestPathAliases } = require('../utils/pathAliases');

const rootDir = '../../';
const mocksDir = '<rootDir>/configs/jest/__mocks__';

module.exports = {
  rootDir,
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/configs/jest/jest.setup.ts"],
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(test).ts?(x)',
  ],
  setupFiles: [path.join(mocksDir, 'globals.js')],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(jpe?g|gif|png)$': path.join(mocksDir, 'imageMock.js'),
    '\\.svg$': path.join(mocksDir, 'svgMock.js'),
    ...getJestPathAliases(compilerOptions.paths),
  },
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/**/index.ts",
    "!<rootDir>/src/types/*",
    "!<rootDir>/src/consts/*",
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  coverageReporters: ['html', 'text', 'lcov', 'text-summary']
};
