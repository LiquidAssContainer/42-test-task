const { merge } = require('webpack-merge');
const base = require('./webpack.common');

module.exports = (async () => {
  return await merge(base, {
    mode: 'production',
  });
})();
