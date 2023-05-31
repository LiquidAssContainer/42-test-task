const path = require('path');

const rootDir = path.resolve(__dirname, '../');

module.exports = {
  src: path.join(rootDir, 'src'),
  static: path.join(rootDir, 'public'),
  dist: path.join(rootDir, 'dist'),
};
