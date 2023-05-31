const categoryList = [
  { id: 'preserves', name: 'Консервы' },
  { id: 'sharks', name: 'Акулы' },
  { id: 'beer', name: 'Пиво' },
  // { id: 'gpu', name: 'Видеокарты' },
  // { id: 'haribo', name: 'Haribo' },
  // { id: 'smartphones', name: 'Смартфоны' },
];

const productParameters = {
  preserves: {
    name: ['Маслины'],
    price: [150, 600],
    imageUrl: ['/images/preserve1.webp'],
    description: ['Очень вкусно, базарю'],
  },
  sharks: {
    name: ['Акула'],
    price: [10000, 99000],
    imageUrl: ['/images/shark1.jpg'],
    description: ['Nuff said'],
  },
  beer: {
    name: ['Пиво JAWS'],
    price: [200, 400],
    imageUrl: ['/images/beer1.png', '/images/beer2.png'],
    description: ['Отличное пиво', 'Замечательное пиво', 'Прекрасное пиво'],
  },
};

module.exports = { categoryList, productParameters };
