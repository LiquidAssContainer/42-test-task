import { QueryParams } from '~/dal';
import { domain } from './private';

export const getQueryParamsFx = domain.createEffect<void, QueryParams>();
export const setQueryParamsFx = domain.createEffect<QueryParams, void>();
