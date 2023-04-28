import { FilesNameProject, IProject } from '../lib/types';
import { technologiesKeys } from '../lib/technologies';

const fs = require('fs');
const path = require('path');
const config = require('./config');

const keyDepedencies: Record<FilesNameProject, string[]> = {
  [FilesNameProject.COMPOSER_JSON]: ['require', 'require-dev'],
  [FilesNameProject.PACKAGE_JSON]: ['dependencies'],
};
const filesToSearch = Object.keys(keyDepedencies) as FilesNameProject[];

const saveContent = (
  fileName: string,
  content: Record<any, any>,
  projet: IProject
) => {
  switch (fileName) {
    case FilesNameProject.PACKAGE_JSON:
      projet.packageJson = content;
      break;
    case FilesNameProject.COMPOSER_JSON:
      projet.composerJson = content;
      break;
    default:
      break;
  }
  projet.description = content.description;
};
const getProjectInfos = (filePath: string): IProject | null => {
  const projet: IProject = {
    technologies: [],
    name: '',
    version: '',
    composerJson: null,
    packageJson: null,
    description: '',
  };
  let isFound = false;
  for (const fileName of filesToSearch) {
    let contentStr: string;
    try {
      contentStr = fs.readFileSync(path.join(filePath, fileName));
    } catch (e) {
      console.error(`Le fichier ${fileName} n'existe pas`);
      continue;
    }
    if (contentStr) {
      isFound = true;
      const contentObj = JSON.parse(contentStr);
      saveContent(fileName, contentObj, projet);
      for (const technology of technologiesKeys) {
        for (const dependencyKey of keyDepedencies[fileName]) {
          if (
            contentObj[dependencyKey] &&
            contentObj[dependencyKey][technology]
          ) {
            projet.technologies.push({
              name: technology,
              version: contentObj[dependencyKey][technology],
            });
          }
        }
      }
      if (!projet.version) {
        projet.version = contentObj.version;
      }
    }
  }
  const filePathArr = filePath.split('/');
  projet.name = filePathArr[filePathArr.length - 1];

  return isFound ? projet : null;
};

export const getProjects = (): IProject[] => {
  const projects = [];
  for (const directory of config.directories) {
    let projectFiles: string[] = [];
    try {
      projectFiles = fs.readdirSync(directory);
    } catch (e) {
      console.error(`Le dossier ${directory} n'existe pas`);
      continue;
    }
    for (const project of projectFiles) {
      const projectInfos = getProjectInfos(path.join(directory, project));
      if (projectInfos) {
        projects.push(projectInfos);
      }
    }
  }
  return projects;
};
