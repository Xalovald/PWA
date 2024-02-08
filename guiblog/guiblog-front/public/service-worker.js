// public/service-worker.js

const PRECACHE_NAME = 'guiblog-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/index.js',
  '/index.css',
  '/app.css',
  '/manifest.json',
  '/App.js',
  '/fallback.json',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PRECACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
