import { Effect, attach } from 'effector';

import { Response, requestFx } from './request';
import { Category } from './types';

export const getCategoriesReqFx: Effect<void, Response<Category[]>> = attach({
  effect: requestFx,
  mapParams: () => ({
    path: '/categories',
  }),
});
