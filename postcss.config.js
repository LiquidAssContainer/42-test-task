const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker');
const cssNano = require('cssnano');

module.exports = {
  // parser: 'postcss-scss',
  // syntax: 'postcss-scss',
  plugins: [autoprefixer, mqPacker, cssNano({
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
      },
    ],
  })],
};

