'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c398d97a4840b64480c711d6a8308c09",
".git/config": "b4ec082ce2d4059847260fdf9c23d958",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ff7d3442c51465bab77c26612350bc77",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3693ba06bea56c12720b2ee7b91d47c8",
".git/logs/refs/heads/main": "b90d0407887836b81bcc0d29fa694521",
".git/logs/refs/remotes/origin/main": "b24460743726bd46b7af5d34fea6c80b",
".git/logs/refs/remotes/origin/master": "3ff7468db8e6e793ee9b01fb1bb0db1f",
".git/objects/03/e65053425f7c3a739810d36368d202e85d2262": "152c7ed33121ec625179495fe09d3423",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/1bc8d484894fd3a58dd5526dce81bed2b1b920": "2ae7370168669ce69c588e128f41d274",
".git/objects/10/638628849f349c25e12b22a77f313a4247453e": "8a77625afa96dfbc07bd5031b10619e4",
".git/objects/19/0bbed7cf4ad9cafd537cfc647073ce375dc5c1": "d491e1d5aa2f58725fa65e07e9f82ea8",
".git/objects/19/bcbae91c3bb58ce830434a24c1ec65d8d7e920": "bf06f92b3b70f6080f1071542c1dd5f7",
".git/objects/1f/948cf25f714f74db36e0f4af254b1267551aa4": "8ca52f9ba0255b2a222c2b83e48ab39d",
".git/objects/1f/ad3dc0d52f4f5ecef006f294a482c6f55c5e11": "1dc7dab279cb5e76545be78729518706",
".git/objects/20/04a120d91982accda2c1bb26f7b460ef2f4ff7": "974034200ccf705520b71ea4cb5fc845",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/52d11c0a7efa9f8f0b8ffcb9e400b11083ce1d": "e30373d25946e3effb9a07acc956c57a",
".git/objects/26/53d652469525c9e7695362c48271fa9ca391c2": "26cab903d3b0e17003496bdd5df41b73",
".git/objects/2a/ca7adf62efd61ad75ee32e2860ecf2dd8a60e6": "bb14b3bf17fa4ef6cb09e61717d5c47e",
".git/objects/2b/63d3b205e702f5b47a99fe1ecc7b336a9cc3ba": "2bf4229cba5da5103e7740bf1a11f209",
".git/objects/2b/667f7517f9bf153f812f2f213edaba9cbf0125": "dff65e0e5164d944a318325e5ec68399",
".git/objects/2d/cedc3b6b73d187e999619370a43302b8a9d38d": "19c1e30182340eebfca3da83719b6dbf",
".git/objects/2d/d35c01d56a7f33dac3af9d83a5602e19cc4e14": "e8082393273ee9e28ae41daa50549ee2",
".git/objects/30/0c38d9a5c65dcb3758604da373a6c90d03b5f9": "9255b4efe591b097d91590d8671902fd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/0cf61c665590dc69778d0835666d751b6ef2d3": "4d9094373c808a1ddf8e2533c7bc433c",
".git/objects/43/46b9da7d595ee8e5575a9a82809984263f50d5": "49a2abf13542eaed1ccf36f9e84fb70f",
".git/objects/45/2a4c64c8bb1577482568f6bbf0eb976bad3abb": "67a13eadeeb2da66df5770c9c7dc1e8b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/680b772f752cddc620d849ee9699d03ce61a8f": "3b925e877ca5b56706244acc057c696b",
".git/objects/50/e9cca0044117d7dac3814d3409f62e3f48e875": "88253c332f863fb05c9f7a7e146ce2ff",
".git/objects/55/d3be8771e66ddf8ed0b628727c9abe6632f033": "10285f6527c8816602501e6ccebb25f9",
".git/objects/58/dbccdb5df1f6ab03391936252e9461ab4f5377": "b300521c62c1d7781ac5373dc5dea3da",
".git/objects/5c/729b70e8633499faf08b52b79a7335c9885740": "b66878edad2494e462c35408b3fe3198",
".git/objects/64/84a0e4b1797ae0967f8c3ed79951b495c9a4f9": "5312e454543621ee3e78c100104089b3",
".git/objects/67/652c4734ef34a0d002972c530673f30c7d58b9": "18a2fe612019bd1557d36f4eae619390",
".git/objects/6e/235ae27da9c55d759f6da50c50154a746edfda": "0d05fd0766ad9047f2ab7dc0db6d00c8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/b881f05f9a3c16602cfbcf808ef50773d51b71": "873ee40b20dc99a428a526a3632cb186",
".git/objects/7e/8cd33dc4a6521ab7d40c83c2350ffe2edebf63": "89b5b2c0d4fa8ba67d3a19fdb614f487",
".git/objects/7f/df0516cbfcb339c052bb0db4c73babb990b49e": "e87b27473afc6ab2cd80c0e9f755d980",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/673bb2b1782b53e2b0ddff05ccd396af78ff76": "149be84d768af8cd03f10a5a0f5969cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bba4f605a2902e3ca83f297e83c4bc015a8687": "b67e7b13b788ce77f1019cd982f73778",
".git/objects/8e/b66d894be30d753f6e1854c0a8a628b9698eff": "1fee1e7447f0c9aef69139415662b30e",
".git/objects/8f/2c5aaca80e73842ee0e4ffa3a4b86ca7b6ba4b": "c2c662c8db794945b9822b503902241d",
".git/objects/98/479fc8fc06e3d469933bb36e67e49ff7d41a5b": "a0e3c29c3a799464ca708d1c50036841",
".git/objects/99/b54665afef10dbaa4e32399f9874b70132db2a": "753c62ea68faf393fcbbd26750a72356",
".git/objects/99/dcdc86e04c82ed5528dc006d7fe42e19525124": "5c2e3c33897c18a8561fad49c9864b3f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/3ff6343c2a934a31e1c4839b4f6b836d7b00ca": "6c8aa3a2ea743dbc72b5575d51acc193",
".git/objects/a7/2b3b6533c9590919711f58137a2f3daba4fcdb": "8fbb2279cea25b7a8f4958421ef7fd8f",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/1b9cbe4bfd748fac1413c34fc5956ee9a818e2": "1c724aadde38561546988bead80c06d2",
".git/objects/b1/32392793635410ea5b41bd71d1bf948a192384": "7c24eff01af0243e570fca47b0e6a6c4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a95712d20efa603ab565b6c58c39febb009fa0": "f03af8e69cfa459af4d270e7f0ea6c37",
".git/objects/b9/5d0d01a359f27fc067f1a9c097839cfffcbb59": "50b5c067d32336d8e3a69a67453da267",
".git/objects/ba/38ff180cbfe84b46edf231651a9c0662e227ad": "cda1f8407eebe6cecdf70da7e8bdc621",
".git/objects/bb/aedfa313e7ee2d16228266b0ce793bdd25e5dd": "fa1d91c999444f4a5c7a632b5a6284be",
".git/objects/be/2ede929d15f66bf5f423fa1dfc72da0f494053": "8d1e5360e28144135d34f40652a137d7",
".git/objects/bf/a10a2fe19cec8bce203d98a20ebc04e5af3708": "44949768d1de23b23149b0ceafb6576d",
".git/objects/c8/dac8ce16713b277ea914f8c0a151e0eca28e86": "de28493a4f0aa40653589ea2af5ba8be",
".git/objects/cf/32c43f8915f0ee5e871f47bf81785740d654cf": "4454e74f5bc49e3ca7156c546af72365",
".git/objects/cf/aa27d622437b80d256057ae87d47c76deca8be": "d5fb156da41bfaf53abbf348b3324b17",
".git/objects/d0/03068fdd834f792f8374866de701cc2c6e1e4e": "cca4e6c9cbe40abf77052d8157266d5b",
".git/objects/d2/25cf78b670bdd3acc3250128b52aef11315def": "4038035f44cb71248b37bed944f3fa6a",
".git/objects/d5/d360a4341577e2dc044926dd948b636408cc88": "6107413a1aa65724338ef8a6de7523c5",
".git/objects/db/0b0d378e912fe6e585314d2e47332524f9d567": "ec363040603f5869d8067570de858423",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/3ab220e0004888137788abe3c92cd91fcb0271": "061842c045628733546c955abb906102",
".git/objects/e8/4a344cfeea63272964b88596ef0492d980b413": "406582e8461f21399f2d4868eb5252d6",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/2dec8f38456413ca9a2e6f3a6bde69b60e04ca": "e65d2dbd84c6666ed281a0328278c594",
".git/objects/f8/c7ba81f2ca737fe13135afdd1806be2b91f9c4": "22aa6b50bba9a26e7b6d63ab2e992951",
".git/refs/heads/main": "82bfb97cf584899fda75a2fa5130751c",
".git/refs/remotes/origin/main": "c189bfa2939250bce552670dd4d2df76",
".git/refs/remotes/origin/master": "f1607257fd6229708b14c5b61db333ff",
"assets/AssetManifest.json": "bc3f935e9316c4ce6dec1639164f9e90",
"assets/assets/irrigate_spray.csv": "dcb384e4aa2ceb57e700b4d05f4ce3e3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "472b9aef57b43a44b2e708627c876432",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d00394dc6a5ba61712265395116a8ac9",
"/": "d00394dc6a5ba61712265395116a8ac9",
"main.dart.js": "1f23324db963f35d04f8d775ca30e0d9",
"manifest.json": "996063747c6f75ad4c3ba86cc2b0410f",
"version.json": "4f69e1065ae6faea3c5b936c174e73a8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
