const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { random } = require('./lib');
const { categoryList, productParameters } = require('./data');
require('dotenv').config();

const app = express();
const port = Number(process.env.MOCK_SERVER_PORT) || 3000;

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
  let filteredProducts = products;
  // let categoriesArray = null;

  // if (categories) {
  //   categoriesArray = categories.split(' ');
  // }

  filteredProducts = products.filter(
    ({ category: productCategory, price }) =>
      // (!categoriesArray || categoriesArray.includes(category)) &&
      (!category || category === productCategory.id) &&
      minPrice <= price &&
      maxPrice >= price,
  );

  if (sort) {
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
  }

  return filteredProducts.slice(
    Number(offset) || 0,
    Number(limit) + Number(offset) || 30,
  );
};

const products = generateProductCollection(120, categoryList);

app.use(cors());
app.use(bodyParser.json());

app.get('/categories', (_, res) => {
  res.json(categoryList);
});

app.get('/products', ({ query }, res) => {
  console.log(query);
  res.json(getFilteredProducts(products, query));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Api: http://localhost:${port}`);
});
