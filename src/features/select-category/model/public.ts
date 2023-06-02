import { attach } from 'effector';

import { domain } from './private';

import { Category, getCategoriesReqFx } from '~/dal';

export const $categories = domain.createStore<Category[]>([]);
export const $selectedCategory = domain.createStore<string>('');

export const getCategoriesFx = attach({
  effect: getCategoriesReqFx,
});
