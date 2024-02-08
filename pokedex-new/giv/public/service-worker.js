const PRECACHE_NAME = 'app-shell'; //precache
const POKE_CACHE = 'poke-cache'; //cache for pokeapi
const POKE_DATA_CACHE = 'poke-data';
const POKE_SPRITE_CACHE = 'poke-sprite';
const ROOT_URL = 'http://127.0.0.1:3000';
const APP_SHELL_FILES = [
    '/',
    '/index.html',
    '/index.js',
    '/index.css',
    '/manifest.json',
    '/App.js',
    '/fallback.json',
    '/icons/icon_144.png',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
];

self.addEventListener('install', function(event) {
    console.log('Service Worker installing...');
        // Pre-caching : cache des fichiers indispensables
        
    event.waitUntil(
        caches.open(PRECACHE_NAME).then(function(cache) {
            return cache.addAll(APP_SHELL_FILES);
        })
    );
});
self.addEventListener('activate', function(event) {
    console.log('Service Worker activating...');
});
// Cache only strategy
function getFromCache(cacheName, request) {
    return cache.open(cacheName).then(function(cache) {
        return cache.match(request).then(function(cachedResult) {
            if(cachedResult){
                console.log('Return from cache : ', request.url);
                return cachedResult;
            }else{
                console.error("Couldn't fetch "+request.url+" from precache "+cacheName);
            }
        });
    });
}

function getPlacehorlder(){
    return caches.open(PRECACHE_NAME).then(function(cache){
        return cache.match('/sprites/placeholder.png');
    })
}

function getFromCacheOrNetwork(cacheName, request, onError = null) {
    return cache.open(cacheName).then(function(cache) {
        return cache.match(request).then(function(cachedResult) {
            if(cachedResult){
                console.log('Return from cache : ', request.url);
                return cachedResult;
            }else{
                console.log("Returned from network" + request.url)
                return fetch(request).then(function(networkResult){
                    cache.put(request.url, networkResult.clone());
                    return networkResult;
                }).catch(function(error){
                    console.log("Error fetching" + request.url, error);
                    if(onError){
                        return onError();
                    }
                })
            }
        });
    });
}

self.addEventListener('fetch', function(event) {
    // console.log('Fetching : ', event.request.url);

    if(APP_SHELL_FILES.includes(event.request.url.replace(ROOT_URL, ''))){
        event.respondWith(getFromCache(PRECACHE_NAME, event.request));
    }
    else if(event.request.url.startsWith('https://pokeapi.co/api/')){
        event.respondWith(getFromCacheOrNetwork(POKE_DATA_CACHE, event.request))
    }
    else if(event.request.url.startsWith('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprite/')){
        event.respondWith(getFromCacheOrNetwork(POKE_SPRITE_CACHE, event.request))
    }
    else {
        event.respondWith(fetch(event.request));
    }
});
