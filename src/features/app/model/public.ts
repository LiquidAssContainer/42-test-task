import { forward, sample } from 'effector';
import { createGate } from 'effector-react';
import { getProductsFx } from '~/features/product/model/public';

// import { getCurrencyRatesFx } from '~/features/currency-rates'
// import { initAppDataFx } from '~/features/currency-table/model/public'

export const AppGate = createGate();

forward({
  from: AppGate.open,
  to: getProductsFx,
});
