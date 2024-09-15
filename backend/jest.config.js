/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node', // Establece el entorno de pruebas (Node.js)
  roots: ['<rootDir>/tests'], // Directorio raíz donde Jest buscará los archivos de prueba
  testMatch: ['**/?(*.)+(spec|test).ts'], // Patrones para coincidir con los archivos de prueba
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest', // Transforma los archivos .ts y .tsx con ts-jest
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'], // Extensiones de archivo a considerar
  coverageDirectory: 'coverage', // Directorio para informes de cobertura
  collectCoverageFrom: ['src/**/*.ts'], // Archivos de los que se recopilará la cobertura
  verbose: true, // Imprime información detallada sobre las pruebas
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'], // Configura el entorno de pruebas
};