import { createClassString } from '../../../utilities/functions/createClassString';

export const section = createClassString({
  margin: 'mt-[132px]',
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
  with: 'xl:w-3/4 2xl:w-[677px]',
  fontSize: 'md:text-2xl lg:text-3xl',
  textAlign: 'lg:text-center',
});

export const paragraph = createClassString({
  width: 'lg:w-[670px] xl:w-3/4 2xl:w-3/5',
  texture: 'lg:major',
  textAlign: 'text-center',
});
