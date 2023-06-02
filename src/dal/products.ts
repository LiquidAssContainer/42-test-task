import { Effect, attach } from 'effector';

import { Response, requestFx } from './request';
import { Product, QueryParams } from './types';

import { filterQueryParams } from '~/lib';

export const getProductsReqFx: Effect<
  QueryParams,
  Response<Product[]>
> = attach({
  effect: requestFx,
  mapParams: (params) => ({
    path: '/products',
    params: filterQueryParams(params),
  }),
});
