const { merge } = require('webpack-merge');
const base = require('./webpack.common');
require('../server');

module.exports = (async () => {
  return await merge(base, {
    mode: 'development',
    devServer: {
      hot: true,
      client: {
        logging: 'none',
      },
      allowedHosts: ['.preview.csb.app'],
      port: 6660,
    },
  });
})();
