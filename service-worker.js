const CACHE_NAME = "id-app-cache-v1";
const urlsToCache = [
  "/index.html",               // Главная страница
  "/styles.css",                // Стили
  "/script.js",                 // Скрипт
  "/manifest.json",             // Манифест
  "/img/your-icon.png",      // Иконка 192x192
  "/img/your-icon-kaspi.png",      // Иконка 512x512
  "/img/qr.png",                // Иконка QR
  "/img/upload.png",            // Иконка загрузки
  "/img/qr-code.png",          // Иконка QR-кода
  "/img/Back.png"               // Иконка кнопки "Назад"
];

// Установка Service Worker и кэширование ресурсов
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Работа с запросами и возврат кэшированных данных
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
