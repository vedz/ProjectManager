import { useCallback, useEffect, useState } from 'react';
import { TabProps } from '../components/Tabs/Tab';
import Projects from '../components/Project/Projects';
import Tabs from '../components/Tabs/Tabs';

function Index() {
  console.log('[COMPONENT] INDEX');

  const [tabs, setTabs] = useState<TabProps[]>([]);
  console.log(tabs);
  const handleActiveTab = useCallback((title: string) => {
    console.log(`Active tab ${title}`);
    setTabs((prevState) => {
      return prevState.map((t) => {
        t.active = t.title === title;
        return t;
      });
    });
  }, []);

  const selectProject = (tabProp: TabProps) => {
    console.log(tabs);
    if (!tabs.find((v) => v.title === tabProp.title)) {
      setTabs((prevState) => {
        return [...prevState, tabProp];
      });
    }
    handleActiveTab(tabProp.title);
  };

  useEffect(() => {
    console.log('useEffect');
    setTabs((prevState) => {
      return [
        ...prevState,
        {
          active: true,
          title: 'Accueil',
          component: <Projects selectProject={selectProject} />,
        },
      ];
    });

    // cleanup fonction
    return () => {
      setTabs(() => {
        return [];
      });
    };
  }, []);

  return (
    <div>
      <Tabs tabs={tabs} activateTab={handleActiveTab} />
      <div>
        {tabs.map((t) => (
          <div key={t.title} className={t.active ? '' : 'hidden'}>
            {t.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
