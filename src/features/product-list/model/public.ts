import { Product, QueryParams } from '~/dal';
import { domain } from './private';

export const $products = domain.createStore<Product[]>([]);
export const $filters = domain.createStore<QueryParams>({});

export const nextProductsRequested = domain.createEvent();

export const getProductsFx = domain.createEffect<QueryParams, Product[]>();
export const getNextProductsFx = domain.createEffect<QueryParams, Product[]>();

export const $areProductsLoading = getProductsFx.pending;
export const $areNextProductsLoading = getNextProductsFx.pending;
