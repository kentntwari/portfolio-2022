import { createClassString } from '../../../utilities/functions/createClassString';

export const figure = createClassString({
  display: 'relative hidden md:block',
  margin: 'md:mt-20 md:mx-auto',
  width: 'lg:w-[650px] 2xl:w-[754px]',
});

export const img = createClassString({
  width: 'w-full',
  height: 'lg:w-[650px] 2xl:w-[754px]',
  aspectRatio: 'aspect-video',
  objectFit: 'object-cover',
  border: 'rounded-md',
  boxShadow: 'shadow-snippet',
});
