if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const r = document.createElement('script');
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, i, a) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const n = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case 'exports':
                return r;
              case 'module':
                return n;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = a(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define('./sw.js', ['./workbox-ea903bce'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url:
            '/_next/static/chunks/0d34bbcf760083f8933f620e1e59619ac6d07133.2fdf3304c04999a93c34.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/484bcb1e.8e6d046056d960022fc6.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/52066749.00f7cb68a394ccf6e32f.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/64dba1ef.5cd02cf8b9b466254bdc.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url:
            '/_next/static/chunks/b36f0833dcb27f236d4872c3084c16912c8c2b4c.86d866854b81d85427e7.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url:
            '/_next/static/chunks/b444d84e76f83b423f3288dac5c61f51a20c6d36.2467aeb1cff676f04c4c.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/commons.444bfe66a2a2d6e0a387.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url:
            '/_next/static/chunks/d0069258034ea342f275c147281a0bdf3ac0220f.fc0d41b6da1e9cfced78.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/framework.8c52b5b4b899e1d1fad4.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/main-b90641496835dc538f6d.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/pages/404-41dfa90df04c624cc4c7.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/pages/_app-f20f8d28aaa6a67f341f.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/pages/_error-39f9cb412aa1c6704d9b.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/pages/index-6e302c118db98159c17b.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/pages/library-57f21a5b2105853a324b.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url:
            '/_next/static/chunks/pages/privacypolicy-f972a53f1e16f41ebaea.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/pages/search-9b11ad09844d136582ed.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/pages/setting-d6629db117feb551dcdd.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/pages/terms-5553fde7f6a3f380ff30.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/polyfills-0365b576862b20e80554.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/chunks/webpack-245f049e565ebf942e09.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/css/c6f87279a108523e215c.css',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/e_PlFsVuwu1oZeyK6Pryl/_buildManifest.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/_next/static/e_PlFsVuwu1oZeyK6Pryl/_ssgManifest.js',
          revision: 'e_PlFsVuwu1oZeyK6Pryl',
        },
        {
          url: '/icons/android-chrome-128x128.png',
          revision: 'cd734855ad77a9d7aafc3f0a36381fa2',
        },
        {
          url: '/icons/android-chrome-144x144.png',
          revision: 'a04b977bfa57443cef21521cd296372c',
        },
        {
          url: '/icons/android-chrome-152x152.png',
          revision: '61402903dbc05d8f0ed37482200793cb',
        },
        {
          url: '/icons/android-chrome-192x192.png',
          revision: '0efc28e6735a19a52106b2708e970b62',
        },
        {
          url: '/icons/android-chrome-256x256.png',
          revision: '04935552e4690fce5bdb33d483c680bd',
        },
        {
          url: '/icons/android-chrome-36x36.png',
          revision: '43995e25c49156f2c703fb437854d5d4',
        },
        {
          url: '/icons/android-chrome-384x384.png',
          revision: '8f5a947123fc4fbd4f2dc62a4fdbfb2e',
        },
        {
          url: '/icons/android-chrome-48x48.png',
          revision: 'ed72740befb5a9ff5d1fe8361d8c62a3',
        },
        {
          url: '/icons/android-chrome-512x512.png',
          revision: '34f4c5312916634b7ad5ba691b30d3ff',
        },
        {
          url: '/icons/android-chrome-72x72.png',
          revision: '57ce7c8c696a6c69c24e885a7baafecb',
        },
        {
          url: '/icons/android-chrome-96x96.png',
          revision: '86e6e2929793224d56db8c0c6142c5c5',
        },
        {
          url: '/icons/apple-touch-icon-180x180.png',
          revision: '21914d9783cdfb102de92f56b504625e',
        },
        {
          url: '/icons/favicon.ico',
          revision: '53218e005a196426ab9b38fb72001c6e',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: '0efc28e6735a19a52106b2708e970b62',
        },
        {
          url: '/icons/site-tile-150x150.png',
          revision: 'a6629cf087db715cf3572456bf7c3d9e',
        },
        {
          url: '/icons/site-tile-310x150.png',
          revision: '920447507a2ccf5a07ae0266d3abf74d',
        },
        {
          url: '/icons/site-tile-310x310.png',
          revision: 'f539ceb94a03450129914d6dfe7321dc',
        },
        {
          url: '/icons/site-tile-70x70.png',
          revision: '3618a9274418e5ac438f3c6716bf0e60',
        },
        {
          url: '/images/arrow-left.svg',
          revision: 'edbe04d0dfcb5fec0a4d133dd86415ae',
        },
        {
          url: '/images/book-memory-ogp1.jpg',
          revision: 'fc66bc4b9a18e79cb9bb4e4bf99b3ffc',
        },
        {
          url: '/images/book-memory-ogp2.jpg',
          revision: '82e9a1ee8329477ce9742b90b90d6475',
        },
        {
          url: '/images/book-no-image.jpg',
          revision: 'd52ececa72bf4a556ff7fadaf2a98d78',
        },
        {
          url: '/images/brain-blueman.svg',
          revision: 'b6df675543b025a8667efab09951fda8',
        },
        {
          url: '/images/check.svg',
          revision: '193f0ab03e612a3c9d1fbb5e26ea4d26',
        },
        {
          url: '/images/dots.svg',
          revision: '0fd435339ba0866ad82955ef4fa9beb4',
        },
        {
          url: '/images/logo_BookMemory.png',
          revision: '9bf80b99991fab78ae55d238098f6553',
        },
        {
          url: '/images/notebook-blueman.svg',
          revision: 'da73107c0b782a9b816aec17091a0145',
        },
        {
          url: '/images/questions-yellowman.svg',
          revision: 'be9e0698dcb5a82d3ac4d48f6b3a9503',
        },
        {
          url: '/images/reading-yellowman.svg',
          revision: '2e4e396df37b559c8ba35952b692dfd1',
        },
        {
          url: '/images/right-arrow.svg',
          revision: 'd1ef3e1394775476f27793544a7cd1b4',
        },
        {
          url: '/images/search.svg',
          revision: '38b968c6a6752b3fb0e890cc2a8c0c5a',
        },
        {
          url: '/images/welcome-step1.svg',
          revision: '96773ef02392670e077daf93256ceccc',
        },
        {
          url: '/images/welcome-step2.svg',
          revision: 'a7b5a29e69ac2568bdba4f2eddcc2198',
        },
        {
          url: '/images/welcome-step3.svg',
          revision: '84dae41d9560a8247cebb8dcd7a3ebfe',
        },
        {
          url: '/images/welcome-top-view.svg',
          revision: '20b968371a8b3e7153cf72c28f12a4cb',
        },
        { url: '/manifest.json', revision: 'e6b21e483500b04419a3dc93366664e0' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: r,
              state: i,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    );
});
