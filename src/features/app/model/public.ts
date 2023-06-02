import { sample } from 'effector';
import { createGate } from 'effector-react';

import { getQueryParamsFx } from '~/features/query-params';
import { getCategoriesFx } from '~/features/select-category';

export const AppGate = createGate();

sample({
  clock: AppGate.open,
  target: [getCategoriesFx, getQueryParamsFx],
});
