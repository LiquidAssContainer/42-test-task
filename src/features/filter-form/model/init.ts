import { sample } from 'effector';
import { filterForm, submitFilterFormFx } from './public';
import { getProductsFx } from '~/features/product';
import { mapToQuery } from '~/lib';

// sample({
//   clock: submitFilterFormFx,
//   source: $filters,
//   target: getProductsFx,
// });

sample({
  clock: filterForm.formValidated,
  fn: mapToQuery,
  target: getProductsFx,
});
