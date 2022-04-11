import { createClassString } from '../../utilities/functions/createClassString';

export const article = createClassString({
  width: '2xl:w-[442px]',
  height: '2xl:h-[282px]',
  padding: 'p-5 2xl:p-10',
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-7.5',
  boxShadow: 'shadow-regular',
  border: 'rounded-md',
});

export const divWrapper = createClassString({
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-5 2xl:gap-7.5',
});
export const button = createClassString({
  width: 'w-fit',
  padding: 'py-2.5 px-10',
});
