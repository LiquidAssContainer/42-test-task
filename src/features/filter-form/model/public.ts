import { createForm } from 'effector-forms';

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
          validator: (minPrice, { maxPrice }) =>
            minPrice && maxPrice ? +minPrice <= +maxPrice : true,
        },
      ],
    },
    maxPrice: {
      init: '',
      rules: [
        {
          name: 'maxPrice',
          validator: (maxPrice, { minPrice }) =>
            minPrice && maxPrice ? +minPrice <= +maxPrice : true,
        },
      ],
    },
  },
});

// filterForm.$values.watch((values) => {
//   console.log(values);
// });
