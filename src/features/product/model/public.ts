import { Product } from '~/dal';
import { domain } from './private';

export const $products = domain.createStore<Product[]>([]);

export const getProductsFx = domain.createEffect<void, Product[]>();
