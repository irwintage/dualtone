// ═══════════════════════════════════════════════
// DualTone — Service Worker
// Chrysasynth PWA · Offline Support
// ═══════════════════════════════════════════════

const CACHE_NAME = 'dualtone-v1'

const ASSETS = [
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
]

// ── INSTALL : cache tous les assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS)
    }).then(() => self.skipWaiting())
  )
})

// ── ACTIVATE : supprime les anciens caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  )
})

// ── FETCH : cache first, fallback network ──
self.addEventListener('fetch', event => {
  // ignorer les requêtes non-GET
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached

      return fetch(event.request).then(response => {
        // ne pas cacher les réponses invalides
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response
        }
        const clone = response.clone()
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone))
        return response
      }).catch(() => {
        // offline fallback : retourner index.html pour les navigations
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html')
        }
      })
    })
  )
})
