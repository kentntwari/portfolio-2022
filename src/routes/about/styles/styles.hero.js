import { createClassString } from '../../../utilities/functions/createClassString';

export const article = createClassString({
  display: 'relative flex',
  flexDirection: 'flex-col',
  alignItems: 'items-center',
  gap: 'gap-5',
});

export const heading = createClassString({
  width: 'w-full lg:w-fit',
  margin: 'lg:mx-auto',
});

export const paragraph = createClassString({
  width: 'lg:w-4/5 xl:w-3/5 2xl:w-[768px]',
  textAlign: 'lg:text-center',
  texture: 'xl:major',
});

export const default_headshot_styles = createClassString({
  margin: 'mt-36 md:mt-24',
  width: 'xl:w-[790px]',
  transform: ' transform',
  scale: 'md:scale-100',
  translateX: 'translate-x-5 3xl:translate-x-96 lg:translate-x-72 xl:translate-x-60',
  translateY: 'lg:-translate-y-4',
});
