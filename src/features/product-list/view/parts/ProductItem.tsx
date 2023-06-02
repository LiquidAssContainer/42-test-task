import { FC } from 'react';
import { Product } from '~/dal';
import { formatPrice } from '../../lib';
import styles from './styles.module.css';

type ProductItemProps = Omit<Product, 'id'>;

export const ProductItem: FC<ProductItemProps> = ({
  imageUrl,
  name,
  description,
  price,
  category,
  popularity,
}) => {
  const pop = (popularity / 10).toFixed(1);

  return (
    <article className={styles.product}>
      <div className={styles.category}>{category.name}</div>
      <img className={styles.image} alt="Изображение товара" src={imageUrl} />
      <header className={styles.name}>{name}</header>
      <div className={styles.description}>{description}</div>
      <div className={styles.additional_info}>
        <div className={styles.price}>{formatPrice(price)}</div>
        <div className={styles.popularity}>POP: {pop}</div>
      </div>
    </article>
  );
};
