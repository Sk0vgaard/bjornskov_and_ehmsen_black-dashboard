!function(){"use strict";var e,r,t,n,o={},a={};function u(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,u),t.loaded=!0,t.exports}u.m=o,e=[],u.O=function(r,t,n,o){if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(u.O).every(function(e){return u.O[e](t[c])})?t.splice(c--,1):(i=!1,o<a&&(a=o));i&&(e.splice(d--,1),r=n())}return r}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,n,o]},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,{a:r}),r},u.d=function(e,r){for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce(function(r,t){return u.f[t](e,r),r},[]))},u.u=function(e){return e+".225af11a6b9982cfa037.js"},u.miniCssF=function(e){return"styles.1bd3a7080cc742677fe9.css"},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r={},t="black-dashboard-angular:",u.l=function(e,n,o,a){if(r[e])r[e].push(n);else{var i,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var f=d[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==t+o){i=f;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",t+o),i.src=u.tu(e)),r[e]=[n];var s=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(function(e){return e(n)}),t)return t(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),c&&document.head.appendChild(i)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},u.tu=function(e){return void 0===n&&(n={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(n=trustedTypes.createPolicy("angular#bundler",n))),n.createScriptURL(e)},u.p="https://sk0vgaard.github.io/bjornskov_and_ehmsen_black-dashboard/",function(){var e={666:0};u.f.j=function(r,t){var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(666!=r){var o=new Promise(function(t,o){n=e[r]=[t,o]});t.push(n[2]=o);var a=u.p+u.u(r),i=new Error;u.l(a,function(t){if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}},"chunk-"+r,r)}else e[r]=0},u.O.j=function(r){return 0===e[r]};var r=function(r,t){var n,o,a=t[0],i=t[1],c=t[2],d=0;for(n in i)u.o(i,n)&&(u.m[n]=i[n]);if(c)var l=c(u);for(r&&r(t);d<a.length;d++)u.o(e,o=a[d])&&e[o]&&e[o][0](),e[a[d]]=0;return u.O(l)},t=self.webpackChunkblack_dashboard_angular=self.webpackChunkblack_dashboard_angular||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}()}();