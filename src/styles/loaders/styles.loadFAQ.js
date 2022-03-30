import { createClassString } from '../../utilities/functions/createClassString';

export const card = createClassString({
  margin: 'mt-20',
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-5',
});

export const wrapper_div = createClassString({
  width: 'w-fit',
  margin: 'mx-auto',
  boxShadow: 'shadow-regular',
});

export const wrapper_div_question = createClassString({
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-2',
  background: 'bg-white-full',
  width: 'w-[580px]',
  padding: 'py-2.5 lg:py-5 px-5 lg:px-10',
  border: 'border-b border-solid border-[#c4c4c4] rounded-t-md',
});

export const paragraph_question = createClassString({
  animation: 'animate-pulse',
  height: 'h-5',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
});

export const wrapper_div_answer = createClassString({
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-2',
  background: 'bg-white-70',
  width: 'w-[580px]',
  padding: 'py-2.5 lg:py-5 px-5 lg:px-10',
  border: 'border-b border-solid border-[#c4c4c4] rounded-b-md',
});

export const paragraph_answer = createClassString({
  animation: 'animate-pulse',
  height: 'h-3',
  background: 'bg-gray-full-400',
  border: 'rounded-full',
});
