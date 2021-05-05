const { merge } = require('webpack-merge');
const withPWA = require('next-pwa');
module.exports = withPWA({
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
  pwa: {
    dest: 'public',
  },
});
