import { useEffect } from 'react';
import { IProject } from '../../../lib/types';

type AppProp = {
  projet: IProject;
};

function ClassGenerator({ projet }: AppProp) {
  console.log(projet);
  useEffect(() => {}, []);

  return (
    <div>
      <h1>ClassGenerator</h1>
      <div>Projet ouvert : {projet.name}</div>
    </div>
  );
}

export default ClassGenerator;
