import { createClassString } from '../../../utilities/functions/createClassString';

export const article = createClassString({
  display: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'lg:items-center',
  gap: 'gap-7.5',
});

export const divWrapper = createClassString({
  display: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'lg:items-center',
  gap: 'gap-5',
});

export const heading = createClassString({
  textAlign: 'lg:text-center',
});

export const paragraph = createClassString({
  width: 'lg:w-[680px] 2xl:w-3/5',
  texture: 'lg:major',
  textAlign: 'lg:text-center',
});
