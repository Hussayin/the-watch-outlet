const CACHE_NAME = "my-pwa-cache-v2"; // Versiyani yangilang (v2, v3 va hokazo)
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/index.js",
  "/assets/index.css",
];

// Install event: Keshni yaratish
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Yangi versiyani darhol ishga tushirish
  console.log("✅ Service Worker installed");
});

// Activate event: Eski keshlarni o‘chirish
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`🗑 Eski kesh o‘chirildi: ${cache}`);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim(); // Barcha ochiq mijozlarga yangi versiyani o‘tkazish
  console.log("✅ Service Worker activated");
});

// Fetch event: Keshdan yoki tarmoqdan ma'lumot olish
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            if (event.request.url.startsWith("http")) {
              cache.put(event.request, response.clone()); // Yangi ma’lumotni keshga qo‘shish
            }
            return response;
          });
        })
      );
    })
  );
});
