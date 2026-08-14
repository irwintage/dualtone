// ═══════════════════════════════════════════════
// DualTone — Service Worker
// Chrysasynth PWA · Offline Support
// ═══════════════════════════════════════════════

const CACHE_NAME = 'dualtone-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './Tone.js',
  './fonts/cinzel-v26-latin-regular.woff2',
  './fonts/cinzel-v26-latin-500.woff2',
  './fonts/inter-v20-latin-regular.woff2',
  './fonts/inter-v20-latin-300.woff2',
  './fonts/inter-v20-latin-500.woff2',
  './icon-192.png',
  './icon-512.png'
];

// INSTALL
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ACTIVATE
self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// FETCH
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Ignore non-GET requests
  if (event.request.method !== 'GET') return;

  // Ignore chrome-extension://, blob:, data:, etc.
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        return cached;
      }

      return fetch(event.request)
        .then(response => {
          // Don't cache invalid responses
          if (
            !response ||
            response.status !== 200 ||
            response.type === 'opaque'
          ) {
            return response;
          }

          const clone = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone).catch(error => {
              console.warn(
                '[DualTone SW] cache.put failed:',
                event.request.url,
                error
              );
            });
          });

          return response;
        })
        .catch(() => {
          // Offline fallback for page navigation
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});
