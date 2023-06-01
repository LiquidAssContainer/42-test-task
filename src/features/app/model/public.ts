import { forward, sample } from 'effector';
import { createGate } from 'effector-react';
import { getProductsFx } from '~/features/product/model/public';
import { getQueryParamsFx } from '~/features/query-params';
import { getCategoriesFx } from '~/features/select-category/model/public';

// import { getCurrencyRatesFx } from '~/features/currency-rates'
// import { initAppDataFx } from '~/features/currency-table/model/public'

export const AppGate = createGate();

sample({
  clock: AppGate.open,
  target: [getCategoriesFx, getQueryParamsFx],
});
