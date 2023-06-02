import { sample } from 'effector';

import { $hasNextProducts, $limit, $offset } from './private';
import {
  $filters,
  $products,
  getNextProductsFx,
  getProductsFx,
  nextProductsRequested,
} from './public';

import { getProductsReqFx } from '~/dal';
import { setQueryParamsFx } from '~/features/query-params';

$products
  .on(getProductsFx.doneData, (_, products) => products)
  .on(getNextProductsFx.doneData, (products, nextProducts) =>
    products.concat(nextProducts),
  );

$hasNextProducts.reset(getProductsFx);
$offset.reset(getProductsFx);

getProductsFx.use(async (params) => {
  setQueryParamsFx(params);

  const res = await getProductsReqFx(params);
  return res.body;
});

getNextProductsFx.use(async (params) => {
  const res = await getProductsReqFx(params);
  return res.body;
});

sample({
  clock: $filters.updates,
  target: getProductsFx,
});

sample({
  clock: nextProductsRequested,
  source: {
    params: $filters,
    offset: $offset,
    isPending: getNextProductsFx.pending,
    hasNext: $hasNextProducts,
  },
  filter: ({ isPending, hasNext }) => !isPending && hasNext,
  fn: ({ params, offset }) => ({ ...params, offset: String(offset) }),
  target: getNextProductsFx,
});

sample({
  clock: [getProductsFx.doneData, getNextProductsFx.doneData],
  source: $limit,
  fn: (limit, products) => products.length === limit,
  target: $hasNextProducts,
});

sample({
  clock: [getProductsFx.doneData, getNextProductsFx.doneData],
  source: $products,
  filter: $hasNextProducts,
  fn: (products) => products.length,
  target: $offset,
});
