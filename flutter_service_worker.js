'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "632b66722351377e2b6cdb3a2aa2ab57",
"assets/AssetManifest.json": "a293d0862c21b8060049266214b5f1ee",
"assets/assets/logo.png": "cb7b7570b9ecef8f8ed7af14dd049377",
"assets/assets/logo_app.png": "ad55a7002ca4ea2c580134b3dbea1c40",
"assets/assets/logo_foreground.png": "fc7b627d57cc7a22a9c843d7f6aacb42",
"assets/FontManifest.json": "48a19d842bc0c4fd288dfdd8c61e3b81",
"assets/fonts/MaterialIcons-Regular.otf": "9864666ecd51f74e3c21c3f38bb4814f",
"assets/fonts/Product-Sans-Bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/fonts/Product-Sans-Italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/NOTICES": "40a1709e2f892914bd8fb984d054a059",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "e5b1f72690096075e25fe1f481cb6ce6",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "347841c04107bb5a17164bee251d8307",
"canvaskit/skwasm.js": "831c0eebc8462d12790b0fadf3ab6a8a",
"canvaskit/skwasm.wasm": "2cb965595f656f0c58ad6bb5988f8280",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f",
"favicon.png": "ec969e1a55cd6cb0b21ce4b7340e2e42",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-icon-144x144.png": "c6e347a50bc13db776a8a7e626d92577",
"icons/android-icon-192x192.png": "1aaba46fff141efb798f6db16b86a14d",
"icons/android-icon-36x36.png": "4fb84b9ca455a1aead0cb0723265f0e8",
"icons/android-icon-48x48.png": "2f034baea1a933d60a4bf2b6572922c2",
"icons/android-icon-72x72.png": "54793194cbcd5c144d7c8e622cb131fd",
"icons/android-icon-96x96.png": "e6151b84252e45e761f52661f4b1b5f8",
"icons/apple-icon-114x114.png": "0bcb06314df28deeaf1de473976b3666",
"icons/apple-icon-120x120.png": "aaaab672d10e49d1d5cbf06197c122f8",
"icons/apple-icon-144x144.png": "c6e347a50bc13db776a8a7e626d92577",
"icons/apple-icon-152x152.png": "df3ed33453f2cff9f844b19795155042",
"icons/apple-icon-180x180.png": "ba23c0d12a6d75dd5c47c07d275e41b5",
"icons/apple-icon-57x57.png": "9897d4a28c98452b9ee0b8ce809ffca6",
"icons/apple-icon-60x60.png": "f68cf8fd9dba3036c48ec11ec5b33c35",
"icons/apple-icon-72x72.png": "54793194cbcd5c144d7c8e622cb131fd",
"icons/apple-icon-76x76.png": "3c3a11d8d42e33909ee1bb35daf3fd0e",
"icons/apple-icon-precomposed.png": "045b4d2aae2f28d542f9ceb95890cb73",
"icons/apple-icon.png": "045b4d2aae2f28d542f9ceb95890cb73",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "0a56d826ddb4024292d0e93010c6a6f1",
"icons/favicon-32x32.png": "a2ddc1a7a7e67a18245ee41f88cae27b",
"icons/favicon-96x96.png": "e6151b84252e45e761f52661f4b1b5f8",
"icons/favicon.ico": "a3d62f5f6956833f377fe3a2c4fab70f",
"icons/Icon-192.png": "531b4b44a87875233a4e3704957060cc",
"icons/Icon-512.png": "f47c7124dac961f92a5604bf3e53abd5",
"icons/Icon-maskable-192.png": "531b4b44a87875233a4e3704957060cc",
"icons/Icon-maskable-512.png": "f47c7124dac961f92a5604bf3e53abd5",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "c6e347a50bc13db776a8a7e626d92577",
"icons/ms-icon-150x150.png": "44cfee36b7fb169fa626bf743ce2b9e1",
"icons/ms-icon-310x310.png": "f3bafe2e6bcd1852d1eb91f31c10cf5c",
"icons/ms-icon-70x70.png": "42fbe65980119dcaae4e55979004aeaf",
"index.html": "5bb7035dc09e8667e1fb893ce46f540d",
"/": "5bb7035dc09e8667e1fb893ce46f540d",
"main.dart.js": "f17862faa2614b4b26eb4652a4f0e61a",
"manifest.json": "0f2073b931f85572b5bd29642baaec88",
"styles.css": "13bff16c2ca7efd848790b1fa6f02fe6",
"version.json": "b5fb0eeb738c920cc50274d75246ee42"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
