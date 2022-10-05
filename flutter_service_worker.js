'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "62485d4eac01892863f63ee9397e0247",
"assets/assets/images/apps_courses/logos/carot.png": "8ae0c07d2d00640e89a64766994a1e86",
"assets/assets/images/apps_courses/logos/converter_logo.png": "393bdc0a072607854f840dfdbed36820",
"assets/assets/images/apps_courses/logos/ecommerce_logo.png": "c7a622c3b4b129bee62727dbdc5feedc",
"assets/assets/images/apps_courses/logos/flutter_assistant_logo.jpg": "d2bb046c6bff00496992059ba3e5d18b",
"assets/assets/images/apps_courses/logos/flutter_helper_kit_logo.jpg": "2fc4680654f1fae3d7203a7056a51f69",
"assets/assets/images/apps_courses/logos/news_logo.png": "9e2abf07d3a2a5dbc466cee0a72661e4",
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
"assets/assets/images/work/dow_group_logo.png": "fd3365c922cd357ead0cfa7c9ce51f49",
"assets/assets/images/work/inria_logo.png": "af3f106a5e3043b56d0e9426af2537af",
"assets/assets/lang/ar.json": "d93d79f4b7d61b077fa28bd716225316",
"assets/assets/lang/en.json": "e2297bb23c0a2d8a3bb317d2f2d2938c",
"assets/assets/lang/fr.json": "18ed8fe1273701be212f3148bed6ec53",
"assets/FontManifest.json": "f4ec3d4629f2b8991eb4895c6ac29417",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/loader.gif": "41fa823db99195d8d67e3de94a4b38ae",
"assets/me.jpeg": "6320f6edad6295a154d3e4aab79e8b8a",
"assets/NOTICES": "281283d8c66ee5043042f4e187534884",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "541df649654f074a25833daa64e246f3",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "25d014c0a013024ffb898071af3bff6c",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "20ae062785ef7ebe5d2eaaf4ddbb8e3a",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/shaders/ink_sparkle.frag": "806f205517abb15ed2507d41261de51c",
"favicon.ico": "00d12955767c17c8b83292fe4846f260",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d8077e4f81da1450ca749cb0cd583fbf",
"/": "d8077e4f81da1450ca749cb0cd583fbf",
"main.dart.js": "bcbe0b189a002c024b32b5bd1ab27bc2",
"manifest.json": "845ca47f6e2f1c267385e20a765d017e",
"version.json": "e956c0b6c0392931e49f9556bbe93750"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
