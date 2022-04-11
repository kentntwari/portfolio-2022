import { createClassString } from '../../utilities/functions/createClassString';

export const wrapper_div = createClassString({
  margin: 'mt-36 mx-auto md:mt-24',
  background: 'bg-gray-full-100',
  width: 'w-[300px] lg:w-[500px]',
  height: 'h-[300px] lg:h-[500px]',
  border: 'rounded-full',
});

export const inner_div = createClassString({
  animation: 'animate-pulse',
  background: 'bg-gray-full-400',
  width: 'w-full',
  height: 'h-full',
  border: 'rounded-full',
});
