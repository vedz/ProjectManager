import { memo } from 'react';

export type TabProps = {
  title: string;
  active: boolean;
  component: React.ReactNode | null;
};

export type TabProps = {
  title: string;
  active: boolean;
  component: React.ReactNode | null;
};

const Tab = memo(({ title = '', active = false, click = null }: TabProps) => {
  console.log(`[COMPONENT] TAB ${title} - ${active}`);
  return (
    <div
      onClick={() => click(title)}
      className={[
        active ? 'text-white-100' : 'text-white-40',
        'pb-1.5',
        'pt-2',
        'px-4',
        active ? 'font-normal' : 'font-light',
        'cursor-pointer',
        'hover:text-white-100',
        active
          ? 'border-b-[6px] border-secondary'
          : 'border-b-[1px] border-b-ternary',
      ].join(' ')}
    >
      {title}
    </div>
  );
});

export default Tab;
