import { FC } from 'react';
import styles from './styles.module.css';
import { useUnit } from 'effector-react';
import { $products } from '../../model/public';
import { ProductItem } from '../parts';
import { Product } from '~/dal';

export const ProductList: FC = () => {
  const [products] = useUnit([$products]);

  return (
    <ul className={styles.product_list}>
      {products.map((item: Product) => (
        <li key={item.id}>
          <ProductItem {...item} />
        </li>
      ))}
    </ul>
  );
};
