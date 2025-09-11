importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

   workbox.routing.registerRoute(
     ({ request }) => request.destination === 'image' || request.destination === 'style' || request.destination === 'script',
     new workbox.strategies.CacheFirst({
       cacheName: 'lazarus-assets',
       plugins: [
         new workbox.expiration.ExpirationPlugin({
           maxEntries: 60,
           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
         }),
       ],
     })
   );

   workbox.routing.registerRoute(
     ({ request }) => request.mode === 'navigate',
     new workbox.strategies.StaleWhileRevalidate({
       cacheName: 'lazarus-pages',
     })
   );

   workbox.core.skipWaiting();
   workbox.core.clientsClaim();