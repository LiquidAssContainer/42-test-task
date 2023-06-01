import { domain } from './private';

export const getQueryParamsFx = domain.createEffect<void, any>();
export const setQueryParamsFx = domain.createEffect<any, any>();
