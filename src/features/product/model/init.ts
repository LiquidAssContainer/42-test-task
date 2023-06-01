import { sample } from 'effector';
import { $products, getNextProductsFx, getProductsFx } from './public';
import { $hasNext, $limit, $offset } from './private';
import { Product } from '~/dal';
import { Form } from 'effector-forms/dist-types';
import { filterForm } from '~/features/filter-form/model';
import { mapToQuery } from '~/lib';
import { getProductsReqFx } from '~/dal/products';

// getProductsFx.use(async () => {

//   const res = await getProductsReqFx();
//   return res.body;
//   // try {
//   //   const queryParams = new URLSearchParams({
//   //     offset: `${$offset.getState()}`,
//   //   });
//   //   const response = await fetch(
//   //     `http://localhost:3000/products?${queryParams}`,
//   //   );
//   //   return await response.json();
//   // } catch {
//   //   // обработку ошибок потом надо сделать
//   // }
// });

getProductsFx.use(async (formData: any) => {
  const res = await getProductsReqFx(formData);
  return res.body;
});

getNextProductsFx.use(async () => {
  try {
    const queryParams = new URLSearchParams({
      offset: `${$offset.getState()}`,
    });
    const response = await fetch(
      `http://localhost:3000/products?${queryParams}`,
    );
    return await response.json();
  } catch {
    // обработку ошибок потом надо сделать
  }
});

sample({
  clock: getProductsFx.doneData,
  target: $products,
});

sample({
  clock: getNextProductsFx.doneData,
  source: $products,
  fn: (products, nextProducts) => products.concat(nextProducts),
  target: $products,
});

sample({
  clock: [getProductsFx.doneData, getNextProductsFx.doneData],
  source: $limit,
  fn: (limit: number, products: Product[]) => products.length === limit,
  target: $hasNext,
});

sample({
  clock: [getProductsFx.doneData, getNextProductsFx.doneData],
  source: $products,
  filter: $hasNext,
  fn: (products) => products.length,
  target: $offset,
});

$hasNext.watch(console.log);
$products.watch(console.log);
