import { FC, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import styles from './styles.module.css';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

type OptionProps = OptionHTMLAttributes<HTMLOptionElement>;

export const Select: FC<SelectProps> = ({ children, ...props }) => (
  <select {...props} className={styles.select}>
    {children}
  </select>
);

export const Option: FC<OptionProps> = ({ children, ...props }) => (
  <option {...props}>{children}</option>
);
