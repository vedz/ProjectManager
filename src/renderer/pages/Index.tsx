import { useEffect, useState } from 'react';
import { IProject } from '../../lib/types';

const Index = () => {
  console.log('Hello :)');
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
      {projects.map((v) => (
        <div
          key={v.name}
          className="shadow-md p-3 hover:bg-blue-700 rounded-md cursor-pointer hover:shadow-lg hover:shadow-blue-700/50 hover:text-white hover:-translate-y-2 transition-all"
        >
          <div className="text-xl py-5 text-center">{v.name}</div>
          {v.version && <div className="text-center">v{v.version}</div>}
          <div>
            {v.technologies.map((t) => (
              <div key={t.name}>
                <div>{t.name}</div>
                <img src="" alt="" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
