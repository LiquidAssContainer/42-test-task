import { Effect, attach, createEffect } from 'effector';
import { Response, requestFx } from './request';
import { Category } from './types/category';
import { Product } from './types';

export const getProductsReqFx: Effect<any | void, Response<Product[]>> = attach(
  {
    effect: requestFx,
    mapParams: (params) => ({
      path: '/products',
      params,
    }),
    // mapResult: (res) => res.body,
  },
);
