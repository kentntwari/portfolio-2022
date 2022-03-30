import { createClassString } from '../../utilities/functions/createClassString';

export const card = createClassString({
  background: 'bg-gray-full-400',
  width: 'w-full',
  height: 'h-[150px]',
  padding: 'p-5 lg:p-10',
  display: 'flex',
  flexDirection: 'flex-col',
  justifyContent: 'justify-center',
  gap: 'gap-2',
  boxShadow: 'shadow-regular',
  border: 'rounded-md',
});

export const paragraph = createClassString({
  animation: 'animate-pulse',
  height: 'h-4',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
});
