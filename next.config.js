const { merge } = require('webpack-merge');
module.exports = {
  images: {
    domains: ['images-na.ssl-images-amazon.com', 'books.google.com'],
  },
  distDir: './.next',
  webpack: (config) => {
    return merge(config, {
      resolve: {
        alias: {
          firebaseui: 'firebaseui-ja',
        },
      },
    });
  },
};
