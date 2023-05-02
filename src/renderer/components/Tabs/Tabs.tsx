import Tab, { TabProps } from './Tab';

type AppProps = {
  tabs: TabProps[];
  activateTab: (title: string) => void;
};

function Tabs({ tabs = [], activateTab }: AppProps): JSX.Element {
  console.log('[COMPONENT] TABS');
  return (
    <div className="flex w-full ">
      {tabs.map((tab) => (
        <Tab
          key={tab.title}
          title={tab.title}
          active={tab.active}
          click={activateTab}
        />
      ))}
      <div className="flex-1 border-b-[1px] border-b-ternary" />
    </div>
  );
}

export default Tabs;
