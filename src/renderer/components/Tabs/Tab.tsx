import { memo } from 'react';

export type TabProps = {
  title: string;
  active: boolean;
  component: React.ReactNode | null;
};

type Click = {
  click: (title: string) => void;
};
const Tab = memo(({ title, active, click }: TabProps & Click) => {
  console.log(`[COMPONENT] TAB ${title} - ${active}`);
  return (
    <div onClick={() => click(title)} className={active ? 'font-bold' : ''}>
      {title}
    </div>
  );
});

export default Tab;
