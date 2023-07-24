import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

export default () => {
  let envConfig = yaml.load(
    readFileSync(join(__dirname, `env/${process.env.NODE_ENV}.yaml`), 'utf-8'),
  ) as Record<string, any>;

  let appConfig = yaml.load(
    readFileSync(join(__dirname, `env/app.yaml`), 'utf-8'),
  ) as Record<string, any>;

  let config = {
    ...appConfig,
    ...envConfig,
  };

  console.log(config);
  return config;
};
