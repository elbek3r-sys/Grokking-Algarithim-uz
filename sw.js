const CACHE_NAME = 'kitob-daftari-v100';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './assets/writing-room.webp', './assets/writing-studio.webp', './assets/rainforest.ogg'];

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

async function isAppDocument(response) {
  const contentType = (response.headers.get('content-type') || '').split(';', 1)[0].trim().toLowerCase();
  if (!response.ok || contentType !== 'text/html') return false;
  try {
    const html = await response.clone().text();
    return html.includes('id="coverScreen"') && html.includes('id="pageEditor"');
  } catch {
    return false;
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (new URL(request.url).searchParams.has('__kitob_update_check')) {
    event.respondWith(fetch(new Request(request, { cache: 'no-store' })));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(async response => {
      if (response.status >= 500) return caches.match(request).then(cached => cached || caches.match('./index.html').then(fallback => fallback || response));
      return await isAppDocument(response) ? cacheResponse(request, response) : response;
    }).catch(async () => (await caches.match(request)) || (await caches.match('./index.html'))));
    return;
  }

  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => cacheResponse(request, response))));
});
