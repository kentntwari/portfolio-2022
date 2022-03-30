import { createClassString } from '../../utilities/functions/createClassString';

export const wrapper_div = createClassString({
  margin: 'mt-20',
  display: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'items-center',
  gap: 'gap-7.5',
});

export const wrapper_title = createClassString({
  display: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'items-center',
  gap: 'gap-2',
});

export const wrapper_paragraph = createClassString({
  width: 'w-[700px]',
  display: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'items-center',
  gap: 'gap-2',
});

export const wrapper_button = createClassString({
  display: 'flex',
  justifyContent: 'justify-center',
  alignItems: 'items-center',
  gap: 'gap-5',
});

export const title = createClassString({
  animation: 'animate-pulse',
  height: 'h-6',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
});

export const paragraph = createClassString({
  animation: 'animate-pulse',
  height: 'h-4',
  background: 'bg-gray-full',
  border: 'rounded-full',
});

export const button = createClassString({
  animation: 'animate-pulse',
  width: 'w-[150px]',
  height: 'h-10',
  background: 'bg-gray-full',
  border: 'rounded-full',
});
