const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/hero-image.webp',
  '/project1.webp',
  '/project2.webp',
  '/project3.webp',
  '/blog-image1.webp',
  '/blog-image2.webp',
  '/blog-image3.webp',
  '/blog-image4.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});
