const CACHE='lanmic-common-price-finder-v1';
const FILES=['./','./index.html','./products.json','./manifest.webmanifest','./source_structure.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
