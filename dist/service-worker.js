const CACHE_NAME = "my-pwa-cache-v3"; // Har deployda versiyani oshiring (v2, v3, v4...)
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/index.js",
  "/assets/index.css",
];

// Install event: Keshni yaratish
self.addEventListener("install", (event) => {
  console.log("🛠 Service Worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Yangi versiyani darhol ishga tushirish
});

// Activate event: Eski keshlarni o‘chirish
self.addEventListener("activate", (event) => {
  console.log("🚀 Service Worker activating...");
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
});

// Fetch event: Keshdan yoki tarmoqdan ma'lumot olish
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return; // Faqat GET so‘rovlarini keshlash

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log(`📦 Keshdan olinmoqda: ${event.request.url}`);
        return cachedResponse; // Agar keshda bo‘lsa, shu faylni qaytarish
      }

      return fetch(event.request)
        .then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response; // Xatolik yoki tarmoq muammosi bo‘lsa, shunchaki qaytarish
          }

          // Keshga yangi ma’lumot qo‘shish
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch((error) => {
          console.error(`❌ Fetch error: ${error}`);
        });
    })
  );
});
