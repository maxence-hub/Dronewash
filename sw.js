self.addEventListener('install', (event) => {
    console.log('Service Worker installé');
});

self.addEventListener('fetch', (event) => {
    console.log('Intercepté:', event.request.url);
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(() => {
        console.log('Service Worker enregistré');
    }).catch(err => console.log('Erreur SW:', err));
}