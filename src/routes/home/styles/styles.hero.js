import { createClassString } from '../../../utilities/functions/createClassString';

export const section = createClassString({
  position: 'relative',
  display: '2xl:flex',
});

export const article = createClassString({
  margin: '2xl:mt-16',
  display: 'flex flex-col',
  alignItems: 'lg:items-center 2xl:items-start',
  gap: 'gap-5 2xl:gap-10',
});

export const heading = createClassString({
  width: 'lg:w-9/12 xl:w-3/5 xl:w-[522px]',
  textAlign: 'lg:text-center 2xl:text-left',
});

export const paragraph = createClassString({
  width: 'md:w-[90%] lg:w-9/12 xl:w-1/2 2xl:w-[452px]',
  texture: 'lg:major',
  textAlign: 'lg:text-center 2xl:text-left',
});

export const button = createClassString({
  width: 'w-fit',
  margin: 'mt-2.5',
  padding: 'py-5 px-10',
});
