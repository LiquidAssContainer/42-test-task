import { attach } from 'effector';
import { getCategoriesReqFx } from '~/dal/categories';
import { domain } from './private';
import { Category } from '~/dal/types/category';

export const $categories = domain.createStore<Category[]>([]);
export const $selectedCategory = domain.createStore<string | null>(null);

export const getCategoriesFx = attach({
  effect: getCategoriesReqFx,
});
