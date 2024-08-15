'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "5bce51339b42f0e467612a8fa7d57203",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0188beab410d2604332d39390ab41f6f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6f33a3cfb7637ec8def563fcdd95ac2d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f2d11515a12323327211be3feea01f5",
".git/logs/refs/heads/main": "3f2d11515a12323327211be3feea01f5",
".git/logs/refs/remotes/origin/main": "29ff44d6d9c511c9a1182a45c049b264",
".git/objects/0e/f83062371825049fc31db44fa59281e8987b5c": "36df2407378ec2040aa84b55b38be4e8",
".git/objects/17/2b1f566d3dc987cbb47ef7f9fda9df57c09d15": "c3a05b148ac368c68f0f932762a46c2d",
".git/objects/1a/967b949744a10a9061a1908c374ed4e49698d5": "2542c5f028d02b7ee994cfd8b8649ac7",
".git/objects/21/4fb13abf352323b8e02076991d246e6ee19573": "fac63383d9b598bf8902bece4487229c",
".git/objects/42/519de724f3cf273fe561558c842c3551239944": "53520e1ff7f0266a07e4a47f72bf3b57",
".git/objects/43/aa03869af167d56b670a2e8b0866870931b063": "aa09ed4e8f2e238b28a6ca332db140d7",
".git/objects/4a/adc4420ee6e929c8b5fa59f450202a826aa7e5": "aca7fda22bf375b38c6ef56b742af302",
".git/objects/55/26df82b4978886dd2e3d4bfcf7d5a78fef7b36": "b62203ea816d593e742c374c3d53cf6a",
".git/objects/69/06cb06680e5e08ad03509c16b8cd631f18e516": "ebb89ff69fb8af9717820e8b5042e016",
".git/objects/9d/494eef0ad6956d47b52f723f0385dfa42d7966": "bfeed83c59bfd51a230aa2168c18d49e",
".git/objects/9d/f05f55cfb1ac3f25f55a326c9cebf1c3e95bb7": "859d27c16fdd7d91eb3cce7e555f2219",
".git/objects/9d/f4fdbe439e168888d8cc5e372ed246ceedd09c": "d116c93b15e29762ac5a99225e2b8ae0",
".git/objects/a1/3c61f74b316100918e536658c63f604f049f4e": "fd84b59a8a2f303651343d5f24f4781c",
".git/objects/b5/72e2cd112090c4f42fd0986e677584c02f8432": "1e32a75cca742d92aa3227e7d4c7c1c2",
".git/objects/cb/8a539fa68aaaab3b6323cb4d847ad4393c4cf0": "a3c39d9716eadca76046e1ea09b7d7ea",
".git/objects/d9/7eeb62987f78c0abb41656bea52af034f6783d": "e9d63f5381a399f4631e741ceac5299e",
".git/objects/df/99f9fc8cfe2a06284dfad3b08db7a8b11f8d6c": "11b81374e53c35ad5ce7b9dabc252dcd",
".git/objects/f3/6ea86823a9b35af317bf979618ae091abb51ab": "56a95cdd2e5d89182bc4ef0aaf99bcf1",
".git/objects/pack/pack-d7ded860bd4521fe81647d443f7b9d516481b5f3.idx": "1b20e46387279c92f32a0f29e186ba44",
".git/objects/pack/pack-d7ded860bd4521fe81647d443f7b9d516481b5f3.pack": "524a3112abb9a5b656638450bb98aeaa",
".git/objects/pack/pack-d7ded860bd4521fe81647d443f7b9d516481b5f3.rev": "1d79fc65c3f08a2187da1b7ca008ad17",
".git/ORIG_HEAD": "30f8f35b9f91c03abb415870723cd420",
".git/refs/heads/main": "afabc5ddb6885c2017339f5be6637855",
".git/refs/remotes/origin/main": "afabc5ddb6885c2017339f5be6637855",
"assets/AssetManifest.bin": "b01b8955c60213187d5d5f0022f26c37",
"assets/AssetManifest.bin.json": "50fc6c29affb5373b1db85b6ae9057b8",
"assets/AssetManifest.json": "b40f7ea615d4c50c518784f6400fcb6d",
"assets/assets/background1.png": "46a7ea598f317859781b0ef1f6cb5389",
"assets/assets/garuda.png": "c174f5f187d765a53c4d62134ef1064c",
"assets/assets/image2.png": "59ccd582fa69c554894ba31a1581a8b9",
"assets/assets/image3.png": "42e3a5b0b665d74909171e0d8f9a3c0d",
"assets/assets/image4.png": "90ed7285ac597fd88f4eab97304db14b",
"assets/assets/image5.png": "784662bf70f3c214be8e406111c76053",
"assets/assets/image6.png": "dbc50b685938f38557c3a1913087c167",
"assets/assets/indonesia_02.jpg": "29ecfba43eb49399d38b9ee8132c4c3b",
"assets/assets/peta.png": "189575087a89ea42048feb020766d87c",
"assets/assets/twibbon.png": "3d93c748318bbd615053012d2e3691ea",
"assets/assets/twibbon1.png": "8d3108624c1dee25702ba28b42c6a0b0",
"assets/assets/twibbon2.png": "4db19ec620fc136ae87635b5b4d8c750",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dc7d53e967ec75b0c2144c213664a904",
"assets/NOTICES": "d3ae9badaddb633743d53fd245bd54cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3b953f9647f1124fe6cf0b3306b748bc",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "adc6c81f27a6222685c6546325576a7d",
"icons/favicon-16x16.png": "876989e8b17a7c8a51189823801daaa3",
"icons/favicon-32x32.png": "843c054128ad7698e69bed48ce50adac",
"icons/favicon.ico": "3b953f9647f1124fe6cf0b3306b748bc",
"icons/Icon-192.png": "82eb2c136074ccc7f512892cb48b120e",
"icons/Icon-512.png": "0e565e550459231f5dc99c9887392b3f",
"icons/Icon-maskable-192.png": "aa2c0d135e6a6932b820a0bc79b0f594",
"icons/Icon-maskable-512.png": "aa2c0d135e6a6932b820a0bc79b0f594",
"icons4ea25940": "aa2c0d135e6a6932b820a0bc79b0f594",
"icons834c9c21": "3b953f9647f1124fe6cf0b3306b748bc",
"index.html": "b3b97df42d58110759845483da3143b1",
"/": "b3b97df42d58110759845483da3143b1",
"main.dart.js": "8ffb82d703fd218b093f093fc2465249",
"manifest.json": "e67235b9066c5e8d5fbd9649c4bf9d07",
"version.json": "c98818f18275561982669bf657820bf1"};
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
