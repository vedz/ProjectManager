import { Technologies, TechnologiesTypes } from './types';

export const technologiesKeys: TechnologiesTypes[] = [
  'symfony/framework-bundle',
  'vue',
  '@angular/core',
  'react',
  '@ionic/angular',
  '@capacitor/core',
];

const technologies: Technologies = {
  'symfony/framework-bundle': {
    icon: 'symfony',
    label: 'Symfony',
  },
  vue: {
    icon: 'vue',
    label: 'Vue',
  },
  react: {
    icon: 'react',
    label: 'React',
  },
  '@angular/core': {
    icon: 'angular',
    label: 'Angular',
  },
  '@ionic/angular': {
    icon: 'ionic',
    label: 'Ionic',
  },
  '@capacitor/core': {
    icon: 'capacitor',
    label: 'Capacitor',
  },
};

export default technologies;
