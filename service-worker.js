self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/sermons.html',
        '/donations.html',
        '/service.html',
        '/about.html',
        '/ministries.html',
        '/contact.html',
        '/events.html',
        '/signup.html',
        '/style.css',  // Include all necessary files
        '/script.js',
        '/clfmm.png',
        '/favicon.ico',
        // Add more assets if needed
      ]);
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
