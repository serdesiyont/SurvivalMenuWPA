importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  '/index.html',
  '/guide/',
  '/assets/',
  '/canvaskit/',
  '/main.dart.js',
  '/icons',
  '/public/index.html',
  '/flutter.js'
]);

workbox.routing.registerRoute(
  ({request}) => request.mode === 'navigate',
  new workbox.strategies.CacheFirst({
    cacheName: 'pages',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        purgeOnQuotaError: true, // Automatically cleanup if quota is exceeded.
      }),
    ],
  })
);

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ab9d3785c3f31cebfe5edb1d31fa83b1",
"assets/AssetManifest.bin.json": "7899e4371c4adbb5b2c921f4c72a5562",
"assets/AssetManifest.json": "1378e14e204a953999606cf5516a24d4",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/fonts/MaterialIcons-Regular.otf": "2a80d625a0317cce3904cfd1afde4b52",
"assets/manual/Animals.md": "fc23d46006dcfee22816a7025fe12b6b",
"assets/manual/Apps.md": "2725f150cea1dd5aa7b97c639758e2f3",
"assets/manual/Camouflage.md": "eda4ee3ac5cd3c0cf22c4b5de5e5d16c",
"assets/manual/Car-Repair.md": "241d29b9512dccfd7ccfbbe4dd5527b5",
"assets/manual/Cold.md": "36a394260944e4371e2c9b8b5a4b8ec2",
"assets/manual/Credits.md": "2b67f69f58cb245d4225a73778861836",
"assets/manual/DangerousArthropods.md": "5baca5909652811266d80aebe96f3758",
"assets/manual/Desert.md": "b2cdcadd17f050aebb98b7924d21f81a",
"assets/manual/DirectionFinding.md": "a03056b7382a9fcdd068e51d41d6f6a8",
"assets/manual/FAQ.md": "be0ed2c34d1893ba263db457f3da037f",
"assets/manual/fig04-02.png": "13c143f761d4bd105e52b5fbf535a842",
"assets/manual/fig04-03.png": "40b63bad60c9cf1215752403de9b5e63",
"assets/manual/fig04-04.png": "ae0a7fedffb16e11ea3431e0b30dcee3",
"assets/manual/fig04-05.png": "19903f091098c188b0c4be6251a2658f",
"assets/manual/fig04-06.png": "227fe9472b3e7cceac406ffe85a012f0",
"assets/manual/fig04-07.png": "f7d2dea6b7f7a19a848cea48ea063973",
"assets/manual/fig05-01.png": "2ab7ddd9dcecb3ddbfc10c70bb0d6258",
"assets/manual/fig05-02.png": "7c40900348b6ed4d8ac8509cf9ca8194",
"assets/manual/fig05-03.png": "9efaf3fa0ba910c6de7eaeab0998f1cf",
"assets/manual/fig05-04.png": "667be5cd70be2c958c20a2d679393eec",
"assets/manual/fig05-05.png": "debccc5ae2f0f7ef658ad5bdb651b930",
"assets/manual/fig05-06.png": "87a8cf1f83f77941797132b427be9d7d",
"assets/manual/fig05-07.png": "40842ce224e7b4bd23ebe08f0b8332a2",
"assets/manual/fig05-08.png": "11fc9e18686331df9541cda858bd4d48",
"assets/manual/fig05-09.png": "51e6eeb8c4ed0082ac64b1eb594a6008",
"assets/manual/fig05-10.png": "2d038fab2ccf3c5e4f0eafa46d423466",
"assets/manual/fig05-11.png": "7caafef59a53a3d1a6e78f00332f3046",
"assets/manual/fig05-12.png": "7e337423e68cfb8ab98c548478e96bef",
"assets/manual/fig05-13.png": "5f5fb63e7877d01b18081eed99cc4f6c",
"assets/manual/fig05-14.png": "9fc94b32107dc387f340a815adbc3f4f",
"assets/manual/fig05-15.png": "b6598bb233ca621855851453e48db217",
"assets/manual/fig06-03.png": "d5af8990e9a0cc2bd953146ce52d24f5",
"assets/manual/fig06-04.png": "619bdd82c8f2c69c83a0b957b74feeab",
"assets/manual/fig06-05.png": "38842063363b6b6bc206c1a7f6eeba49",
"assets/manual/fig06-06.png": "64f87a7181a5cd3b046918bade502c06",
"assets/manual/fig06-07.png": "d8b927ba780f325b2dd6658527b4b1f6",
"assets/manual/fig06-08.png": "5b6253bc79a548611630bd0a1031cb39",
"assets/manual/fig06-09.png": "d03f57af47078938138db7cb47930c1d",
"assets/manual/fig06-10.png": "3b62ab5ccb4b10b54ff6acdfde124176",
"assets/manual/fig07-01.png": "f1b42154bb9eafb832b41d66cc6e784f",
"assets/manual/fig07-02.png": "6421b8dc96bf0ad22dfa1cbecd6d62f3",
"assets/manual/fig07-03.png": "80163dea2830c9bef840e897cd37a92c",
"assets/manual/fig07-05.png": "4e69bafe749dced9163fffad82f18943",
"assets/manual/fig07-06.png": "520a1ba99992030261d9455d876f8461",
"assets/manual/fig07-07.png": "8e617a0d341b079f0857bb20590f3ab1",
"assets/manual/fig07-08.png": "a5a43fb4bfad79d387b92e078a424516",
"assets/manual/fig08-01.png": "1528f6cf0739ad551b5bffce64f8779e",
"assets/manual/fig08-02.png": "1607f3808be9b8fd7246e75b2db7a2ef",
"assets/manual/fig08-03.png": "606c85ac01ec3d5e15f9379f3da2033b",
"assets/manual/fig08-05.png": "ad3101585b499965337f1de62d8579f1",
"assets/manual/fig08-06.png": "1ed0b3dddb3c70a690cf8bde605dd974",
"assets/manual/fig08-07.png": "561e33412120b27bf0bff2f57df069c1",
"assets/manual/fig08-08.png": "3b4aee29ddcc6155a458ca7276822809",
"assets/manual/fig08-09.png": "1db4526eb5369cf9087718624790c3c3",
"assets/manual/fig08-10.png": "61a28ec42914d3d2c613e4ac1742ff12",
"assets/manual/fig08-11.png": "2c39bee3b5a2c24bb27c3451a3a738d5",
"assets/manual/fig08-12.png": "b393d9abfa60ba5da41c6d18e5df0a10",
"assets/manual/fig08-13.png": "de1751efa9a450e61901a255d6eec936",
"assets/manual/fig08-14.png": "628c2f3d29d2ceb0df6eff44023ff729",
"assets/manual/fig08-15.png": "e0d88b5f95c2fcd6bd2923ad9730b943",
"assets/manual/fig08-16.png": "5c42b7b747813d459f59fd582aac3399",
"assets/manual/fig08-17.png": "4c8ae5f9b0a961e296cdc039d697d5cb",
"assets/manual/fig08-18.png": "a6d51d350df12a7e8c86b0c719f27c45",
"assets/manual/fig08-19.png": "d48e67175286595283c2943c8f89e6aa",
"assets/manual/fig08-20.png": "edf46f10be04305fb1b7d4567e180b20",
"assets/manual/fig08-21.png": "75d24a521bdd34e5554f3bbd0cd5ddec",
"assets/manual/fig08-22.png": "f01a14c3f4035b1226adc20cbe44298a",
"assets/manual/fig08-23.png": "b59f405ddce2a84e6368ba39c9d9994b",
"assets/manual/fig08-24.png": "b01692b065b6bdffb86921d48456b889",
"assets/manual/fig08-25.png": "c3e05aa887df9a711369c15a950d79ea",
"assets/manual/fig08-26.png": "a834c26b478283199e034bf2fa761a3f",
"assets/manual/fig08-27.png": "2f50f1a9085f4de8f1f9cea330cef3bb",
"assets/manual/fig08-28.png": "88b67cb4956c0b574511c0b5abac2b9d",
"assets/manual/fig08-29.png": "a8839706ac3dbe7d1a81e3e9de52e221",
"assets/manual/fig09-01.png": "a43f0a71b8295e084d16b1cf546170ba",
"assets/manual/fig09-02.png": "86a47d175e4a26dab956e75fc727bd07",
"assets/manual/fig09-03.png": "d87652d2456f6309238bc074d3fc818f",
"assets/manual/fig09-04.png": "0e0bc0c1cbf3c8a366ebeb6504627d4b",
"assets/manual/fig12-01.png": "b17f3b0e2af0d4b0dc551a3989953094",
"assets/manual/fig12-02.png": "b7e34ed6183f2e8ea3d7c439b3dc502c",
"assets/manual/fig12-03.png": "535237c3c75085542958fae21e159178",
"assets/manual/fig12-04.png": "881925335ce42cd2f03009586e158b4a",
"assets/manual/fig12-05.png": "23e34ee3de18fd592c7bbb9416cf4432",
"assets/manual/fig12-06.png": "86845ee828a9aa4ef96ac34510f902c3",
"assets/manual/fig12-07.png": "cb77151e350f7424a2966cb89faabae9",
"assets/manual/fig12-08.png": "d9a35a766f104ef5b8e8ae292964acb9",
"assets/manual/fig12-09.png": "25266102fe6885ae781f68f81a08d593",
"assets/manual/fig12-10.png": "8745cfb2558e2e9c18f871703eeec77a",
"assets/manual/fig12-11.png": "45672261891909ff94454be910e627a4",
"assets/manual/fig13-01.png": "902e1be62f609e3da311026d782a5239",
"assets/manual/fig13-02.png": "6ee3d7030f8995503a8a893452c84980",
"assets/manual/fig14-01.png": "68368a6d621d099198442ea0abf1286f",
"assets/manual/fig15-01.png": "2df1c7ffb17d282008a3679ab672d75f",
"assets/manual/fig15-03.png": "eff16d5444995af12f51dc99ca1bbe87",
"assets/manual/fig15-04.png": "b7078184ef3a28b1a8d4e75cc2bcc906",
"assets/manual/fig15-05.png": "f4363881d526d676398a097e3cca21ab",
"assets/manual/fig15-06.png": "0d42e1beee339f5fac0ff7ef5205ff1d",
"assets/manual/fig15-07.png": "c7b74032ba9b09dff174b47519926c68",
"assets/manual/fig16-01.png": "151f41354d788db42d80475000742625",
"assets/manual/fig16-02.png": "281f9acbcddf8f777f2e2981d24f9ebf",
"assets/manual/fig16-03.png": "1c2972898d8acbfc1cf17411cb932c66",
"assets/manual/fig16-04.png": "372994e5abf2a382112d029943dcc632",
"assets/manual/fig16-05.png": "23ccfd97f4c2db9abec9d8a8746e20aa",
"assets/manual/fig16-06.png": "5f5faa5ca676f380d5e2376af74abb85",
"assets/manual/fig16-08.png": "1044adc758038f3c4c27d066130f47a1",
"assets/manual/fig16-09.png": "1a1cca009c4902ac18e79ca42ef25de1",
"assets/manual/fig16-10.png": "64fcdac9d317945eff7b196b02faf567",
"assets/manual/fig16-11.png": "bb8c5c1b36a54c8a0391a1eed394f5af",
"assets/manual/fig16-12.png": "0b450731a91d660f0f324365d1009fa3",
"assets/manual/fig16-13.png": "8d0bbb78fea815c3c53e000c7f5ef2f7",
"assets/manual/fig16-14.png": "d79c9d2c932f86e372ca77b64d815e1d",
"assets/manual/fig16-15.png": "f4fc131bd9336b0d3dea1ef92af760bd",
"assets/manual/fig16-16.png": "6a21062f06e3a121fd23a6d990269656",
"assets/manual/fig16-17.png": "8b3bc05857060a60acbf5db0dacbbfc4",
"assets/manual/fig16-18.png": "3d7358772c26a3653286437ee6fd8397",
"assets/manual/fig17-01.png": "7e616302f83c5097f16ed7fcccc63312",
"assets/manual/fig17-02.png": "764224532d7aeb7a07c308e1c38dcfa7",
"assets/manual/fig17-03.png": "c19d0961ae5d0ae251fb4504c401903a",
"assets/manual/fig17-04.png": "2c5c0299c028b3764a21bd35c978171a",
"assets/manual/fig17-05.png": "5a143381c118745a19c1cc11192e90af",
"assets/manual/fig17-06.png": "025663cd661b9597c08fc7046d8f273e",
"assets/manual/fig17-07.png": "a4d121f27b0f66c6939adc579cb2e110",
"assets/manual/fig17-08.png": "f3a7e56c3a0268fe1c92009d76dabecd",
"assets/manual/fig18-01.png": "6b75a12d76322e0b14be813844bdf337",
"assets/manual/fig18-02.png": "d81237966c6e1414e30dfd007b07bbf5",
"assets/manual/fig18-03.png": "8a648221d6e533b2b7680794980df918",
"assets/manual/fig18-04.png": "0b98058e7b61db27d37736dfe5f901ee",
"assets/manual/fig19-01.png": "749a87b43ea49822d37b676518a271d2",
"assets/manual/fig19-02.png": "afec0f3f26ed8879f7476f6ed3bc9f92",
"assets/manual/fig19-03.png": "b2f14d13bb87365f8372babd893d5b09",
"assets/manual/fig19-04.png": "328cd9186b598e5790c72d5af589f875",
"assets/manual/fig19-05.png": "307df774bec1f4df2170c95d55abba8a",
"assets/manual/fig19-06.png": "1c3cf2b86ea97df74f0414b8497a54b7",
"assets/manual/fig19-07.png": "dafd16eafe2f6c642034f5addd845435",
"assets/manual/fig19-08.png": "46567d0d8bd69f864e8f19b230247837",
"assets/manual/fig19-09.png": "cf43104f3c6b3946eb426b55ae4eb134",
"assets/manual/fig23-01.png": "2f20166a61c8fbbc8bcaaee6f9f2f179",
"assets/manual/Fire.md": "9fa003c1bd4b9e8c52967ab7590c4512",
"assets/manual/FishAndMollusks.md": "c6025583ecef9618d53c67ca7a8de79e",
"assets/manual/Food.md": "f1648d9bface2a982bba55a367b40d59",
"assets/manual/Home.md": "65a86f1fd9c60d56c387fac7f609521b",
"assets/manual/HostileAreas.md": "33851a99955cbc1d952a1329b5d1dad8",
"assets/manual/image232.jpg": "3425c958b3d2fc45cfbd79c7cb57cbd9",
"assets/manual/image233.jpg": "d9de6588116d66dae2e5c1a68ce8224d",
"assets/manual/image234.jpg": "8d2f2c57b809c785b3ab5c8153473c41",
"assets/manual/image235.jpg": "3df2b6b1d0b499718010554771e157fe",
"assets/manual/image236.jpg": "ff7ab854aa604f465ebb61423c14bc2c",
"assets/manual/image237.jpg": "f6eeb072cf4a95b60a306cdf09d3c6c8",
"assets/manual/image238.jpg": "45c1702ac8a2a83d902a6bf37e411400",
"assets/manual/image239.jpg": "27de087bb06df9987f0b8a0b5ea8b7eb",
"assets/manual/image240.jpg": "f4b7f43bd0e955bbd05f5421267645e2",
"assets/manual/image241.jpg": "7c3f0e95ee4710cfbe0b44e323b13829",
"assets/manual/image242.jpg": "34ce1cf6cb92ba372769febcfde534ff",
"assets/manual/image243.jpg": "3cdc7a6ddc0a38bc2cdffb2cbdccc1dc",
"assets/manual/image244.jpg": "76212eeb1e5d3760e726be94ddb233a6",
"assets/manual/image245.jpg": "b3a0fef353f85f655cbbf7bbd585fd82",
"assets/manual/image246.jpg": "7c9fa983c5205be714453d63925cff82",
"assets/manual/image247.jpg": "80d41d48aa4a2dfb574b74f130a312f5",
"assets/manual/image248.jpg": "7710daff6ddaced1f25c9aa583b2c4d8",
"assets/manual/image249.jpg": "141203b362aa1c1db1965d30bb384003",
"assets/manual/image250.jpg": "c75ea87194a538a8f40eae919d281705",
"assets/manual/image251.jpg": "73e68099e6adeca9ea3e8094b9b4c32e",
"assets/manual/image252.jpg": "5328e210ec1f5529b3a5bfb3c675be09",
"assets/manual/image253.jpg": "7308df683246e1bf05966b480061e397",
"assets/manual/image254.jpg": "0c7a3ca282d8216d07bc1b5c78b39508",
"assets/manual/image255.jpg": "fcd9e9daa62e86a1ff243d95bd24ea15",
"assets/manual/image256.jpg": "513fedf893c41c952aada96eefbd07ee",
"assets/manual/image257.jpg": "c1a31f15d3fe8ab42c4378d51fe9b9fe",
"assets/manual/image258.jpg": "93d991a64a2b38b0691073a6ecbca037",
"assets/manual/image259.jpg": "9d28a88b4e1dd14a8c2827f25918c183",
"assets/manual/image260.jpg": "47ea7175247e88ea5c532f69a29e45b9",
"assets/manual/image261.jpg": "7a9ab5725a25b121790b74bc96fb3946",
"assets/manual/image262.jpg": "d5cb5b1678168bdb066cefe378c691bc",
"assets/manual/image263.jpg": "542e8a96b039c9f3c98020e47268d063",
"assets/manual/image264.jpg": "39984bae77ebcfc6360ba944ae229ff7",
"assets/manual/image265.jpg": "c084cb47fbe15431e979bae3ffb1aa6c",
"assets/manual/image266.jpg": "f8ac5ee45717378e7da5bd63f63a8bfe",
"assets/manual/image267.jpg": "ead8e1a4ccd90df99be16afa9acc20f9",
"assets/manual/image268.jpg": "eb0f6f187afb35b33c2470cb2092cd4a",
"assets/manual/image269.jpg": "d74c3d83add78fdd614cc8593cb5f137",
"assets/manual/image270.jpg": "7faa790fd69bd5c97b7143adf0043476",
"assets/manual/Introduction.md": "ae7d5289c7b7d7c52cc198e7267043df",
"assets/manual/Kits.md": "39f1cefd16818e18659b3122ce3584e9",
"assets/manual/ManMadeHazards.md": "08138fcba6c927c5610077c17bd3b116",
"assets/manual/Medicine.md": "826f61e40a4468d1f19685081629d464",
"assets/manual/MultiTool.md": "6107224a05a725630191e53197f5f0c9",
"assets/manual/People.md": "0e8386890f4db2ce69b0593262cb7a6f",
"assets/manual/Planning.md": "572119ce44c117effcceae2f522a2c7f",
"assets/manual/Plants.md": "b6731113edd49bc649df13373d6edba1",
"assets/manual/Poisonous-Plants.md": "3a064b8e2abb9da03c5bab11dfc73ce6",
"assets/manual/Power.md": "013ecf1eef97b6642db2f778c5430534",
"assets/manual/Psychology.md": "fecb318176666f8d59f8db86e9750abd",
"assets/manual/RopesAndKnots.md": "d731bb679c41eba0ca1f5096707453c7",
"assets/manual/Sea.md": "a0e4d49d35c5a27fbae5eee45be598b1",
"assets/manual/Self-Defense.md": "bd3a7778b279be680fe777c089d7767a",
"assets/manual/Shelter.md": "d40d9435f304ec6fc9063b0c2ab9015b",
"assets/manual/Signaling.md": "4610cf0eeea5e73d70800d51c6cc4828",
"assets/manual/Tools.md": "14264e11c66a5b0e8aeb5eaa135f57ac",
"assets/manual/TranslatorNotes.md": "6c999aadfe761e73d36726080c9c8e44",
"assets/manual/Tropical.md": "51b73032440eef0f472d79dc55cee24d",
"assets/manual/Water.md": "d339624115b3a2dde3a37bb2482169c3",
"assets/manual/WaterCrossing.md": "e1ea04e6e8b9c6337f948b92a1ba74f2",
"assets/manual/_Footer.md": "5d26d527385bfbb3526e505c91d4174b",
"assets/NOTICES": "ef0f5a00007ee123911f3255294ad892",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c33b4fffd0254e104a85f9b6c8d00ac",
"/": "5c33b4fffd0254e104a85f9b6c8d00ac",
"main.dart.js": "0f9e7ef08329b4aaece9d41c91bc09e3",
"manifest.json": "8fdb09005e1c9d1065abef2d787a7311",
"version.json": "feaaa349f6e41a3d9cb5892318b5fa43"};
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
