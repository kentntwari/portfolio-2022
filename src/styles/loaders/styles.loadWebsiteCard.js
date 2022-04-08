import { createClassString } from '../../utilities/functions/createClassString';

export const website_card_loader_wrapper = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-100',
  boxShadow: 'shadow-regular',
  padding: 'p-5 2xl:p-10',
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-7.5',
  height: 'h-[210px] 2xl:h-[282px]',
  width: 'w-full md:w-full 2xl:w-[442px]',
});

export const inner_heading_loading = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  width: 'w-full md:w-10/12 2xl:w-full',
  height: 'h-6',
  border: 'rounded-full',
});

export const inner_paragraph_loading_upper = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
  width: 'w-11/12 md:w-9/12 2xl:w-11/12',
  height: 'h-3',
});

export const inner_paragraph_loading_middle = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
  width: 'w-4/5 md:w-9/12 2xl:w-11/12',
  height: 'h-3',
});

export const inner_paragraph_loading_last = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
  width: 'w-9/12 md:w-7/12 2xl:w-9/12',
  height: 'h-3',
});

export const loader_button = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
  width: 'w-[182px]',
  height: 'h-[42px]',
});
