import { createClassString } from '../../utilities/functions/createClassString';

export const default_demo_snippet = createClassString({
  width: 'lg:w-3/4 xl:w-[600px]',
  aspectRatio: 'lg:aspect-video',
  border: 'lg:rounded-md',
  dropShadow: 'lg:drop-shadow-regular',
});

export const default_demo_card = createClassString({
  position: 'absolute',
  width: 'w-[301px]',
  background: 'bg-white-full',
  padding: 'p-5',
  boxShadow: 'shadow-snippet',
  border: 'rounded-md',
  fontFamily: 'font-body',
  fontSize: 'text-base',
  lineHeight: 'leading-tight',
});

export const arrow_styles = {
  code: createClassString({
    position: 'absolute',
    top: 'lg:-top-[5rem] 2xl:-top-[1rem] 2xl:-top-20',
    left: '-left-20 2xl:-left-14',
  }),
  figma: createClassString({
    position: 'absolute',
    top: 'lg:-top-2 2xl:-top-14',
    left: '-left-20',
  }),
  website: createClassString({
    position: 'absolute',
    top: 'lg:top-60 2xl:top-[17rem]',
    left: '-left-20',
  }),
};

export const parent_styles = {
  code: createClassString({
    order: 'order-1',
    position: 'relative',
    zIndex: 'z-10',
    transform: 'lg:transform',
    translateX: 'lg:translate-x-6 2xl:-translate-x-[50px]',
    translateY: '-translate-y-10 2xl:-translate-y-[400px]',
  }),
  figma: createClassString({
    order: 'order-0',
    transform: 'lg:transform',
    translateX: 'lg:translate-x-56 xl:translate-x-[99px] 2xl:translate-x-36',
    translateY: '2xl:-translate-y-[274px]',
  }),
  website: createClassString({
    order: 'order-last',
    position: 'relative',
    zIndex: 'z-20',
    transform: 'lg:transform',
    translateX: 'lg:translate-x-56 xl:translate-x-[99px] 2xl:translate-x-[142px]',
    translateY: '-translate-y-[74px] 2xl:-translate-y-[530px]',
  }),
};
