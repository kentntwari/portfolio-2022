import { createClassString } from '../../utilities/functions/createClassString';

export const snippet_loader = createClassString({
  animation: 'animation-pulse',
  width: '2xl:w-[600px]',
  height: '2xl:h-[360px]',
  background: 'bg-gray-full-100',
  border: 'border border-gray-full-300 rounded-md',
  dropShadow: 'drop-shadow-regular',
});

export const inner_snippet_loader = createClassString({
  animation: 'animate-pulse',
  width: 'w-full',
  height: 'h-full',
  background: 'bg-gray-full-400',
  border: 'rounded-md',
});

export const card_loader = createClassString({
  position: 'absolute',
  animation: 'animation-pulse',
  width: 'w-[301px]',
  padding: 'p-5',
  background: 'bg-gray-full-200',
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-2.5',
  border: 'border border-gray-full-300 rounded-md',
  dropShadow: 'drop-shadow-regular',
});

export const inner_paragraph_skeleton_upper = createClassString({
  animation: 'animate-pulse',
  width: 'w-full',
  height: 'h-3',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
});
export const inner_paragraph_skeleton_middle = createClassString({
  animation: 'animate-pulse',
  width: 'w-4/5',
  height: 'h-3',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
});
export const inner_paragraph_skeleton_last = createClassString({
  animation: 'animate-pulse',
  width: 'w-1/2',
  height: 'h-3',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
});
