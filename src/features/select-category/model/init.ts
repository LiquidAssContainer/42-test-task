import { sample } from 'effector';
import { $categories, getCategoriesFx } from './public';

sample({
  clock: getCategoriesFx.doneData,
  fn: (res) => res.body,
  target: $categories,
});
