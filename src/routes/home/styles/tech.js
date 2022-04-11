import { createClassString } from '../../../utilities/functions/createClassString';

export const section = createClassString({
  display: 'relative flex',
  flexDirection: 'flex-col',
  alignItems: 'lg:items-center',
  gap: 'gap-10',
  background: 'bg-green-100',
  width: '3xl:w-4/5',
  margin: '3xl:mx-auto 2xl:-mt-96',
  padding: 'px-5 lg:px-10 py-10 lg:py-20',
  border: 'rounded-md',
});

export const heading = createClassString({
  width: 'md:w-11/12 lg:w-9/12 xl:w-1/2 3xl:w-[500px]',
  fontSize: 'lg:text-3xl text-[1.625rem]',
  textAlign: 'lg:text-center',
  textColor: 'text-white-full',
});

export const divWrapper = createClassString({
  display: 'flex',
  flexWrap: 'flex-wrap',
  justifyContent: 'justify-evenly lg:justify-between',
  gap: 'gap-5 lg:gap-[61px] xl:gap-7.5',
});

export const img = createClassString({
  width: 'w-[60px] 2xl:w-20',
  height: 'h-[60px] 2xl:h-20',
});
