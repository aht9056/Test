if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let t={};const o=s=>n(s,i),u={module:{uri:i},exports:t,require:o};e[i]=Promise.all(l.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"my_project"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/Test/css/330.a9e609ab.css",revision:null},{url:"/Test/css/594.683b72e3.css",revision:null},{url:"/Test/css/804.e2bbc66e.css",revision:null},{url:"/Test/css/838.32489b96.css",revision:null},{url:"/Test/css/app.9ec242f7.css",revision:null},{url:"/Test/css/chunk-vendors.9a68a74e.css",revision:null},{url:"/Test/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/Test/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/Test/index.html",revision:"80e958485478e1f9fbc1a4554d675bd6"},{url:"/Test/js/224.a795d7df.js",revision:null},{url:"/Test/js/330.65b4cb03.js",revision:null},{url:"/Test/js/594.58b174a5.js",revision:null},{url:"/Test/js/804.c2a8821c.js",revision:null},{url:"/Test/js/838.31efc361.js",revision:null},{url:"/Test/js/app.ea479cee.js",revision:null},{url:"/Test/js/chunk-vendors.b82594c3.js",revision:null},{url:"/Test/manifest.json",revision:"dc4939674f00eb2379b8f714642b3020"},{url:"/Test/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
