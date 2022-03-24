import { createClassString } from '../../../utilities/functions/createClassString';

export const section = createClassString({
  display: 'relative flex',
  flexDirection: 'flex-col',
  gap: 'gap-7.5',
  width: 'w-full',
  margin: 'mt-28',
});

export const divWrapperOuter = createClassString({
  display: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'lg:items-center',
  gap: 'gap-5',
});

export const divWrapperInner = createClassString({
  width: 'w-full',
  margin: 'mt-2.5',
  display: 'flex',
  flexDirection: 'flex-col',
  alignItems: 'items-start lg:items-center',
  gap: 'gap-5',
});

export const heading = createClassString({
  width: 'lg:w-1/2 xl:w-3/5',
  textAlign: 'text-center',
});

export const paragraph = createClassString({
  width: 'lg:w-2/5 xl:w-[627px]',
  textAlign: 'lg:text-center',
  texture: 'xl:major',
});

export const articleFAQ = createClassString({
  width: 'lg:w-[68%] xl:w-fit',
  boxShadow: 'xl:shadow-regular',
});

export const divQuestionFAQ = createClassString({
  background: 'bg-white-full',
  padding: 'py-2.5 lg:py-5 px-5 lg:px-10',
  border: 'border-b border-solid border-[#c4c4c4] rounded-t-md',
});

export const divAnswerFAQ = createClassString({
  background: 'bg-white-70',
  padding: 'py-2.5 lg:py-5 px-5 lg:px-10',
  border: 'rounded-b-md',
});
