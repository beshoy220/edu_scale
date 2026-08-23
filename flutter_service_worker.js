'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bc00b3cf86b8af6b6b973b627d132247",
"assets/AssetManifest.bin.json": "2e84bd96a2b53d7f8d1c58202a097e0c",
"assets/AssetManifest.json": "ece8132fe8ca9c91d179186af0166611",
"assets/assets/pics/bg_pic.png": "59373c2bc395746069becc518ed199a7",
"assets/assets/pics/bg_pic_2.png": "d254975bd63a33e69f7627025ac47210",
"assets/assets/pics/bg_pic_3.png": "ec5a7cec46d89596eaff656d6b152bec",
"assets/assets/pics/bg_pic_4.png": "b596ae3c947157f1123263bedc9c720a",
"assets/assets/pics/calm_girl.png": "943824a921acbbe80c897066d3f58391",
"assets/assets/pics/calm_girl_2.png": "27dc002c77ec18d2c06cb578f2a2abb8",
"assets/assets/pics/calm_girl_3.png": "f4ba4747bafbb6c9178e755d1c517b38",
"assets/assets/pics/hands_hold_heart.png": "24cb533cf221231224da9957bae3bf7c",
"assets/assets/pics/happy_girl.png": "aaf3c7a693da6d21ec1389324e69fda2",
"assets/assets/pics/happy_ropot.png": "265a763ff3747487134830f48d30a51f",
"assets/assets/pics/happy_ropot_2.png": "8eaf7620b78547351a2988edc01f3a10",
"assets/assets/pics/happy_team.png": "18430e99d49a0cde839bb203fef4c7c7",
"assets/assets/pics/happy_winner.png": "be7e1048fffa9bb23c51154abf5e40b9",
"assets/assets/pics/logo.png": "84dbd1916de214c4e9159ed76d75845e",
"assets/assets/pics/openned_book.png": "f187aa28652633e2d98dd714cf9d4213",
"assets/assets/pics/question_boy.png": "7bc6b6888e38d16c5800eb0d109a333d",
"assets/assets/pics/reading_girl.png": "d284c7cfae9317b869f827e7257c8175",
"assets/assets/pics/reading_girl_2.png": "e6e670695f44da50069f16cb9cfc3f14",
"assets/assets/pics/shape_1.png": "eded68d57e2a47956c4e284594dcc2d8",
"assets/assets/pics/shape_2.png": "5a2b89b1cdb7916ff091477a88eb0865",
"assets/assets/pics/shape_3.png": "5c57b4a6ed3449821d872bbf6d2cf2c0",
"assets/assets/pics/shape_4.png": "55a549b10480fef47bf529062f25bcd1",
"assets/assets/pics/shape_5.png": "038986de35494e817ead026db73d0687",
"assets/assets/translations/ar.json": "d6a01f553686aaee65b4a52f0d8978ec",
"assets/assets/translations/en.json": "b779b917caf33de5a2273f1de367bd12",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "21657db11716561276ca6829837cd6f7",
"assets/NOTICES": "e5b9e4b64cafcc7463de8280fe937bbd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7c2b9f16286696c31af3ada00513579d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f3a2ff807caf260722c4d1cd0747330b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "367a516fc282896909bf71e78e423940",
"/": "367a516fc282896909bf71e78e423940",
"main.dart.js": "472cd637a64fd22d0235b49fc83906b8",
"manifest.json": "a238533431c686a54885f5bccdb27678",
"version.json": "001f7e54bfd74a0320eca024a0b6b8cb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
