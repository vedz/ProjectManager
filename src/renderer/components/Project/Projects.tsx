import { useEffect, useState } from 'react';
import { IProject } from '../../../lib/types';
import { IMAGES } from '../../assets';
import technologies from '../../../lib/technologies';
import { TabProps } from '../Tabs/Tab';
import ClassGenerator from '../ClassGenerator/ClassGenerator';

type ProjectsProps = {
  selectProject: (tabProps: TabProps) => void;
};
const Projects = ({ selectProject }: ProjectsProps): JSX.Element => {
  console.log('[COMPONENT] Accueil');
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    async function getProjects() {
      const directories = await window.electron.ipcRenderer.getProjects();
      console.log('Projects :', directories);
      setProjects(directories);
    }

    getProjects();
  }, []);

  return (
    <div className="grid gap-2 lg:grid-cols-4 grid-cols-3 p-3">
      <input type="checkbox" />
      {projects.map((v) => (
        <div
          onClick={() =>
            selectProject({
              title: v.name,
              active: true,
              component: <ClassGenerator url="tst url" />,
            })
          }
          key={v.name}
          className="shadow-md p-3 hover:bg-blue-700 rounded-md cursor-pointer hover:shadow-lg
           hover:shadow-blue-700/50 hover:text-white hover:-translate-y-2 transition-all flex flex-col"
        >
          <div className="text-xl py-5 text-center">{v.name}</div>
          {v.version && <div className="text-center">v{v.version}</div>}
          <div className="flex-1  flex justify-center items-end">
            {v.technologies.map((t) => {
              return (
                <img
                  className="h-10"
                  key={t.name}
                  src={IMAGES[technologies[t.name].icon]}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
