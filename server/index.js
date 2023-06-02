// сделано на основе моксервера в демке архитектуры 42px
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { random } = require('./lib');
const { categoryList, productParameters } = require('./data');
require('dotenv').config();

const app = express();
const port = Number(process.env.MOCK_SERVER_PORT) || 6660;

const generateProduct = (category) => {
  const parameters = productParameters[category.id];

  const popularity = Math.floor(Math.random() * 100 + 1);

  const [min, max] = parameters.price;
  const price = Math.floor(Math.random() * (max - min) + 1) + min;

  const product = { category, popularity, price, id: random.quickUUID() };

  for (const property of ['name', 'imageUrl', 'description']) {
    product[property] = random.arrayElement(parameters[property]);
  }

  return product;
};

const generateProductCollection = (count, categories) => {
  return new Array(count)
    .fill(null)
    .map(() => generateProduct(random.arrayElement(categories)));
};

const getFilteredProducts = (
  products,
  { sort, category, minPrice = 0, maxPrice = Infinity, offset = 0, limit = 30 },
) => {
  const filteredProducts = products.filter(
    ({ category: { id }, price }) =>
      (!category || category === id) && minPrice <= price && maxPrice >= price,
  );

  switch (sort) {
    case 'ascendingPrice':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'descendingPrice':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'descendingPopularity':
      filteredProducts.sort((a, b) => b.popularity - a.popularity);
  }

  return filteredProducts.slice(
    Number(offset) || 0,
    Number(limit) + Number(offset) || 30,
  );
};

const products = generateProductCollection(180, categoryList);
const delay = 500;

app.use(cors());
app.use(bodyParser.json());

app.get('/categories', (_, res) => {
  setTimeout(() => res.json(categoryList), delay);
});

app.get('/products', ({ query }, res) => {
  setTimeout(() => res.json(getFilteredProducts(products, query)), delay);
});

app.listen(port, () => {
  console.log(`Api: http://localhost:${port}`);
});
