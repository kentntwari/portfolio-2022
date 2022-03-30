import { createClassString } from '../../utilities/functions/createClassString';

export const title = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  width: 'w-[800px]',
  height: 'h-9',
  border: 'rounded-full',
});

export const wrapper_div = createClassString({
  width: 'w-[800px]',
  display: 'flex',
  flexDirecion: 'flex-col',
  alignItems: 'items-center',
  gap: 'gap-3',
});

export const paragraph_upper = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  width: 'w-11/12',
  height: 'h-4',
  border: 'rounded-full',
});

export const paragraph_middle = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  width: 'w-10/12',
  height: 'h-4',
  border: 'rounded-full',
});

export const paragraph_last = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  width: 'w-9/12',
  height: 'h-9',
  border: 'rounded-full',
});
