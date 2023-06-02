import { FC } from 'react';
import styles from './styles.module.css';

export const LoadingSpinner: FC = () => {
  return (
    <div className={styles.spinner_wrapper}>
      <div className={styles.spinner} />
    </div>
  );
};
