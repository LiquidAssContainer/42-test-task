import { sample } from 'effector';
import { getQueryParamsFx } from './public';
import { filterForm } from '~/features/filter-form';
import { getProductsFx } from '~/features/product';
import { mapToQuery } from '~/lib';

getQueryParamsFx.use(async () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log(123, params);
  return params;
});

sample({
  clock: getQueryParamsFx.doneData,
  fn: mapToQuery,
  target: [getProductsFx, filterForm.setForm],
});
