import { sample } from 'effector';
import { filterForm } from './public';
import { $filters } from '~/features/product-list';

sample({
  clock: filterForm.formValidated,
  target: $filters,
});
