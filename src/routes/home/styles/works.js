import { createClassString } from '../../../utilities/functions/createClassString';

export const article = createClassString({
  margin: '2xl:mt-28',
  display: 'relative flex',
  flexDirection: 'flex-col',
  alignItems: 'lg:items-center',
  gap: 'gap-[42px]',
  zIndex: 'z-10',
});

export const heading = createClassString({
  width: 'md:w-4/5 lg:w-5/12 xl:w-96',
  textAlign: 'xl:text-center',
});
