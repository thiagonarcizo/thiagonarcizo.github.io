'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "632b66722351377e2b6cdb3a2aa2ab57",
"assets/AssetManifest.json": "a293d0862c21b8060049266214b5f1ee",
"assets/assets/logo.png": "cb7b7570b9ecef8f8ed7af14dd049377",
"assets/assets/logo_app.png": "ad55a7002ca4ea2c580134b3dbea1c40",
"assets/assets/logo_foreground.png": "ab2a31716ea58d71b0da9205264a64b4",
"assets/FontManifest.json": "48a19d842bc0c4fd288dfdd8c61e3b81",
"assets/fonts/MaterialIcons-Regular.otf": "9864666ecd51f74e3c21c3f38bb4814f",
"assets/fonts/Product-Sans-Bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/fonts/Product-Sans-Italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/fonts/Product-Sans-Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/NOTICES": "d8266fd9696433574d5c2342db1cdf06",
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
"favicon1.ico": "8dbc9e27504132aa6bd4f5208f8ab671",
"favicon1.png": "ec969e1a55cd6cb0b21ce4b7340e2e42",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-icon-144x144.png": "c458ae96b03810f4d40b37e30877be56",
"icons/android-icon-192x192.png": "fa83eb8aa2966ccbc3e1ce532bec7f45",
"icons/android-icon-36x36.png": "c542e53f24e7abf3beafd44a1dcb5cf3",
"icons/android-icon-48x48.png": "b74ace769404bf606c23730fecea5e75",
"icons/android-icon-72x72.png": "e91a00562960bdb89a48ecb584f04866",
"icons/android-icon-96x96.png": "07e1cadd334c2ef4631153f754cc413e",
"icons/apple-icon-114x114.png": "aada4cab4b289a55e032c479ff12019e",
"icons/apple-icon-120x120.png": "7de5d74e2d2671bb82ccc6af3fb83352",
"icons/apple-icon-144x144.png": "c458ae96b03810f4d40b37e30877be56",
"icons/apple-icon-152x152.png": "b88147f7e95997c7615a5a3701caff81",
"icons/apple-icon-180x180.png": "988e8076f70a96752c981164787e640c",
"icons/apple-icon-57x57.png": "d24555aa8522530d1b88df3a4a9b6537",
"icons/apple-icon-60x60.png": "b086bb7b750a397b436eeee408e12e08",
"icons/apple-icon-72x72.png": "e91a00562960bdb89a48ecb584f04866",
"icons/apple-icon-76x76.png": "f49dd81773003e40f24ff8fd6edc04c8",
"icons/apple-icon-precomposed.png": "3331c5d5be08d97063f98a257f2bd6f2",
"icons/apple-icon.png": "3331c5d5be08d97063f98a257f2bd6f2",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "30974acf58b25d9b935bc1ffc96e2172",
"icons/favicon-32x32.png": "2e44d27e9dff1b6cbcf96e3393346d5b",
"icons/favicon-96x96.png": "07e1cadd334c2ef4631153f754cc413e",
"icons/favicon.ico": "8dbc9e27504132aa6bd4f5208f8ab671",
"icons/Icon-192.png": "531b4b44a87875233a4e3704957060cc",
"icons/Icon-512.png": "f47c7124dac961f92a5604bf3e53abd5",
"icons/Icon-maskable-192.png": "531b4b44a87875233a4e3704957060cc",
"icons/Icon-maskable-512.png": "f47c7124dac961f92a5604bf3e53abd5",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "c458ae96b03810f4d40b37e30877be56",
"icons/ms-icon-150x150.png": "753486c43bf9693d130183653eca6001",
"icons/ms-icon-310x310.png": "b0a9a8866db2676fceb192117d4701c8",
"icons/ms-icon-70x70.png": "4f6f98b29136c89ffcefec83419065fd",
"icons1/android-icon-144x144.png": "c458ae96b03810f4d40b37e30877be56",
"icons1/android-icon-192x192.png": "fa83eb8aa2966ccbc3e1ce532bec7f45",
"icons1/android-icon-36x36.png": "c542e53f24e7abf3beafd44a1dcb5cf3",
"icons1/android-icon-48x48.png": "b74ace769404bf606c23730fecea5e75",
"icons1/android-icon-72x72.png": "e91a00562960bdb89a48ecb584f04866",
"icons1/android-icon-96x96.png": "07e1cadd334c2ef4631153f754cc413e",
"icons1/apple-icon-114x114.png": "aada4cab4b289a55e032c479ff12019e",
"icons1/apple-icon-120x120.png": "7de5d74e2d2671bb82ccc6af3fb83352",
"icons1/apple-icon-144x144.png": "c458ae96b03810f4d40b37e30877be56",
"icons1/apple-icon-152x152.png": "b88147f7e95997c7615a5a3701caff81",
"icons1/apple-icon-180x180.png": "988e8076f70a96752c981164787e640c",
"icons1/apple-icon-57x57.png": "d24555aa8522530d1b88df3a4a9b6537",
"icons1/apple-icon-60x60.png": "b086bb7b750a397b436eeee408e12e08",
"icons1/apple-icon-72x72.png": "e91a00562960bdb89a48ecb584f04866",
"icons1/apple-icon-76x76.png": "f49dd81773003e40f24ff8fd6edc04c8",
"icons1/apple-icon-precomposed.png": "3331c5d5be08d97063f98a257f2bd6f2",
"icons1/apple-icon.png": "3331c5d5be08d97063f98a257f2bd6f2",
"icons1/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons1/favicon-16x16.png": "30974acf58b25d9b935bc1ffc96e2172",
"icons1/favicon-32x32.png": "2e44d27e9dff1b6cbcf96e3393346d5b",
"icons1/favicon-96x96.png": "07e1cadd334c2ef4631153f754cc413e",
"icons1/favicon.ico": "8dbc9e27504132aa6bd4f5208f8ab671",
"icons1/Icon-192.png": "531b4b44a87875233a4e3704957060cc",
"icons1/Icon-512.png": "f47c7124dac961f92a5604bf3e53abd5",
"icons1/Icon-maskable-192.png": "531b4b44a87875233a4e3704957060cc",
"icons1/Icon-maskable-512.png": "f47c7124dac961f92a5604bf3e53abd5",
"icons1/Icon1-192.png": "531b4b44a87875233a4e3704957060cc",
"icons1/Icon1-512.png": "f47c7124dac961f92a5604bf3e53abd5",
"icons1/Icon1-maskable-192.png": "531b4b44a87875233a4e3704957060cc",
"icons1/Icon1-maskable-512.png": "f47c7124dac961f92a5604bf3e53abd5",
"icons1/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons1/ms-icon-144x144.png": "c458ae96b03810f4d40b37e30877be56",
"icons1/ms-icon-150x150.png": "753486c43bf9693d130183653eca6001",
"icons1/ms-icon-310x310.png": "b0a9a8866db2676fceb192117d4701c8",
"icons1/ms-icon-70x70.png": "4f6f98b29136c89ffcefec83419065fd",
"index.html": "4be3af3f9dfbd2b66b0f0544faf43cbe",
"/": "4be3af3f9dfbd2b66b0f0544faf43cbe",
"main.dart.js": "5d12da6e40616c74fb83800c0401060d",
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
