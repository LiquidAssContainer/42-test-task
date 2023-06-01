import { FC } from 'react';

import './init';

import { ProductList } from '~/features/product/view/entries/ProductList';
import { AppGate } from '~/features/app';
import { FilterForm } from './features/filter-form';
import styles from './App.module.css';
import 'index.css';

export const App: FC = () => (
  <div className={styles.app}>
    <AppGate />
    <FilterForm />
    <ProductList />
  </div>
);
