!function(){"use strict";var e,t,n,r,o,a={},f={};function i(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=a,i.amdO={},e=[],i.O=function(t,n,r,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var f=!0,d=0;d<n.length;d++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[d])}))?n.splice(d--,1):(f=!1,o<a&&(a=o));if(f){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return({13:"b5b0150a",35:"component---src-pages-index-md",125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",141:"490477d6",206:"2dee68d8",233:"862bb76f",251:"1e479c3f",296:"ea88be26",305:"5e65052d",323:"483feae5",351:"commons",461:"e82996df",490:"b6f3ea4c",530:"f5cc1685",532:"styles",602:"c9f1e04f",714:"8b61fb39",723:"b19b3968",898:"cdae3cd1",914:"987e9e88"}[e]||e)+"-"+{8:"0dff7736e4b096d1014b",13:"51635c6281a95a5fdd9a",35:"b09cc0c71661f6ae795c",125:"98c92d07fb285a6b1d87",141:"7f495ee7c956232df49b",206:"1fbb1d9320dc674bcd89",233:"5fbb9e7131a273dff126",251:"6154cf7f4ae0abd94faa",296:"b696d6d0537b01ed472b",305:"3da7b1306517d30e9474",323:"f4485c1dc6c2e0211bdd",351:"7e4b9e8cce0870ba1bfa",461:"2ec46b5b0bd6c059788b",490:"2c6cdbee8d52b6e1d6c3",530:"3838a322c1214ee24e31",532:"376a4ba1751652d301ff",574:"cbe15b37e73004454b89",602:"7cffb3920acaaf239c8e",714:"b6921138e485c094cce1",718:"c2ee1fefc826cbc1c0b0",723:"930089e335c800844c5d",898:"b0c486f7e42876b4aef7",914:"6e0380a9669606be9c6f"}[e]+".js"},i.miniCssF=function(e){return"styles.6fdcebbfbff07a5afcce.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="dev-site-platform-template:",i.l=function(e,r,o,a){if(t[e])t[e].push(r);else{var f,d;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){f=l;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",n+o),f.src=e),t[e]=[r];var s=function(n,r){f.onerror=f.onload=null,clearTimeout(b);var o=t[e];if(delete t[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(r)})),n)return n(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),d&&document.head.appendChild(f)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.p="/stock/",r=function(e){return new Promise((function(t,n){var r=i.miniCssF(e),o=i.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(f=n[r]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(o===e||o===t))return f}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var f;if((o=(f=a[r]).getAttribute("data-href"))===e||o===t)return f}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var f=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=f,d.request=i,o.parentNode.removeChild(o),r(d)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},o={658:0},i.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{532:1}[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={658:0,532:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=i.p+i.u(t),f=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",f.name="ChunkLoadError",f.type=o,f.request=a,r[1](f)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],f=n[1],d=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in f)i.o(f,r)&&(i.m[r]=f[r]);if(d)var c=d(i)}for(t&&t(n);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},n=self.webpackChunkdev_site_platform_template=self.webpackChunkdev_site_platform_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),i.nc=void 0}();
//# sourceMappingURL=webpack-runtime-b5a9e53ba08ec0c3658d.js.map