export type TechnologiesTypes =
  | 'symfony/framework-bundle'
  | '@angular/core'
  | 'react'
  | 'vue'
  | '@capacitor/core'
  | '@ionic/angular';

interface TechnologiesDetails {
  icon: string;
  label: string;
}

export type Technologies = {
  [K in TechnologiesTypes]: TechnologiesDetails;
};

export interface ITechnology {
  name: TechnologiesTypes;
  version: string;
}

export interface IProject {
  name: string;
  technologies: ITechnology[];
  version: string;
  composerJson: Record<string, any> | null;
  packageJson: Record<string, any> | null;
  description: string;
}

export interface IConfig {
  directories: string[];
}
