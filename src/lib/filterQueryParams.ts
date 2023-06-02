import { QueryParams } from '~/dal';

export const filterQueryParams = (obj: QueryParams) => {
  const params: QueryParams = {};
  for (const key in obj) {
    if (obj[key]) {
      params[key] = obj[key];
    }
  }
  return params;
};
