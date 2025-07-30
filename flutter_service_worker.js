'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5fcc1726374a6e9fa1e210add3d7e2cf",
"assets/AssetManifest.bin.json": "0a95b462895cf23b70da70db8f3c2fd5",
"assets/AssetManifest.json": "2e857916c7900f890a8ee07c0ffa8836",
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
"assets/assets/images/work/dineintel-logo.png": "49ba91b7018e7223a2488939e28b7fbb",
"assets/assets/images/work/dow_group_logo.png": "fd3365c922cd357ead0cfa7c9ce51f49",
"assets/assets/images/work/enersys-logo.png": "ecf5960cda5dfa4f74e5b2d20b7d367f",
"assets/assets/images/work/inria_logo.png": "af3f106a5e3043b56d0e9426af2537af",
"assets/assets/images/work/udemy-logo.png": "aea07d39fd147ab45a2509861cba0fc8",
"assets/assets/lang/ar.json": "80533f700e153fb1e94ad87221537f00",
"assets/assets/lang/en.json": "8f4ba99cef8c98a00cce19e7eba7989f",
"assets/assets/lang/fr.json": "976d7fe82ff16e91193d6c33939d34ce",
"assets/FontManifest.json": "7633fb45a88aa6b03b712d98aa786c28",
"assets/fonts/MaterialIcons-Regular.otf": "501de26f443ca61c5bf9c3d6334ca16f",
"assets/loader.gif": "58aa3781af70964f330ecab517f565a8",
"assets/me.jpeg": "6320f6edad6295a154d3e4aab79e8b8a",
"assets/me.jpg": "a8abbb07226d3b947fb5826272266be2",
"assets/NOTICES": "c79173ab31445d1a0f201622a8938208",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "29154d8260b60657e92db7e3f9003518",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "a2023f2e6ebf4b9fc99a8371297f0265",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "d8984bdaada3bfac387c9482c753047c",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "c9f7bb62655415e80068b01558fb8d4e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.ico": "1ee075ee66f72f781f11f9b3ac99104d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c145154e05b8a1730b0e8bdb83fb6d34",
"icons/Icon-192.png": "04af6b79595f538aacb165393a3ed85a",
"icons/Icon-512.png": "1e736c0e96a70f52aec8842f550bb0c1",
"icons/Icon-maskable-192.png": "465d96365ae08e40b298bb1ae4e9860d",
"icons/Icon-maskable-512.png": "bbf64a0657706003afee6fe8d2228b14",
"index.html": "900341d8b2c4fced0d460d7ba023a786",
"/": "900341d8b2c4fced0d460d7ba023a786",
"main.dart.js": "f51fb87b92229dc5d30412967bef9a55",
"manifest.json": "df4194b6e6ddbe3c42c2524196487af2",
"version.json": "a9969c074fae6a8886f6b1d30c60490b"};
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
