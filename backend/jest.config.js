// jest.config.js
module.exports = {
  preset: 'ts-jest',                     // Usa ts-jest para manejar archivos TypeScript
  testEnvironment: 'node',               // Define el entorno de pruebas (Node.js)
  roots: ['<rootDir>/tests'],            // Directorio raíz donde Jest buscará los archivos de prueba
  testMatch: ['**/?(*.)+(spec|test).ts'], // Patrones de archivos de prueba
  moduleFileExtensions: ['ts', 'js', 'json'], // Extensiones de archivos a considerar
  transform: {
    '^.+\\.ts$': 'ts-jest',              // Transforma archivos TypeScript con ts-jest
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'], // Archivos para configurar el entorno de pruebas
  coverageDirectory: 'coverage',         // Directorio para informes de cobertura
  collectCoverageFrom: ['src/**/*.ts'],  // Archivos para los cuales se recopilará la cobertura
  verbose: true,                         // Imprime información detallada sobre las pruebas
};
