// Basic Service Worker
const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/index.js", // Build jarayonidan keyin yaratilgan faylni tekshiring
  "/assets/index.css", // Build jarayonidan keyin yaratilgan faylni tekshiring
  // Boshqa resurslar kerak bo'lsa qo'shing
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  console.log("Service Worker installing...");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
