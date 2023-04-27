import { memo } from 'react';

type AppProps = {
  component: (() => JSX.Element) | null;
  active: boolean;
};

const TabContent = memo(({ component, active }: AppProps) => {
  console.log('[COMPONENT] TABCONTENT');
  let ComponentToShow: JSX.Element | null = null;
  if (active && component) {
    ComponentToShow = component();
  }
  return <div>{ComponentToShow && ComponentToShow}</div>;
});

export default TabContent;
