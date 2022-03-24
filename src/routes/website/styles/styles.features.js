import { createClassString } from '../../../utilities/functions/createClassString';

export const section = createClassString({
  display: 'relative grid',
  gridColumns: 'grid-cols-1 md:grid-cols-2 2xl:grid-cols-3',
  gap: 'gap-5 2xl:gap-7.5',
  margin: 'mt-20 mx-auto',
  width: 'lg:w-[668px] 2xl:w-4/5',
});
