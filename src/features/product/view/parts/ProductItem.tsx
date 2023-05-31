import { FC } from 'react';
import styles from './styles.module.css';
import { Product } from '~/dal';
import { formatPrice } from '../../lib';

type ProductItemProps = Partial<Product>;

export const ProductItem: FC<ProductItemProps> = ({
  imageUrl,
  name,
  description,
  price,
  category,
}) => {
  return (
    <article className={styles.product}>
      {category && <div className={styles.category}>{category.name}</div>}
      <img className={styles.image} alt="Изображение товара" src={imageUrl} />
      <header className={styles.name}>{name}</header>
      <div className={styles.description}>{description}</div>
      <div className={styles.price}>{formatPrice(price!)}</div>
    </article>
  );
};
