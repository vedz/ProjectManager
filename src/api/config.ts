import { IConfig } from '../lib/types';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { app } = require('electron');

const DEFAULT_CONFIG: IConfig = {
  directories: [],
};

const pathConfig = path.join(app.getAppPath(), 'config.yaml');
const config: IConfig = {
  directories: [],
};
let data;
try {
  data = yaml.load(fs.readFileSync(pathConfig));
} catch (e) {
  fs.writeFileSync(pathConfig, yaml.dump(DEFAULT_CONFIG));
  data = yaml.load(fs.readFileSync(pathConfig));
}
config.directories = data.directories;

module.exports = config;
