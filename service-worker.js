if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const c=s=>l(s,r),t={module:{uri:r},exports:u,require:c};e[r]=Promise.all(n.map((s=>t[s]||c(s)))).then((s=>(i(...s),u)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"my_project"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/Test/css/162.f67b1cbf.css",revision:null},{url:"/Test/css/208.019d73e4.css",revision:null},{url:"/Test/css/214.55887d7d.css",revision:null},{url:"/Test/css/299.9c1d0ff1.css",revision:null},{url:"/Test/css/331.e808c080.css",revision:null},{url:"/Test/css/357.9472c216.css",revision:null},{url:"/Test/css/498.0c1fce1e.css",revision:null},{url:"/Test/css/536.58befc39.css",revision:null},{url:"/Test/css/69.fe695ceb.css",revision:null},{url:"/Test/css/718.0c46db3a.css",revision:null},{url:"/Test/css/80.1a3df642.css",revision:null},{url:"/Test/css/887.ca865b38.css",revision:null},{url:"/Test/css/927.a815ac73.css",revision:null},{url:"/Test/css/949.7a96a280.css",revision:null},{url:"/Test/css/971.0265e9d3.css",revision:null},{url:"/Test/css/985.b3ce2d1a.css",revision:null},{url:"/Test/css/app.9267f65a.css",revision:null},{url:"/Test/css/chunk-vendors.352742f4.css",revision:null},{url:"/Test/fonts/bootstrap-icons.70a9dee9.woff",revision:null},{url:"/Test/fonts/bootstrap-icons.bfa90bda.woff2",revision:null},{url:"/Test/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/Test/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/Test/index.html",revision:"083e2d4b76142dc598e8bf6886f84b8b"},{url:"/Test/js/162.13503ed4.js",revision:null},{url:"/Test/js/208.bee67da4.js",revision:null},{url:"/Test/js/214.8fe9c759.js",revision:null},{url:"/Test/js/299.bccfb314.js",revision:null},{url:"/Test/js/331.cc41eae3.js",revision:null},{url:"/Test/js/357.431da153.js",revision:null},{url:"/Test/js/498.aa9a5c4c.js",revision:null},{url:"/Test/js/536.b4f54d5a.js",revision:null},{url:"/Test/js/659.7bdb1c5b.js",revision:null},{url:"/Test/js/69.f298e9c3.js",revision:null},{url:"/Test/js/718.ce50076c.js",revision:null},{url:"/Test/js/80.c31f2185.js",revision:null},{url:"/Test/js/887.9207aa2f.js",revision:null},{url:"/Test/js/927.c2b8b906.js",revision:null},{url:"/Test/js/949.f8ec917e.js",revision:null},{url:"/Test/js/971.1e3a2436.js",revision:null},{url:"/Test/js/985.71c1682a.js",revision:null},{url:"/Test/js/app.874d5ee4.js",revision:null},{url:"/Test/manifest.json",revision:"dc4939674f00eb2379b8f714642b3020"},{url:"/Test/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
