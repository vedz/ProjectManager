import { memo } from 'react';

const defaultProps = {
  component: null,
  active: false,
};
export type TabProps = {
  title: string;
  active: boolean;
  component: React.ReactNode | null;
};

type Click = {
  click: (title: string) => void;
};
const Tab = memo(
  ({ title, active, click }: TabProps & typeof defaultProps & Click) => {
    console.log(`[COMPONENT] TAB ${title} - ${active}`);
    return (
      <div onClick={() => click(title)} className={active ? 'font-bold' : ''}>
        {title}
      </div>
    );
  }
);

Tab.defaultProps = {
  component: null,
};

export default Tab;
