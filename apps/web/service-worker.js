// apps/web/service-worker.js
const CACHE_NAME = 'bootcamp-cep-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  // Estratégia: Cache First
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});