/* ================= NABLA · Service worker (PWA) =================
   Caché de la app para que funcione instalada y sin conexión.
   El build.js reemplaza 63016d4d4c por un hash del contenido, así cada
   versión nueva invalida la caché anterior automáticamente. */
const V='nabla-63016d4d4c';
const SHELL=['./','./index.html','./nabla.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);

  if(url.origin===self.location.origin){
    // Documento (navegación): red primero, con la caché como respaldo sin conexión.
    if(req.mode==='navigate'){
      e.respondWith(
        fetch(req).then(res=>{ const copy=res.clone(); caches.open(V).then(c=>c.put(req,copy)); return res; })
          .catch(()=>caches.match(req).then(r=>r||caches.match('./index.html')))
      );
      return;
    }
    // Otros archivos propios (íconos, manifest): caché primero.
    e.respondWith(caches.match(req).then(r=>r||fetch(req)));
    return;
  }

  // Recursos externos (fuentes, MathJax): caché primero si ya se descargaron,
  // si no, se piden a la red y quedan guardados para la próxima vez sin conexión.
  e.respondWith(
    caches.match(req).then(cached=>{
      const fetchP=fetch(req).then(res=>{
        if(res&&res.ok) caches.open(V).then(c=>c.put(req,res.clone()));
        return res;
      }).catch(()=>cached);
      return cached||fetchP;
    })
  );
});
