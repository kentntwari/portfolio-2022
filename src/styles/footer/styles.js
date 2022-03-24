import { createClassString } from '../../utilities/functions/createClassString';

export const divider = createClassString({
  background: 'lg:bg-black-full',
  display: 'hidden lg:block',
  margin: 'lg:mt-33 2xl:mt-28',
  width: 'lg:w-full',
  height: 'lg:h-px',
});

export const mobile_divider = createClassString({
  display: 'lg:hidden',
  backgound: 'bg-black-full',
  width: 'w-full',
  height: 'h-px',
});

export const footer = createClassString({
  position: 'relative',
  zIndex: 'z-40',
  margin: 'mt-33 lg:mt-7',
  dislay: 'flex',
  flexDirection: 'flex-col lg:flex-row-reverse',
  alignItems: 'lg:items-center',
  gap: 'gap-14 lg:gap-7',
});

export const section_right = createClassString({
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-[43px]',
});

export const section_left = createClassString({
  width: 'w-full',
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-7',
});

export const section_contact = createClassString({
  width: 'w-full',
  display: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'lg:items-end',
  gap: 'gap-5',
});

export const section_right_div_wrapper = createClassString({
  flexGrow: 'grow-[2]',
  dislay: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-5',
});

export const section_right_paragraph = createClassString({
  width: 'xl:w-[86%] 2xl:w-4/5',
  textAlign: 'lg:text-right',
  justifySelf: 'xl:self-end',
});

export const section_nav_copyright = createClassString({
  flexGrow: 'grow',
  margin: 'lg:mt-20',
  display: 'flex',
  flexDirection: 'flex-col',
  gap: 'gap-28',
});

export const link_contact = createClassString({
  fontWeight: 'font-bold',
  textDecoration: 'underline underline-offset-8 decoration-2 decoration-black-full',
});

export const navigation = createClassString({
  width: 'w-full',
  display: 'flex',
  justifyContent: 'justify-between lg:justify-start',
  gap: 'lg:gap-10',
});

export const paragraph_copyright = createClassString({
  display: 'flex',
  alignItems: 'items-center',
  gap: 'gap-2.5',
});

export const img_copyright = createClassString({
  width: 'w-5',
  height: 'h-5',
});
