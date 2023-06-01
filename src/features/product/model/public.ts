import { Product } from '~/dal';
import { domain } from './private';

export const $products = domain.createStore<Product[]>([]);

export const getProductsFx = domain.createEffect<void | any, Product[]>();

export const getNextProductsFx = domain.createEffect<void, Product[]>();
