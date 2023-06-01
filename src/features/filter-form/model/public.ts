import { combine } from 'effector';
import { domain } from './private';
import { $selectedCategory } from '~/features/select-category/model/public';
import { createForm } from 'effector-forms';

export const submitFilterFormFx = domain.createEffect();

export const filterForm = createForm({
  validateOn: ['submit'],
  fields: {
    category: {
      init: '',
    },
    sort: {
      init: '',
    },
    minPrice: {
      init: '',
      rules: [
        {
          name: 'minPrice',
          validator: (minPrice, { maxPrice }) => +minPrice <= +maxPrice,
        },
      ],
    },
    maxPrice: {
      init: '',
      rules: [
        {
          name: 'maxPrice',
          validator: (maxPrice, { minPrice }) => +minPrice <= +maxPrice,
        },
      ],
    },
  },
});

filterForm.$values.watch((values) => {
  console.log(values);
});
