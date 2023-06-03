import { sample } from 'effector';

import { getQueryParamsFx, setQueryParamsFx } from './public';

import { filterForm } from '~/features/filter-form';
import { $filters } from '~/features/product-list';

import { mapFromQuery, filterQueryParams } from '~/lib';

getQueryParamsFx.use(async () => mapFromQuery(window.location.search));

setQueryParamsFx.use(async (params) => {
  const filteredParams = filterQueryParams(params);
  const url = new URL(window.location.href);
  url.search = new URLSearchParams(filteredParams).toString();
  window.history.replaceState({}, '', url.toString());
});

sample({
  clock: getQueryParamsFx.doneData,
  target: [$filters, filterForm.setForm],
});
