const CACHE_NAME = "konpon-mikuji-v2";
const ASSETS = [
  "/assets/top.webp",
  "/assets/konpon-default.webp",
  "/assets/daikichi.webp",
  "/assets/kichi.webp",
  "/assets/suekichi.webp",
  "/assets/kon-icon.webp",
  "/assets/pon-icon.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Don't cache navigation requests (HTML pages) — always fetch from network
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
