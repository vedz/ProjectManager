export interface IProject {
  name: string;
  technologies: ITechnology[];
  version: string;
}

export interface ITechnology {
  name: TechnologiesTypes;
  version: string;
}

export interface IConfig {
  directories: string[];
}

interface TechnologiesDetails {
  icon: string;
  label: string;
}

export type Technologies = {
  [K in TechnologiesTypes]: TechnologiesDetails;
};

export type TechnologiesTypes =
  | 'symfony/framework-bundle'
  | '@angular/core'
  | 'react'
  | 'vue'
  | '@capacitor/core'
  | '@ionic/angular';
