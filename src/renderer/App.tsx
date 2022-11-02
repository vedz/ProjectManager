import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { IProject } from '../api/directory';

const Hello = () => {
  console.log('Hello :)');
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    async function getProjects() {
      const directories = await window.electron.ipcRenderer.getProjects();
      console.log(directories);
      setProjects(directories);
    }

    getProjects();
  }, []);
  return (
    <div className="grid lg:grid-cols-4 grid-cols-3">
      {projects.map((v) => (
        <div key={v.name} className="shadow-xl p-3">
          <p>Projet : {v.name}</p>
          <p>Version : {v.version}</p>
          <div>Techno</div>
          {v.technologies.map((t) => (
            <p key={t.name}>
              {t.name} : {t.version}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
