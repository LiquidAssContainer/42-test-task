import { FC } from 'react';
import { useUnit } from 'effector-react';

import { ProductItem } from '../parts';
import {
  $areNextProductsLoading,
  $areProductsLoading,
  $products,
  nextProductsRequested,
} from '../../model';

import { LoadingSpinner } from '~/ui';
import { useOnScrollEnd } from '~/lib';

import styles from './styles.module.css';

export const ProductList: FC = () => {
  const [products, areProductsLoading, areNextProductsLoading] = useUnit([
    $products,
    $areProductsLoading,
    $areNextProductsLoading,
  ]);

  useOnScrollEnd(() => {
    nextProductsRequested();
  }, 220);

  return areProductsLoading ? (
    <LoadingSpinner />
  ) : (
    <ul className={styles.product_list}>
      {products.map((item) => (
        <li key={item.id}>
          <ProductItem {...item} />
        </li>
      ))}
      {areNextProductsLoading && <LoadingSpinner />}
    </ul>
  );
};
