import { Product } from '~/dal';
import { domain } from './private';

export const getCategoriesFx = domain.createEffect<void, Product[]>();
