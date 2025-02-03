(function(){"use strict";var e={9470:function(e,t,n){var o=n(4373),r=n(3863);const a=()=>{const e=o.A.create({timeout:2e4,headers:{"Content-Type":"application/json"}});return e.interceptors.request.use((e=>{const t=r.A.state.idToken;return t&&(e.headers.Authorization=`Bearer ${t}`),e})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e},i=a();t.A=i},3386:function(e,t,n){var o=n(6848),r=function(){var e=this,t=e._self._c;return t("router-view",{staticClass:"h-100 w-100"})},a=[],i=n(5860),s=n(9470),u={components:{},computed:{},methods:{async getTypeList(){try{const e=await s.A.get("/api/getTypeList");this.$store.state.generalInfo.typeList=e.data.typeList,console.log(this.$store.state.generalInfo.typeList)}catch(e){console.error("Error fetching type list:",e)}}},created(){const e=(0,i.xI)();e.onAuthStateChanged((e=>{e?e.getIdToken(!0).then((e=>{console.log("Auth Token:",e),this.$store.state.idToken=e})).catch((e=>{console.error("Error getting token:",e)})):console.log("not login")}))},beforeMount(){this.getTypeList()},mounted(){}},c=u,l=n(1656),d=(0,l.A)(c,r,a,!1,null,null,null),f=d.exports,p=n(4458);(0,p.k)("/Test/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var h=n(6178);o["default"].use(h.Ay);const m=[{path:"/",name:"index",component:()=>n.e(80).then(n.bind(n,8080)),children:[{path:"/home",name:"home",component:()=>n.e(949).then(n.bind(n,3949))},{path:"/about",name:"about",component:()=>n.e(208).then(n.bind(n,1208))},{path:"/booklist",name:"booklist",component:()=>n.e(331).then(n.bind(n,5331))},{path:"/login",name:"login",component:()=>n.e(299).then(n.bind(n,9299))},{path:"/register",name:"register",component:()=>n.e(69).then(n.bind(n,4069))},{path:"/emailverify",name:"emailverify",component:()=>n.e(887).then(n.bind(n,7887))},{path:"/emailoption",name:"emailoption",component:()=>n.e(162).then(n.bind(n,9162))},{path:"/forgetpassword",name:"forgetpassword",component:()=>n.e(927).then(n.bind(n,6927))},{path:"/resetPassword",name:"resetPassword",component:()=>n.e(718).then(n.bind(n,3718))}]},{path:"/publisher",name:"publisher",component:()=>n.e(498).then(n.bind(n,2498)),children:[{path:"addBook",name:"addBook",component:()=>Promise.all([n.e(659),n.e(357)]).then(n.bind(n,6140))},{path:"requestList",name:"requestList",component:()=>Promise.all([n.e(659),n.e(214)]).then(n.bind(n,5835))}]},{path:"/admin",name:"admin",component:()=>n.e(985).then(n.bind(n,985)),children:[{path:"requestList",name:"requestList",component:()=>n.e(536).then(n.bind(n,1536))},{path:"bookMangement",name:"bookMangement",component:()=>n.e(971).then(n.bind(n,971))}]}],g=new h.Ay({mode:"hash",base:"/",routes:m});g.beforeEach(((e,t,n)=>{"/"===e.path?n("/home"):n()}));const b=h.Ay.prototype.push;h.Ay.prototype.push=function(e){return b.call(this,e).catch((e=>{if("NavigationDuplicated"!==e.name)throw e}))};var y=g,v=n(3863),w=(n(8077),n(1641)),k=n(4486),A=(n(9313),n(6210)),E=n.n(A),C=n(167),j=n.n(C),T=n(1275),I=n.n(T),L=n(5319),S=n.n(L),O=n(7999),B=n.n(O),N=n(4054),P=n.n(N),x=n(1362),_=n.n(x),M=n(874),q=n.n(M),F=n(1227),G=n.n(F),W=n(685),$=n.n(W),U=n(7705),D=n.n(U),R=n(8082),V=n.n(R),H=n(1604),J=n.n(H),K=n(8228),z=n.n(K),Z=n(6782),Y=n.n(Z),Q=n(175),X=n.n(Q),ee=n(9940),te=n.n(ee),ne=n(1178),oe=n.n(ne),re=n(4783),ae=n.n(re),ie=n(3952),se=n.n(ie),ue=n(9507),ce=n.n(ue);o["default"].use(ce()),o["default"].use(se()),o["default"].use(ae()),o["default"].use(oe()),o["default"].use(te()),o["default"].use(X()),o["default"].use(Y()),o["default"].use(z()),o["default"].use(J()),o["default"].use(V()),o["default"].use(D()),o["default"].use($()),o["default"].use(G()),o["default"].use(q()),o["default"].use(_()),o["default"].use(P()),o["default"].use(B()),o["default"].use(S()),o["default"].use(I()),o["default"].use(j()),o["default"].use(E());var le=n(4874),de=n.n(le);const fe=getComputedStyle(document.documentElement),pe=(fe.getPropertyValue("--color-primary").trim(),de().mixin({customClass:{popup:"swal-popup",title:"swal-title",confirmButton:"swal-confirm-button",cancelButton:"swal-cancel-button"},buttonsStyling:!1,showConfirmButton:!0,confirmButtonText:"OK",showCancelButton:!0,cancelButtonText:"Cancel",allowOutsideClick:!1}));var he=pe;const me=n(100),ge=me.auth;(0,i.hg)(ge,(e=>{e?e.getIdToken().then((e=>{sessionStorage.setItem("token",`Bearer ${e}`)})):sessionStorage.removeItem("token")})),o["default"].use(w.vGs),o["default"].use(k.YS),o["default"].prototype.$swal=he,o["default"].config.productionTip=!1,new o["default"]({router:y,store:v.A,render:e=>e(f)}).$mount("#app")},3863:function(e,t,n){var o=n(6848),r=n(3518);o["default"].use(r.Ay);const a={state:{user:null,notVerifyUser:null,userInfoData:null}},i={state:{typeList:{},publisherList:{}}};t.A=new r.Ay.Store({state:{isLogin:!1,idToken:null},actions:{},mutations:{SET_IS_LOGIN(e,t){e.isLogin=t}},getters:{isLogin:e=>e.isLogin},modules:{userInfo:a,generalInfo:i}})},100:function(e,t,n){n.r(t),n.d(t,{addUserInfo:function(){return m},auth:function(){return c},emailIsRegister:function(){return y},firebaseApp:function(){return u},resendVerificationEmail:function(){return b},resetPassword:function(){return k},sendResetEmail:function(){return v},signInWithEmail:function(){return g},signInWithGoogle:function(){return f},signOut:function(){return p},signUpWithEmail:function(){return h},verifyResetCode:function(){return w}});var o=n(6400),r=n(9916),a=n(5860),i=n(7617);const s={apiKey:"AIzaSyCjjsljMohsGbvOOxj2kuv5PGywG-NgwW4",authDomain:"myproject-dd0cb.firebaseapp.com",projectId:"myproject-dd0cb",storageBucket:"myproject-dd0cb",messagingSenderId:"648871360118",appId:"1:648871360118:web:d68bf3ba203a751b3d1157",measurementId:"G-WBZJN6Z0V5"},u=(0,o.Wp)(s),c=((0,r.P5)(u),(0,a.xI)(u)),l=(0,i.aU)(u),d=new a.HF;d.setCustomParameters({prompt:"select_account"}),(0,a.oM)(c,a.F0).then((()=>{console.log("Persistence set to local storage.")})).catch((e=>{console.error("Error setting persistence:",e)}));const f=()=>(0,a.df)(c,d),p=async()=>{await(0,a.CI)(c)},h=async(e,t,n)=>{try{const o=await(0,a.eJ)(c,e,t);return await(0,a.gA)(o.user),await(0,a.r7)(o.user,{displayName:n}),o}catch(o){throw console.error("Error during signup:",o),o}},m=async(e,t)=>{try{await(0,i.BN)((0,i.H9)(l,"users",e),t)}catch(n){throw console.error("Error during signup:",n),n}},g=(e,t)=>{try{return(0,a.x9)(c,e,t)}catch(n){throw console.error("Error during sign in:",n.code,n.message),n}},b=async()=>{const e=c.currentUser;e&&await(0,a.gA)(e)},y=async e=>{try{const t=await(0,a.Wm)(c,e);return t}catch(t){throw console.error("Error during sign in:",t.code,t.message),t}},v=async e=>{try{await(0,a.J1)(c,e),console.log("重置密碼連結已發送，請檢查你的信箱。")}catch(t){throw console.error("Error during sign in:",t.code,t.message),t}},w=async e=>{try{await(0,a.RE)(c,e)}catch(t){throw console.error("Error during sign in:",t.code,t.message),t}},k=async(e,t)=>{try{await(0,a.R4)(c,e,t)}catch(n){console.error("重置密碼錯誤:",n),(void 0).errorMessage="重置密碼失敗，請稍後再試"}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{69:"f298e9c3",80:"c31f2185",162:"13503ed4",208:"bee67da4",214:"8fe9c759",299:"bccfb314",331:"cc41eae3",357:"431da153",498:"aa9a5c4c",536:"b4f54d5a",659:"7bdb1c5b",718:"ce50076c",887:"9207aa2f",927:"c2b8b906",949:"f8ec917e",971:"1e3a2436",985:"71c1682a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{69:"fe695ceb",80:"1a3df642",162:"f67b1cbf",208:"019d73e4",214:"55887d7d",299:"9c1d0ff1",331:"e808c080",357:"9472c216",498:"0c1fce1e",536:"58befc39",718:"0c46db3a",887:"ca865b38",927:"a815ac73",949:"7a96a280",971:"0265e9d3",985:"b3ce2d1a"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my_project:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Test/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var o=n&&n.type,s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=s,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=s,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,null,r,a)}))},r={524:0};n.f.miniCss=function(e,t){var n={69:1,80:1,162:1,208:1,214:1,299:1,331:1,357:1,498:1,536:1,718:1,887:1,927:1,949:1,971:1,985:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3386)}));o=n.O(o)})();
//# sourceMappingURL=app.874d5ee4.js.map