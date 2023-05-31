import { FC } from 'react';

import './init';

import { withProviders } from './app/providers';
import { ProductList } from '~/features/product/view/entries/ProductList';
import { AppGate } from '~/features/app';
import 'index.css';

export const App: FC = withProviders(() => (
  <>
    <AppGate />
    <ProductList />
  </>
));
