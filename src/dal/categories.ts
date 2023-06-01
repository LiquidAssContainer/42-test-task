import { Effect, attach, createEffect } from 'effector';
import { Response, requestFx } from './request';
import { Category } from './types/category';

export const getCategoriesReqFx: Effect<void, Response<Category[]>> = attach({
  effect: requestFx,
  mapParams: () => ({
    path: '/categories',
  }),
  // mapResult: (res) => res.body,
});
