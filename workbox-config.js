module.exports = {
  globDirectory: 'public/',
  globPatterns: [
    '**/*.{html,css,js}'
  ],
  swDest: 'public/service-worker.js',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-stylesheets'
      }
    },
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        expiration: {
          // cache fonts for 7 days
          maxAgeSeconds: 60 * 60 * 24 * 7,
          maxEntries: 30
        }
      }
    }
  ]
};

// "handler" must be one of [CacheFirst, CacheOnly, NetworkFirst, NetworkOnly, StaleWhileRevalidate]
// https://www.youtube.com/watch?v=U5S6XRqT6Ow
