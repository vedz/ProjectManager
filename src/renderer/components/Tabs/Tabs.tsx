import Tab, { TabProps } from './Tab';

type AppProps = {
  tabs: TabProps[];
  activateTab: (title: string) => void;
};
const Tabs = ({ tabs = [], activateTab }: AppProps): JSX.Element => {
  console.log('[COMPONENT] TABS');
  return (
    <div>
      {tabs.map((tab) => (
        <Tab title={tab.title} active={tab.active} click={activateTab} />
      ))}
    </div>
  );
};

export default Tabs;