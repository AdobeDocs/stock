!function(){"use strict";var e,t,n,r,o,a={},i={};function f(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,f),n.loaded=!0,n.exports}f.m=a,e=[],f.O=function(t,n,r,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(f.O).every((function(e){return f.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<a&&(a=o));i&&(e.splice(u--,1),t=r())}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return({35:"0abf01d3",125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",146:"9f96d65d",206:"2dee68d8",305:"5e65052d",351:"commons",461:"e82996df",490:"b6f3ea4c",530:"f5cc1685",532:"styles",714:"8b61fb39",964:"component---src-pages-index-md"}[e]||e)+"-"+{35:"56aebb90f5aa630bcf3b",102:"d2bf0c2205ab2f54a35c",125:"8d32abb923f5df34ad5e",146:"c35700ed31b3b2552e78",206:"a9db2b2d78a1f2e90d67",305:"ad3cd0bb85d917b46497",351:"4367700f549917702222",461:"c85c5670579b75cc4232",490:"e85a071c6feebe45864d",530:"9d5205b4032975124fc5",532:"3bc8455287b4e197f2a6",586:"d7678c5e7590b6c13e96",714:"21f30d88e91a1bcf2ed2",776:"53bb212cb285f3665f4d",964:"3ed16875dd7b6b5d0f6e"}[e]+".js"},f.miniCssF=function(e){return"styles.53d22cf95f29e4134944.css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="dev-site-platform-template:",f.l=function(e,r,o,a){if(t[e])t[e].push(r);else{var i,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var s=function(n,r){i.onerror=i.onload=null,clearTimeout(b);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),n)return n(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),c&&document.head.appendChild(i)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},f.p="/stock/",r=function(e){return new Promise((function(t,n){var r=f.miniCssF(e),o=f.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var i;if((o=(i=a[r]).getAttribute("data-href"))===e||o===t)return i}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=f,o.parentNode.removeChild(o),r(c)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},o={658:0},f.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{532:1}[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={658:0,532:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=f.p+f.u(t),i=new Error;f.l(a,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],i=n[1],c=n[2],u=0;for(r in i)f.o(i,r)&&(f.m[r]=i[r]);if(c)var d=c(f);for(t&&t(n);u<a.length;u++)o=a[u],f.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return f.O(d)},n=self.webpackChunkdev_site_platform_template=self.webpackChunkdev_site_platform_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-e22e0846a1864b194a43.js.map