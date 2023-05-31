import { sample } from 'effector';
import { $products, getProductsFx } from './public';

getProductsFx.use(async () => {
  // пока тестию респонс
  try {
    const response = await fetch('http://localhost:3000/products');
    const parsed = await response.json();
    console.log(parsed);
    return parsed;
  } catch {
    // обработку ошибок потом надо сделать
  }
});

sample({
  clock: getProductsFx.doneData,
  target: $products,
});
