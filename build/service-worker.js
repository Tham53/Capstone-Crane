importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/Tham53/Capstone-Crane/precache-manifest.9bf0db61a6acb3216c9c4df5d3d96e78.js"
);

workbox.clientsClaim();


self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/Tham53/Capstone-Crane/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
