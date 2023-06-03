const categoryList = [
  { id: 'preserves', name: 'Консервы' },
  { id: 'sharks', name: 'Акулы' },
  { id: 'beer', name: 'Пиво' },
  { id: 'dinos', name: 'Динозавры' },
];

const productParameters = {
  preserves: {
    name: ['Маслины', 'Веганская тушёнка', 'Какие-то консервы'],
    price: [150, 600],
    imageUrl: ['/images/preserve1.webp'],
    description: ['Очень вкусно, базарю'],
  },
  sharks: {
    name: ['Акула'],
    price: [10000, 99000],
    imageUrl: ['/images/shark1.jpg'],
    description: ['Да это же окула'],
  },
  beer: {
    name: ['Пиво JAWS'],
    price: [200, 400],
    imageUrl: ['/images/beer1.png', '/images/beer2.png', '/images/beer3.png'],
    description: [
      'Отличное пиво',
      'Замечательное пиво',
      'Прекрасное пиво',
      'Главное, что не durak',
    ],
  },
  dinos: {
    name: ['Динозаврик', 'Динозаврище'],
    price: [10000, 200000],
    imageUrl: ['/images/dino1.jpg', '/images/dino2.jpg', '/images/dino3.jpg'],
    description: ['Отличный динозавер'],
  },
};

module.exports = { categoryList, productParameters };
