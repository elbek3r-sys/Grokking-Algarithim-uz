const CACHE_NAME = 'kitob-daftari-v81';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('kitob-daftari-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

function cacheResponse(request, response) {
  if (!response.ok) return Promise.resolve(response);
  return caches.open(CACHE_NAME)
    .then(cache => cache.put(request, response.clone()))
    .catch(() => {})
    .then(() => response);
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.status >= 500) return caches.match(request).then(cached => cached || caches.match('./index.html').then(fallback => fallback || response));
      return cacheResponse(request, response);
    }).catch(async () => (await caches.match(request)) || (await caches.match('./index.html'))));
    return;
  }

  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => cacheResponse(request, response))));
});
