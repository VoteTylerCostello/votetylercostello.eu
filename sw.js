self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('votetc').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/es.html',
       '/404.html',
       '/original.html',
       '/img/tyler_costello_y7.png',
       '/LICENCE.txt'
     ]);
   })
 );
});
self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
