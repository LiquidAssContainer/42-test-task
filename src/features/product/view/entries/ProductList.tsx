import { FC } from 'react';
import { useUnit } from 'effector-react';
import styles from './styles.module.css';
import { $products, getNextProductsFx } from '../../model/public';
import { ProductItem } from '../parts';
import { Product } from '~/dal';
import { $hasNext } from '../../model/private';

export const ProductList: FC = () => {
  const [products, hasNext, getNextProducts] = useUnit([
    $products,
    $hasNext,
    getNextProductsFx,
  ]);

  const handleClick = () => {
    getNextProducts();
  };

  return (
    <ul className={styles.product_list}>
      {products.map((item: Product) => (
        <li key={item.id}>
          <ProductItem {...item} />
        </li>
      ))}
      {hasNext && <button onClick={handleClick}>Load more</button>}
    </ul>
  );
};
