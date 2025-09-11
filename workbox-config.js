module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,ico,svg}',
  ],
  swDest: 'build/service-worker.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'lazarus-images',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: /\.(?:css|js)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'lazarus-assets',
      },
    },
    {
      urlPattern: /^https:\/\/lazarus-landing-page\.com/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'lazarus-pages',
        networkTimeoutSeconds: 3,
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        },
      },
    },
  ],
};