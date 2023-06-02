import { root } from '~/root';

export const domain = root.createDomain('product-list');

export const $limit = domain.createStore<number>(30);
export const $offset = domain.createStore<number>(0);
export const $hasNextProducts = domain.createStore<boolean>(false);
