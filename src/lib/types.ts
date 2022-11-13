export interface IProject {
  name: string;
  technologies: ITechnology[];
  version: string;
}

export interface ITechnology {
  name: string;
  version: string;
}

export interface IConfig {
  directories: string[];
}
