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
".git/index": "63bb9184a0d39ae4d48453773bba6885",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc0f78a8bf482697c06c3cf2d7e452e6",
".git/logs/refs/heads/main": "bc0f78a8bf482697c06c3cf2d7e452e6",
".git/logs/refs/remotes/origin/main": "b93729a5af5f1415ee9b551149d1d41a",
".git/objects/07/bb570d44906a16a4d4f526158ccd9d93aadd6b": "923b93bd1c896fb85896e7f6e06aad8a",
".git/objects/08/9231915b283865cd13c32215f21fcf3bd91161": "ac8c6a93c3626dec7605586c1be4fac5",
".git/objects/0b/73b549e7297b6d18326ed88b682701fdb150c3": "c6aeeb6ca19cc7a796b34b6382f567d6",
".git/objects/0e/f83062371825049fc31db44fa59281e8987b5c": "36df2407378ec2040aa84b55b38be4e8",
".git/objects/15/933f57a06e1a5dd169d3d0bf5b44d6cd93a77b": "0d22736b8dd057efb4ef8f6530ac5a3e",
".git/objects/17/2b1f566d3dc987cbb47ef7f9fda9df57c09d15": "c3a05b148ac368c68f0f932762a46c2d",
".git/objects/1a/967b949744a10a9061a1908c374ed4e49698d5": "2542c5f028d02b7ee994cfd8b8649ac7",
".git/objects/1f/521c32d68d9ec7576ac029c4e19342db0e40b1": "4b501d17f39955d423e9a46800470db1",
".git/objects/21/4fb13abf352323b8e02076991d246e6ee19573": "fac63383d9b598bf8902bece4487229c",
".git/objects/24/298b86848dbece0fcdfd9a21e79840df8c1821": "7515d602c3f1d40b96655c28b9f0634d",
".git/objects/29/c0bf364959922efe576c80c538ff986faf22d6": "3e28d20e59d2f7f89f601421d343b88a",
".git/objects/35/b4d5767a4d9426c1cb532b577b9c2f5c4dfea7": "cc6643c1d97a040d8239f823bb7fb348",
".git/objects/3c/ad0c871f17458c5213ec6486c4a67c6d942211": "de66dec3cca2c8b5b339faca25f2eb37",
".git/objects/42/519de724f3cf273fe561558c842c3551239944": "53520e1ff7f0266a07e4a47f72bf3b57",
".git/objects/43/aa03869af167d56b670a2e8b0866870931b063": "aa09ed4e8f2e238b28a6ca332db140d7",
".git/objects/49/109e7ad608b9c50f35622723abd0c8c0c1c035": "3c8236f1be640f8d7b4cbf6029702f30",
".git/objects/4a/adc4420ee6e929c8b5fa59f450202a826aa7e5": "aca7fda22bf375b38c6ef56b742af302",
".git/objects/4f/8db93461a32ef1ce1bac90631aa5d4e6384316": "febabe0e32a37e053b699bbe9cf92d5d",
".git/objects/50/91e0f74f283cb54a44c23246c1dbbc572b8c56": "1eb4a0a292dc01044b0b4ac356247930",
".git/objects/52/854a05e97b0c3e72db314eb0c6a42eaa21a454": "41237880aef0ee44b3ab76762c00bebd",
".git/objects/53/0226a7335c3a9e3dca1a8d485e612a99dee905": "5503db1204233cb1fe60c73223147762",
".git/objects/55/26df82b4978886dd2e3d4bfcf7d5a78fef7b36": "b62203ea816d593e742c374c3d53cf6a",
".git/objects/58/26025832b32ffbd9400c5485079adf853c39ab": "d0cdd92f3d066de903c287aa5a54c573",
".git/objects/5b/bfa6302e1ae755f607b3633af6fc8ac34d278f": "3e7fa00df30cbc711c80ea9009fc070f",
".git/objects/5d/24950b9647b77aeda7c188a86e532ee0f5a956": "a332d3ccc3dbeeea5a78982f2f3ad906",
".git/objects/69/06cb06680e5e08ad03509c16b8cd631f18e516": "ebb89ff69fb8af9717820e8b5042e016",
".git/objects/6c/4f1726ef397190b1ed5e17d2e1d862dafb2959": "86c791c9b043a8bf05da52ea42ce03bb",
".git/objects/71/9424c9d0508311080c275df553f3ad486ca9d3": "d77a0db17c605b784b2d933f73b00da3",
".git/objects/73/7bdd0def0ce0361f5a1e071d30735e6e428e89": "2adc4f51426742e41ee138c711e447e1",
".git/objects/74/b57c9f3fef81ebaf808dc11bb0a672f521b172": "c7a383f87d1f91ee2aa380af0a3ad73b",
".git/objects/79/10500eaaced5b33ed3600230ee67eed95211fc": "ea773c1640859f7b8f444d6ea55b187e",
".git/objects/84/ba548a4d322630c2d1deeb5a8c79bdba1cf5f7": "c792adc0d430f50b89fbaf1271c03dc8",
".git/objects/87/1948e6d4306aa700eb05b715210e45d9907e82": "406d2bae6ad0c5fe067887e3151692c9",
".git/objects/92/72708e7eef4980540966fb1a636ae2f523276b": "e2d80673e52e34fe8325fb8a75276588",
".git/objects/95/60d587a6c5813e9acb602b1e3a9cdb549c6c51": "80e0786659dadd40c3601125eca3dec8",
".git/objects/96/db273a9b448a90fcfa2e3d8b72f07a86ad9478": "50db6ecd72ae219c7828b5ea99834290",
".git/objects/9a/640a5e931f9b260b1785ae96877fb13db1f8a9": "2368ce3f00a7560b0ce8109ebc995c32",
".git/objects/9c/abfee1c5f81208c43f236e19cefb1919aa4e10": "fad76c030191af960cbe72d5436b231f",
".git/objects/9d/494eef0ad6956d47b52f723f0385dfa42d7966": "bfeed83c59bfd51a230aa2168c18d49e",
".git/objects/9d/f05f55cfb1ac3f25f55a326c9cebf1c3e95bb7": "859d27c16fdd7d91eb3cce7e555f2219",
".git/objects/9d/f4fdbe439e168888d8cc5e372ed246ceedd09c": "d116c93b15e29762ac5a99225e2b8ae0",
".git/objects/a1/3c61f74b316100918e536658c63f604f049f4e": "fd84b59a8a2f303651343d5f24f4781c",
".git/objects/a4/e51aa5759f12a7c75b679fd73671d362b63271": "eb6d4c610405ea1d4e43eb6a07a73aa7",
".git/objects/a5/c34a265301bf636440dc11c3f1ef8607abf02b": "f11cef4ca97a07f189666cc60da3fc79",
".git/objects/ac/77bc6b4d82f9ce5fefb9eb9fc8bea55d74c2b9": "4aa21bebba7d2a6c3d888fdb2c8a0611",
".git/objects/b4/68a36ef8d186c22d2aa65a93378a38396646ac": "f0b616708c9d0cc4430f086bb18e151c",
".git/objects/b5/035be77303b423e86594199a08c62349dce638": "e5132be8cd395ffb1728a8213967c1e4",
".git/objects/b5/72e2cd112090c4f42fd0986e677584c02f8432": "1e32a75cca742d92aa3227e7d4c7c1c2",
".git/objects/b9/2f4a5e0b22ed4b4a4f705cb12d03641e28aaef": "2db89f50c64d5dcd42208e8a5a22b8f9",
".git/objects/c1/44cfe80fb4137a9e31e17f37f5a759fd29f31c": "b16ca6c355b7146de2a4a903f58ef490",
".git/objects/c1/cc806d507e7cc3fa87b8e7eb6232b17880eff4": "b322edf60f70099dca55a3880578ee71",
".git/objects/ca/fc510af3dbe919b27507d544af0b9610289539": "c061c88fc37381287f3c55d0a6843a83",
".git/objects/cb/8a539fa68aaaab3b6323cb4d847ad4393c4cf0": "a3c39d9716eadca76046e1ea09b7d7ea",
".git/objects/d0/301114c234f9f12483a7fcbe33c922acf47f18": "0ef7fc48755d7f4159a804b38dfc6291",
".git/objects/d3/23a943f74c82eaa4313cdccc2596f125f73ed0": "597c46b36b0287aa88ffd0929b18159c",
".git/objects/d9/7eeb62987f78c0abb41656bea52af034f6783d": "e9d63f5381a399f4631e741ceac5299e",
".git/objects/da/247a55e9e48507e94593812a8cf3cd4c822cef": "3a5d497945c861495ce289ce3088a8ff",
".git/objects/df/99f9fc8cfe2a06284dfad3b08db7a8b11f8d6c": "11b81374e53c35ad5ce7b9dabc252dcd",
".git/objects/e9/80abb553adfc5a3e91f45b40546f82dd50470e": "0f914f6a4df4126bd6817031f05b0b81",
".git/objects/eb/7007ed7123a3e2b454b9a286b50cd08e096fe1": "e91a3667298f9ec6244a9e628f49071d",
".git/objects/ed/894a8f85a5f835ac3338d834321388f686a6b0": "9c5d201ec2f7617cb66061979bb3b4ff",
".git/objects/f0/95228125f5a87dcfaf8f249cba1214f90d7fcc": "7be24fbfca10af3b954134e052649182",
".git/objects/f1/8c68456766ad21c4f98a547ea631b43ab529d2": "7c984f0aa3d4725f8c1b985c5f093e8b",
".git/objects/f3/6ea86823a9b35af317bf979618ae091abb51ab": "56a95cdd2e5d89182bc4ef0aaf99bcf1",
".git/objects/fa/80ec35acf34dfd47f8157557af0e034b33c6a7": "277a92799ab64e8a74ab15b003a192a7",
".git/objects/pack/pack-d7ded860bd4521fe81647d443f7b9d516481b5f3.idx": "1b20e46387279c92f32a0f29e186ba44",
".git/objects/pack/pack-d7ded860bd4521fe81647d443f7b9d516481b5f3.pack": "524a3112abb9a5b656638450bb98aeaa",
".git/objects/pack/pack-d7ded860bd4521fe81647d443f7b9d516481b5f3.rev": "1d79fc65c3f08a2187da1b7ca008ad17",
".git/ORIG_HEAD": "30f8f35b9f91c03abb415870723cd420",
".git/refs/heads/main": "5b2da27ebc2e313a8c0c5a9433fd169f",
".git/refs/remotes/origin/main": "5b2da27ebc2e313a8c0c5a9433fd169f",
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
"assets/NOTICES": "36b0498af6efa02c3332dd80ae2c474b",
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
"flutter_bootstrap.js": "8f56b0685ddba4b05215d8cde0822dcc",
"icons/favicon-16x16.png": "876989e8b17a7c8a51189823801daaa3",
"icons/favicon-32x32.png": "843c054128ad7698e69bed48ce50adac",
"icons/favicon.ico": "3b953f9647f1124fe6cf0b3306b748bc",
"icons/Icon-192.png": "82eb2c136074ccc7f512892cb48b120e",
"icons/Icon-512.png": "0e565e550459231f5dc99c9887392b3f",
"icons/Icon-maskable-192.png": "aa2c0d135e6a6932b820a0bc79b0f594",
"icons/Icon-maskable-512.png": "aa2c0d135e6a6932b820a0bc79b0f594",
"icons7c2d2b40": "3b953f9647f1124fe6cf0b3306b748bc",
"index.html": "b3b97df42d58110759845483da3143b1",
"/": "b3b97df42d58110759845483da3143b1",
"main.dart.js": "cc8cff6886d6924d57487de34f0e8e5d",
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
