import { IProject } from '../lib/types';
import { technologiesKeys } from '../lib/technologies';

const fs = require('fs');
const path = require('path');
const config = require('./config');

const keyDepedencies: Record<string, string[]> = {
  'composer.json': ['require', 'require-dev'],
  'package.json': ['depedencies'],
};
const filesToSearch = Object.keys(keyDepedencies);

const getProjectInfos = (filePath: string): IProject | null => {
  const projet: IProject = {
    technologies: [],
    name: '',
    version: '',
  };
  let isFound = false;
  for (const file of filesToSearch) {
    let contentStr: string;
    try {
      contentStr = fs.readFileSync(path.join(filePath, file));
    } catch (e) {
      console.error(`Le fichier ${file} n'existe pas`);
      continue;
    }
    if (contentStr) {
      isFound = true;
      const contentObj = JSON.parse(contentStr);
      /**
       * TODO Remplacer technologiesKeys par la nouvelle variable technologies du fichier technologies.ts
       *  Pour récupérer directement le libellé et l'icône.
       */
      for (const technology of technologiesKeys) {
        for (const depedencyKey of keyDepedencies[file]) {
          if (
            contentObj[depedencyKey] &&
            contentObj[depedencyKey][technology]
          ) {
            projet.technologies.push({
              name: technology,
              version: contentObj[depedencyKey][technology],
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
  console.log(config);
  const projects = [];
  for (const directory of config.directories) {
    console.log(directory);
    let projectFiles: string[] = [];
    try {
      projectFiles = fs.readdirSync(directory);
    } catch (e) {
      console.error(`Le dossier ${directory} n'existe pas`);
      continue;
    }
    console.log(projectFiles);
    for (const project of projectFiles) {
      const projectInfos = getProjectInfos(path.join(directory, project));
      if (projectInfos) {
        projects.push(projectInfos);
      }
    }
  }
  return projects;
};
