const path = require('path');

const config = {
  CLIENT_ENTRY: path.join(process.cwd(), 'src/app.js'),
  CLIENT_OUTPUT: path.join(process.cwd(), 'public'),
  CLIENT_MODULE: path.join(__dirname, 'src'),
  HTML_ENTRY: path.join(process.cwd(), 'src/index.html'),
  PUBLIC_PATH: '/assets/',
  VENDOR: [
    'react',
    'react-dom',
    'react-router',
    'redux',
    'react-redux'
  ],
  NODE_ENV: process.env.NODE_ENV,
  NODE_ENV_DEV: JSON.stringify('development'),
  PORT: process.env.PORT || 3030
};

module.exports = config;
