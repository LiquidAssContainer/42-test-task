import { FC } from 'react';

import { AppGate } from '~/features/app';
import { FilterForm } from '~/features/filter-form';
import { ProductList } from '~/features/product-list';

import styles from './App.module.css';
import './init';
import 'index.css';

export const App: FC = () => (
  <div className={styles.app}>
    <AppGate />
    <FilterForm />
    <ProductList />
  </div>
);
