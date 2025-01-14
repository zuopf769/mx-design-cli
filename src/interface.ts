export type IWebpackConfigType = 'buildLib' | 'dev' | 'buildSite';

export interface IDeployConfig {
  outDir: string;
  pushGh: boolean;
  analyzer: boolean;
}

export interface ITestConfig {
  updateSnapshot: boolean;
  coverage: boolean;
  setupFilesAfterEnv: string;
  watch?: boolean;
}
