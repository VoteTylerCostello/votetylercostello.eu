self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('votetc').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/404.html',
       '/img/tyler_costello_y7.png',
       '/img/flag_of_europe.svg',
       '/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
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
