import { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './styles.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  // label?: string;
  isInvalid?: boolean;
};

export const Input: FC<InputProps> = ({ isInvalid, ...props }) => (
  <input
    {...props}
    className={cn(styles.input, { [styles.invalid]: isInvalid })}
  />
);
