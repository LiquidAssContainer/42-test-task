import { FC, FormEvent } from 'react';
import { useUnit } from 'effector-react';
import { useForm } from 'effector-forms';

import { filterForm } from '../../model';

import { $categories } from '~/features/select-category';
import { Option, Select, Input } from '~/ui';

import styles from './styles.module.css';

const sortOptions = [
  { value: '', label: 'По умолчанию' },
  { value: 'ascendingPrice', label: 'Сначала дешёвые' },
  { value: 'descendingPrice', label: 'Сначала дорогие' },
  { value: 'descendingPopularity', label: 'Сначала популярные' },
];

export const FilterForm: FC = () => {
  const [categories] = useUnit([$categories]);
  const { fields, submit, hasError } = useForm(filterForm);

  const categoryOptions = [{ id: '', name: 'Все категории' }].concat(
    categories,
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_group}>
        <label className={styles.label}>Категория</label>
        <Select
          value={fields.category.value}
          onChange={(e) => fields.category.onChange(e.target.value)}
        >
          {categoryOptions.map(({ id, name }) => (
            <Option key={id} value={id}>
              {name}
            </Option>
          ))}
        </Select>
      </div>

      <div className={styles.form_group}>
        <label className={styles.label}>Сортировка</label>
        <Select
          value={fields.sort.value}
          onChange={(e) => fields.sort.onChange(e.target.value)}
        >
          {sortOptions.map(({ value, label }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      </div>

      <div className={styles.form_group}>
        <label className={styles.label} htmlFor="minPrice">
          Мин. цена
        </label>
        <Input
          id="minPrice"
          type="number"
          isInvalid={hasError('minPrice')}
          value={fields.minPrice.value}
          onChange={(e) => fields.minPrice.onChange(e.target.value)}
        />
      </div>

      <div className={styles.form_group}>
        <label className={styles.label} htmlFor="maxPrice">
          Макс. цена
        </label>
        <Input
          id="maxPrice"
          type="number"
          isInvalid={hasError('maxPrice')}
          value={fields.maxPrice.value}
          onChange={(e) => fields.maxPrice.onChange(e.target.value)}
        />
      </div>

      <button className={styles.submit} type="submit">
        Найти
      </button>
    </form>
  );
};
