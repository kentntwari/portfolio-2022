import { createClassString } from '../../../utilities/functions/createClassString';

export const defaultDivWrapperStyles = createClassString({
  display: 'relative',
  background: 'bg-white-full',
  padding: 'p-5 lg:px-10 lg:py-5',
  fontFamily: 'font-body',
  boxShadow: 'shadow-[0_4px_30px_rgba(196,196,196,0.25)]',
  border: 'rounded-md',
});

export const imgDefaultStyles = createClassString({
  display: 'absolute',
  width: 'w-[90px]',
  height: 'h-[90px]',
});
