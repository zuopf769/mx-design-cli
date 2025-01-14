export const DEV = 'dev';
export const BUILD_SITE = 'buildSite';
export const BUILD_LIB = 'buildLib';
export const TEST = 'test';
export const isDev = (env) => env === DEV;
export const basePath = 'src';
export const ESM = 'esm';
export const CJS = 'cjs';
export const LIB = 'lib';
export const UMD = 'umd';
export const LESS_2_CSS = 'less2Css';
export const COPY_LESS = 'copyLess';

export const inputList = [
  'src/**/*.ts',
  'src/**/*.js',
  'src/**/*.jsx',
  'src/**/*.tsx',
  '!src/**/__tests__',
];
