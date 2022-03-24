import { createClassString } from '../../../utilities/functions/createClassString';

export const section = createClassString({
  display: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'lg:items-center',
  gap: 'gap-5',
});

export const heading = createClassString({
  width: 'md:w-11/12 lg:w-full',
  textAlign: 'lg:text-center',
});

export const paragraph = createClassString({
  width: 'w-11/12 xl:w-2/3 2xl:w-3/5',
  fontSize: 'lg:text-major',
  textAlign: 'lg:text-center',
});
