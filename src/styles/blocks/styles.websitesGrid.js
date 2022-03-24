import { createClassString } from '../../utilities/functions/createClassString';

export const websites_grid = createClassString({
  width: '2xl:w-fit',
  margin: '2xl:mx-auto',
  padding: 'lg:px-9 2xl:p-0',
  display: 'grid',
  gricColumns: 'grid-cols-1 lg:grid-cols-2',
  gap: 'gap-5 lg:gap-7.5',
});
