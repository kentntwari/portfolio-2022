import { createClassString } from '../../../utilities/functions/createClassString';

export const section = createClassString({
  display: 'relative grid',
  gridDirection: 'grid-cols-1',
  placeItems: 'lg:place-items-center',
  gap: 'gap-7.5 lg:gap-10',
  width: 'md:w-fit',
  background: 'md:bg-white-full',
  margin: 'mt-28 md:mt-56 xl:mx-auto',
  padding: 'md:p-10 xl:px-[60px] xl:py-10',
  boxShadow: 'md:shadow-[0_15px_60px_rgba(196,196,196,0.25)]',
});

export const heading = createClassString({
  width: 'md:w-full lg:w-[63%] xl:w-[510px]',
  textAlign: 'md:text-center',
  fontSize: 'md:text-2xl',
});

export const divWrapper = createClassString({
  width: 'md:w-fit',
  margin: 'md:mx-auto',
  display: 'flex',
  flexDirection: 'flex-col md:flex-row',
  alignItems: 'md:items-center',
  gap: 'gap-5 xl:gap-10',
});

export const button = createClassString({
  padding: 'py-5 px-7.5 md:px-5 lg:px-7.5',
  textAlign: 'text-center',
});
