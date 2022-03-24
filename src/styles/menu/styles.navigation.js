import { createClassString } from '../../utilities/functions/createClassString';

export const default_link = createClassString({
  fontFamily: 'font-display 2xl:font-body',
  fontWeight: 'md:font-bold',
  fontSize: 'text-[36px] lg:text-3xl 2xl:text-base',
  color: 'text-white-full 2xl:text-black-full',
});

export const default_nav = createClassString({
  position: 'absolute 2xl:static',
  left: 'lg:left-5',
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-10 lg:gap-[70px] 2xl:gap-7.5',
});
