export const technologiesKeys = [
  'symfony/framework-bundle',
  'angular',
  'react',
  'vue',
] as const;

type TechnologiesDetails = {
  icon: string;
  label: string;
};
type Technologies = {
  [K in typeof technologiesKeys[number]]: TechnologiesDetails;
};

const technologies: Technologies = {
  'symfony/framework-bundle': {
    icon: '/assets/symfony.png',
    label: 'Symfony',
  },
  vue: {
    icon: '',
    label: 'Vue',
  },
  react: {
    icon: '',
    label: 'React',
  },
  angular: {
    icon: '',
    label: 'Angular',
  },
};

export default technologies;
