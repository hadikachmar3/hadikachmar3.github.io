'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c5f8bbbcb7881920850f4ccd9dce5922",
"assets/AssetManifest.bin.json": "19b022dc362ee17a22a0e26cdd6c4677",
"assets/AssetManifest.json": "be273936c00cb155224a166b0e78e9a1",
"assets/assets/images/apps_courses/logos/carot.png": "8ae0c07d2d00640e89a64766994a1e86",
"assets/assets/images/apps_courses/logos/converter_logo.png": "393bdc0a072607854f840dfdbed36820",
"assets/assets/images/apps_courses/logos/ecommerce_logo.png": "c7a622c3b4b129bee62727dbdc5feedc",
"assets/assets/images/apps_courses/logos/flutter_assistant_logo.jpg": "d2bb046c6bff00496992059ba3e5d18b",
"assets/assets/images/apps_courses/logos/flutter_helper_kit_logo.jpg": "2fc4680654f1fae3d7203a7056a51f69",
"assets/assets/images/apps_courses/logos/news_logo.png": "9e2abf07d3a2a5dbc466cee0a72661e4",
"assets/assets/images/apps_courses/logos/shop_online.png": "abd4a5a8539a209763c531a1e974b77f",
"assets/assets/images/apps_courses/logos/store_api_logo.png": "c285d2c32c7f8de2e92f0bfa874b8891",
"assets/assets/images/apps_courses/logos/teach_driving_logo.png": "9ba7ef9029878f9d4464c4cf952abc8e",
"assets/assets/images/apps_courses/logos/workos_logo.png": "851ba8b36e7f80c8761caf99531d2063",
"assets/assets/images/apps_courses/thumbnails/converter_app_cover.png": "7a3a805811525cb2cbf57230f6064884",
"assets/assets/images/apps_courses/thumbnails/ecommerce_th.png": "a64ab60c2d21bdcfacc84e0b7e35d095",
"assets/assets/images/apps_courses/thumbnails/flutter_assistant_cover.jpg": "c5eca25c0e2cce8012d503ae839207e3",
"assets/assets/images/apps_courses/thumbnails/flutter_helper_kit_cover.png": "83008100671c1030e17e2e0844b76d86",
"assets/assets/images/apps_courses/thumbnails/grocery_course.png": "e8716391c4f925d97fc8068703d7eaad",
"assets/assets/images/apps_courses/thumbnails/news_th.png": "9fe5f64a3304b3d373e5aec85c4167c1",
"assets/assets/images/apps_courses/thumbnails/store_api_th.png": "4fb7f5f523091d2e23413b84fc3635a9",
"assets/assets/images/apps_courses/thumbnails/teach_driving_cover.png": "0d6b07e263b5a18735745e397064f0e8",
"assets/assets/images/apps_courses/thumbnails/workos_th.jpg": "e3ad12532089a3093c7e4edd79d56bc2",
"assets/assets/images/bg.jpg": "710c6249363ee1f66521cbee3e7b58ea",
"assets/assets/images/education/azur_logo.png": "22f6873bab447dba3e54840ece8d147c",
"assets/assets/images/education/liu_logo.png": "8d7f0196df1ddf86abe1aefe76504320",
"assets/assets/images/me.jpeg": "6320f6edad6295a154d3e4aab79e8b8a",
"assets/assets/images/me.jpg": "a8abbb07226d3b947fb5826272266be2",
"assets/assets/images/work/amadeus.png": "d7481fcf744dff84c9496178a16bd8f5",
"assets/assets/images/work/dow_group_logo.png": "fd3365c922cd357ead0cfa7c9ce51f49",
"assets/assets/images/work/inria_logo.png": "af3f106a5e3043b56d0e9426af2537af",
"assets/assets/lang/ar.json": "bcdca600fbb93860726a96fd33921555",
"assets/assets/lang/en.json": "993da85c922d098e953778dea27075cc",
"assets/assets/lang/fr.json": "248649c8e1bff68fa8a9f28e0265ee4a",
"assets/FontManifest.json": "7633fb45a88aa6b03b712d98aa786c28",
"assets/fonts/MaterialIcons-Regular.otf": "c3c0f9bf8abf3ab3cc0d08fe8a7068c0",
"assets/loader.gif": "58aa3781af70964f330ecab517f565a8",
"assets/me.jpeg": "6320f6edad6295a154d3e4aab79e8b8a",
"assets/me.jpg": "a8abbb07226d3b947fb5826272266be2",
"assets/NOTICES": "21e5931202006b890b23ce4a20f8d8fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "29154d8260b60657e92db7e3f9003518",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "a2023f2e6ebf4b9fc99a8371297f0265",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "d8984bdaada3bfac387c9482c753047c",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "c9f7bb62655415e80068b01558fb8d4e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "00d12955767c17c8b83292fe4846f260",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cd372b3042eb01a0bc0a5ae80698caee",
"/": "cd372b3042eb01a0bc0a5ae80698caee",
"main.dart.js": "4f586778cd048394174bfe03cb9960e3",
"manifest.json": "845ca47f6e2f1c267385e20a765d017e",
"version.json": "a9969c074fae6a8886f6b1d30c60490b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
