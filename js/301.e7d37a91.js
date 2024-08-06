"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[301],{9301:function(e,t,n){n.d(t,{VF:function(){return wm},j2:function(){return fm},Ai:function(){return Im},nA:function(){return _m},xw:function(){return Sm},WT:function(){return Tm},Ru:function(){return Em},G6:function(){return mm},CI:function(){return ym},bk:function(){return vm},Sl:function(){return bm}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,a=s?n[e.charAt(r)]:0;++r;const c=r<e.length,u=c?n[e.charAt(r)]:64;++r;const l=r<e.length,h=l?n[e.charAt(r)]:64;if(++r,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(i.push(d),64!==u){const e=a<<4&240|u>>2;if(i.push(e),64!==h){const e=u<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=i(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/Test/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function T(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function A(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){return!T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R(){try{return"object"===typeof indexedDB}catch(e){return!1}}function N(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function k(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?L(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new D(i,o,n);return a}}function L(e,t){return e.replace(M,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const M=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function x(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(F(n)&&F(s)){if(!x(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function B(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new H(e,t);return n.subscribe.bind(n)}class H{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=z(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=K),void 0===i.error&&(i.error=K),void 0===i.complete&&(i.complete=K);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function K(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q=1e3,G=2,W=144e5,Q=.5;function Y(e,t=q,n=G){const i=t*Math.pow(n,e),r=Math.round(Q*i*(Math.random()-.5)*2);return Math.min(W,i+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}class X{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new w;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(ne(e))try{this.getOrInitializeService({instanceIdentifier:Z})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=Z){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Z){return this.instances.has(e)}getOptions(e=Z){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:te(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=Z){return this.component?this.component.multipleInstances?e:Z:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function te(e){return e===Z?void 0:e}function ne(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ee(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const re=[];var se;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(se||(se={}));const oe={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},ae=se.INFO,ce={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},ue=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ce[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class le{constructor(e){this.name=e,this._logLevel=ae,this._logHandler=ue,this._userLogHandler=null,re.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?oe[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const he=(e,t)=>t.some((t=>e instanceof t));let de,fe;function pe(){return de||(de=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ge(){return fe||(fe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const me=new WeakMap,ye=new WeakMap,ve=new WeakMap,we=new WeakMap,Ee=new WeakMap;function _e(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Ce(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&me.set(t,e)})).catch((()=>{})),Ee.set(t,e),t}function Ie(e){if(ye.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));ye.set(e,t)}let Te={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ye.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ve.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ce(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function be(e){Te=e(Te)}function Se(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?ge().includes(e)?function(...t){return e.apply(Re(this),t),Ce(me.get(this))}:function(...t){return Ce(e.apply(Re(this),t))}:function(t,...n){const i=e.call(Re(this),t,...n);return ve.set(i,t.sort?t.sort():[t]),Ce(i)}}function Ae(e){return"function"===typeof e?Se(e):(e instanceof IDBTransaction&&Ie(e),he(e,pe())?new Proxy(e,Te):e)}function Ce(e){if(e instanceof IDBRequest)return _e(e);if(we.has(e))return we.get(e);const t=Ae(e);return t!==e&&(we.set(e,t),Ee.set(t,e)),t}const Re=e=>Ee.get(e);function Ne(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Ce(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Ce(o.result),e.oldVersion,e.newVersion,Ce(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const ke=["get","getKey","getAll","getAllKeys","count"],Oe=["put","add","delete","clear"],De=new Map;function Pe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(De.get(t))return De.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Oe.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!ke.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return De.set(t,s),s}be((e=>({...e,get:(t,n,i)=>Pe(t,n)||e.get(t,n,i),has:(t,n)=>!!Pe(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(Me(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function Me(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Ue="@firebase/app",xe="0.10.7",Fe=new le("@firebase/app"),Ve="@firebase/app-compat",je="@firebase/analytics-compat",Be="@firebase/analytics",$e="@firebase/app-check-compat",He="@firebase/app-check",ze="@firebase/auth",Ke="@firebase/auth-compat",qe="@firebase/database",Ge="@firebase/database-compat",We="@firebase/functions",Qe="@firebase/functions-compat",Ye="@firebase/installations",Je="@firebase/installations-compat",Xe="@firebase/messaging",Ze="@firebase/messaging-compat",et="@firebase/performance",tt="@firebase/performance-compat",nt="@firebase/remote-config",it="@firebase/remote-config-compat",rt="@firebase/storage",st="@firebase/storage-compat",ot="@firebase/firestore",at="@firebase/vertexai-preview",ct="@firebase/firestore-compat",ut="firebase",lt="10.12.4",ht="[DEFAULT]",dt={[Ue]:"fire-core",[Ve]:"fire-core-compat",[Be]:"fire-analytics",[je]:"fire-analytics-compat",[He]:"fire-app-check",[$e]:"fire-app-check-compat",[ze]:"fire-auth",[Ke]:"fire-auth-compat",[qe]:"fire-rtdb",[Ge]:"fire-rtdb-compat",[We]:"fire-fn",[Qe]:"fire-fn-compat",[Ye]:"fire-iid",[Je]:"fire-iid-compat",[Xe]:"fire-fcm",[Ze]:"fire-fcm-compat",[et]:"fire-perf",[tt]:"fire-perf-compat",[nt]:"fire-rc",[it]:"fire-rc-compat",[rt]:"fire-gcs",[st]:"fire-gcs-compat",[ot]:"fire-fst",[ct]:"fire-fst-compat",[at]:"fire-vertex","fire-js":"fire-js",[ut]:"fire-js-all"},ft=new Map,pt=new Map,gt=new Map;function mt(e,t){try{e.container.addComponent(t)}catch(n){Fe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yt(e){const t=e.name;if(gt.has(t))return Fe.debug(`There were multiple attempts to register component ${t}.`),!1;gt.set(t,e);for(const n of ft.values())mt(n,e);for(const n of pt.values())mt(n,e);return!0}function vt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function wt(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},_t=new P("app","Firebase",Et);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new X("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt=lt;function bt(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:ht,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!==typeof r||!r)throw _t.create("bad-app-name",{appName:String(r)});if(n||(n=y()),!n)throw _t.create("no-options");const s=ft.get(r);if(s){if(x(n,s.options)&&x(i,s.config))return s;throw _t.create("duplicate-app",{appName:r})}const o=new ie(r);for(const c of gt.values())o.addComponent(c);const a=new It(n,i,o);return ft.set(r,a),a}function St(e=ht){const t=ft.get(e);if(!t&&e===ht&&y())return bt();if(!t)throw _t.create("no-app",{appName:e});return t}function At(e,t,n){var i;let r=null!==(i=dt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Fe.warn(e.join(" "))}yt(new X(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct="firebase-heartbeat-database",Rt=1,Nt="firebase-heartbeat-store";let kt=null;function Ot(){return kt||(kt=Ne(Ct,Rt,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Nt)}catch(n){console.warn(n)}}}}).catch((e=>{throw _t.create("idb-open",{originalErrorMessage:e.message})}))),kt}async function Dt(e){try{const t=await Ot(),n=t.transaction(Nt),i=await n.objectStore(Nt).get(Lt(e));return await n.done,i}catch(t){if(t instanceof D)Fe.warn(t.message);else{const e=_t.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});Fe.warn(e.message)}}}async function Pt(e,t){try{const n=await Ot(),i=n.transaction(Nt,"readwrite"),r=i.objectStore(Nt);await r.put(t,Lt(e)),await i.done}catch(n){if(n instanceof D)Fe.warn(n.message);else{const e=_t.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});Fe.warn(e.message)}}}function Lt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=1024,Ut=2592e6;class xt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=Ft();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ut})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ft(),{heartbeatsToSend:n,unsentEntries:i}=Vt(this._heartbeatsCache.heartbeats),r=c(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ft(){const e=new Date;return e.toISOString().substring(0,10)}function Vt(e,t=Mt){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Bt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Bt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class jt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!R()&&N().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Dt(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Bt(e){return c(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e){yt(new X("platform-logger",(e=>new Le(e)),"PRIVATE")),yt(new X("heartbeat",(e=>new xt(e)),"PRIVATE")),At(Ue,xe,e),At(Ue,xe,"esm2017"),At("fire-js","")}$t("");var Ht="firebase",zt="10.12.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
At(Ht,zt,"app");
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
const Kt={};function qt(e){0}function Gt(e){return Object.isFrozen(e)&&Object.isFrozen(e.raw)}function Wt(e){return-1===e.toString().indexOf("`")}Wt((e=>e``))||Wt((e=>e`\0`))||Wt((e=>e`\n`))||Wt((e=>e`\u0000`)),Gt``&&Gt`\0`&&Gt`\n`&&Gt`\u0000`;
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
let Qt,Yt="google#safe";function Jt(){if("undefined"!==typeof window)return window.trustedTypes}function Xt(){var e;return""!==Yt&&null!==(e=Jt())&&void 0!==e?e:null}function Zt(){var e,t;if(void 0===Qt)try{Qt=null!==(t=null===(e=Xt())||void 0===e?void 0:e.createPolicy(Yt,{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e}))&&void 0!==t?t:null}catch(n){Qt=null}return Qt}"undefined"!==typeof window&&window.TrustedHTML;
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
class en{constructor(e,t){qt(t),this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}"undefined"!==typeof window&&window.TrustedScriptURL;function tn(e){var t;const n=e,i=null===(t=Zt())||void 0===t?void 0:t.createScriptURL(n);return null!==i&&void 0!==i?i:new en(n,Kt)}function nn(e){var t;if(null===(t=Xt())||void 0===t?void 0:t.isScriptURL(e))return e;if(e instanceof en)return e.privateDoNotAccessOrElseWrappedResourceUrl;{let e="";throw new Error(e)}}"undefined"!==typeof window&&window.TrustedScript;n(4603),n(7566),n(8721);
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
var rn,sn;
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
function on(e){return{valueOf:e}.valueOf()}(function(e){e[e["STYLE_TAG"]=0]="STYLE_TAG",e[e["STYLE_ATTRIBUTE"]=1]="STYLE_ATTRIBUTE",e[e["HTML_ATTRIBUTE"]=2]="HTML_ATTRIBUTE"})(rn||(rn={}));
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
class an{constructor(e,t,n,i,r){this.allowedElements=e,this.elementPolicies=t,this.allowedGlobalAttributes=n,this.globalAttributePolicies=i,this.globallyAllowedAttributePrefixes=r}isAllowedElement(e){return"FORM"!==e&&(this.allowedElements.has(e)||this.elementPolicies.has(e))}getAttributePolicy(e,t){const n=this.elementPolicies.get(t);if(null===n||void 0===n?void 0:n.has(e))return n.get(e);if(this.allowedGlobalAttributes.has(e))return{policyAction:sn.KEEP};const i=this.globalAttributePolicies.get(e);return i||(this.globallyAllowedAttributePrefixes&&[...this.globallyAllowedAttributePrefixes].some((t=>0===e.indexOf(t)))?{policyAction:sn.KEEP}:{policyAction:sn.DROP})}}(function(e){e[e["DROP"]=0]="DROP",e[e["KEEP"]=1]="KEEP",e[e["KEEP_AND_SANITIZE_URL"]=2]="KEEP_AND_SANITIZE_URL",e[e["KEEP_AND_NORMALIZE"]=3]="KEEP_AND_NORMALIZE",e[e["KEEP_AND_SANITIZE_STYLE"]=4]="KEEP_AND_SANITIZE_STYLE",e[e["KEEP_AND_USE_RESOURCE_URL_POLICY"]=5]="KEEP_AND_USE_RESOURCE_URL_POLICY",e[e["KEEP_AND_USE_RESOURCE_URL_POLICY_FOR_SRCSET"]=6]="KEEP_AND_USE_RESOURCE_URL_POLICY_FOR_SRCSET"})(sn||(sn={}));new Set(["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"]);
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
const cn=["ARTICLE","SECTION","NAV","ASIDE","H1","H2","H3","H4","H5","H6","HEADER","FOOTER","ADDRESS","P","HR","PRE","BLOCKQUOTE","OL","UL","LH","LI","DL","DT","DD","FIGURE","FIGCAPTION","MAIN","DIV","EM","STRONG","SMALL","S","CITE","Q","DFN","ABBR","RUBY","RB","RT","RTC","RP","DATA","TIME","CODE","VAR","SAMP","KBD","SUB","SUP","I","B","U","MARK","BDI","BDO","SPAN","BR","WBR","INS","DEL","PICTURE","PARAM","TRACK","MAP","TABLE","CAPTION","COLGROUP","COL","TBODY","THEAD","TFOOT","TR","TD","TH","SELECT","DATALIST","OPTGROUP","OPTION","OUTPUT","PROGRESS","METER","FIELDSET","LEGEND","DETAILS","SUMMARY","MENU","DIALOG","SLOT","CANVAS","FONT","CENTER","ACRONYM","BASEFONT","BIG","DIR","HGROUP","STRIKE","TT"],un=[["A",new Map([["href",{policyAction:sn.KEEP_AND_SANITIZE_URL}]])],["AREA",new Map([["href",{policyAction:sn.KEEP_AND_SANITIZE_URL}]])],["LINK",new Map([["href",{policyAction:sn.KEEP_AND_USE_RESOURCE_URL_POLICY,conditions:new Map([["rel",new Set(["alternate","author","bookmark","canonical","cite","help","icon","license","next","prefetch","dns-prefetch","prerender","preconnect","preload","prev","search","subresource"])]])}]])],["SOURCE",new Map([["src",{policyAction:sn.KEEP_AND_USE_RESOURCE_URL_POLICY}],["srcset",{policyAction:sn.KEEP_AND_USE_RESOURCE_URL_POLICY_FOR_SRCSET}]])],["IMG",new Map([["src",{policyAction:sn.KEEP_AND_USE_RESOURCE_URL_POLICY}],["srcset",{policyAction:sn.KEEP_AND_USE_RESOURCE_URL_POLICY_FOR_SRCSET}]])],["VIDEO",new Map([["src",{policyAction:sn.KEEP_AND_USE_RESOURCE_URL_POLICY}]])],["AUDIO",new Map([["src",{policyAction:sn.KEEP_AND_USE_RESOURCE_URL_POLICY}]])]],ln=["title","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-current","aria-disabled","aria-dropeffect","aria-expanded","aria-haspopup","aria-hidden","aria-invalid","aria-label","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","alt","align","autocapitalize","autocomplete","autocorrect","autofocus","autoplay","bgcolor","border","cellpadding","cellspacing","checked","color","cols","colspan","controls","datetime","disabled","download","draggable","enctype","face","formenctype","frameborder","height","hreflang","hidden","ismap","label","lang","loop","max","maxlength","media","minlength","min","multiple","muted","nonce","open","placeholder","preload","rel","required","reversed","role","rows","rowspan","selected","shape","size","sizes","slot","span","spellcheck","start","step","summary","translate","type","valign","value","width","wrap","itemscope","itemtype","itemid","itemprop","itemref"],hn=[["dir",{policyAction:sn.KEEP_AND_NORMALIZE,conditions:on((()=>new Map([["dir",new Set(["auto","ltr","rtl"])]])))}],["async",{policyAction:sn.KEEP_AND_NORMALIZE,conditions:on((()=>new Map([["async",new Set(["async"])]])))}],["cite",{policyAction:sn.KEEP_AND_SANITIZE_URL}],["loading",{policyAction:sn.KEEP_AND_NORMALIZE,conditions:on((()=>new Map([["loading",new Set(["eager","lazy"])]])))}],["poster",{policyAction:sn.KEEP_AND_SANITIZE_URL}],["target",{policyAction:sn.KEEP_AND_NORMALIZE,conditions:on((()=>new Map([["target",new Set(["_self","_blank"])]])))}]];new an(new Set(cn),new Map(un),new Set(ln),new Map(hn)),new an(new Set(on((()=>cn.concat(["STYLE"])))),new Map(un),new Set(on((()=>ln.concat(["id","name","class"])))),new Map(on((()=>hn.concat([["style",{policyAction:sn.KEEP_AND_SANITIZE_STYLE}]])))));function dn(e,...t){if(0===t.length)return tn(e[0]);e[0].toLowerCase();let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return tn(n)}function fn(e){return pn("script",e)}function pn(e,t){var n;const i=t.document,r=null===(n=i.querySelector)||void 0===n?void 0:n.call(i,`${e}[nonce]`);return r&&(r["nonce"]||r.getAttribute("nonce"))||""}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
function gn(e){const t=e.ownerDocument&&e.ownerDocument.defaultView,n=fn(t||window);n&&e.setAttribute("nonce",n)}function mn(e,t,n){e.src=nn(t),(null===n||void 0===n?void 0:n.omitNonce)||gn(e)}Error;
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);const yn="@firebase/installations",vn="0.6.8",wn=1e4,En=`w:${vn}`,_n="FIS_v2",In="https://firebaseinstallations.googleapis.com/v1",Tn=36e5,bn="installations",Sn="Installations",An={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Cn=new P(bn,Sn,An);function Rn(e){return e instanceof D&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn({projectId:e}){return`${In}/projects/${e}/installations`}function kn(e){return{token:e.token,requestStatus:2,expiresIn:Mn(e.expiresIn),creationTime:Date.now()}}async function On(e,t){const n=await t.json(),i=n.error;return Cn.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Dn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Pn(e,{refreshToken:t}){const n=Dn(e);return n.append("Authorization",Un(t)),n}async function Ln(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Mn(e){return Number(e.replace("s","000"))}function Un(e){return`${_n} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=Nn(e),r=Dn(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={fid:n,authVersion:_n,appId:e.appId,sdkVersion:En},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ln((()=>fetch(i,a)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:kn(e.authToken)};return t}throw await On("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=/^[cdef][\w-]{21}$/,Bn="";function $n(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=Hn(e);return jn.test(n)?n:Bn}catch(e){return Bn}}function Hn(e){const t=Vn(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Map;function qn(e,t){const n=zn(e);Gn(n,t),Wn(n,t)}function Gn(e,t){const n=Kn.get(e);if(n)for(const i of n)i(t)}function Wn(e,t){const n=Yn();n&&n.postMessage({key:e,fid:t}),Jn()}let Qn=null;function Yn(){return!Qn&&"BroadcastChannel"in self&&(Qn=new BroadcastChannel("[Firebase] FID Change"),Qn.onmessage=e=>{Gn(e.data.key,e.data.fid)}),Qn}function Jn(){0===Kn.size&&Qn&&(Qn.close(),Qn=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="firebase-installations-database",Zn=1,ei="firebase-installations-store";let ti=null;function ni(){return ti||(ti=Ne(Xn,Zn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ei)}}})),ti}async function ii(e,t){const n=zn(e),i=await ni(),r=i.transaction(ei,"readwrite"),s=r.objectStore(ei),o=await s.get(n);return await s.put(t,n),await r.done,o&&o.fid===t.fid||qn(e,t.fid),t}async function ri(e){const t=zn(e),n=await ni(),i=n.transaction(ei,"readwrite");await i.objectStore(ei).delete(t),await i.done}async function si(e,t){const n=zn(e),i=await ni(),r=i.transaction(ei,"readwrite"),s=r.objectStore(ei),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await r.done,!a||o&&o.fid===a.fid||qn(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(e){let t;const n=await si(e.appConfig,(n=>{const i=ai(n),r=ci(e,i);return t=r.registrationPromise,r.installationEntry}));return n.fid===Bn?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ai(e){const t=e||{fid:$n(),registrationStatus:0};return di(t)}function ci(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(Cn.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=ui(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:li(e)}:{installationEntry:t}}async function ui(e,t){try{const n=await xn(e,t);return ii(e.appConfig,n)}catch(n){throw Rn(n)&&409===n.customData.serverCode?await ri(e.appConfig):await ii(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function li(e){let t=await hi(e.appConfig);while(1===t.registrationStatus)await Fn(100),t=await hi(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await oi(e);return n||t}return t}function hi(e){return si(e,(e=>{if(!e)throw Cn.create("installation-not-found");return di(e)}))}function di(e){return fi(e)?{fid:e.fid,registrationStatus:0}:e}function fi(e){return 1===e.registrationStatus&&e.registrationTime+wn<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi({appConfig:e,heartbeatServiceProvider:t},n){const i=gi(e,n),r=Pn(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={installation:{sdkVersion:En,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ln((()=>fetch(i,a)));if(c.ok){const e=await c.json(),t=kn(e);return t}throw await On("Generate Auth Token",c)}function gi(e,{fid:t}){return`${Nn(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e,t=!1){let n;const i=await si(e.appConfig,(i=>{if(!Ei(i))throw Cn.create("not-registered");const r=i.authToken;if(!t&&_i(r))return i;if(1===r.requestStatus)return n=yi(e,t),i;{if(!navigator.onLine)throw Cn.create("app-offline");const t=Ti(i);return n=wi(e,t),t}})),r=n?await n:i.authToken;return r}async function yi(e,t){let n=await vi(e.appConfig);while(1===n.authToken.requestStatus)await Fn(100),n=await vi(e.appConfig);const i=n.authToken;return 0===i.requestStatus?mi(e,t):i}function vi(e){return si(e,(e=>{if(!Ei(e))throw Cn.create("not-registered");const t=e.authToken;return bi(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function wi(e,t){try{const n=await pi(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await ii(e.appConfig,i),n}catch(n){if(!Rn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ii(e.appConfig,n)}else await ri(e.appConfig);throw n}}function Ei(e){return void 0!==e&&2===e.registrationStatus}function _i(e){return 2===e.requestStatus&&!Ii(e)}function Ii(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Tn}function Ti(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function bi(e){return 1===e.requestStatus&&e.requestTime+wn<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(e){const t=e,{installationEntry:n,registrationPromise:i}=await oi(t);return i?i.catch(console.error):mi(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(e,t=!1){const n=e;await Ci(n);const i=await mi(n,t);return i.token}async function Ci(e){const{registrationPromise:t}=await oi(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ri(e){if(!e||!e.options)throw Ni("App Configuration");if(!e.name)throw Ni("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ni(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ni(e){return Cn.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="installations",Oi="installations-internal",Di=e=>{const t=e.getProvider("app").getImmediate(),n=Ri(t),i=vt(t,"heartbeat"),r={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return r},Pi=e=>{const t=e.getProvider("app").getImmediate(),n=vt(t,ki).getImmediate(),i={getId:()=>Si(n),getToken:e=>Ai(n,e)};return i};function Li(){yt(new X(ki,Di,"PUBLIC")),yt(new X(Oi,Pi,"PRIVATE"))}Li(),At(yn,vn),At(yn,vn,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mi="analytics",Ui="firebase_id",xi="origin",Fi=6e4,Vi="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ji="https://www.googletagmanager.com/gtag/js",Bi=new le("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $i(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Hi(e,t){const n=document.createElement("script"),i=dn`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`;mn(n,i),n.async=!0,document.head.appendChild(n)}function zi(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ki(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=await $i(n),i=e.find((e=>e.measurementId===r));i&&await t[i.appId]}}catch(a){Bi.error(a)}e("config",r,s)}async function qi(e,t,n,i,r){try{let s=[];if(r&&r["send_to"]){let e=r["send_to"];Array.isArray(e)||(e=[e]);const i=await $i(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(s){Bi.error(s)}}function Gi(e,t,n,i){async function r(r,...s){try{if("event"===r){const[i,r]=s;await qi(e,t,n,i,r)}else if("config"===r){const[r,o]=s;await Ki(e,t,n,i,r,o)}else if("consent"===r){const[t,n]=s;e("consent",t,n)}else if("get"===r){const[t,n,i]=s;e("get",t,n,i)}else if("set"===r){const[t]=s;e("set",t)}else e(r,...s)}catch(o){Bi.error(o)}}return r}function Wi(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"===typeof window[r]&&(s=window[r]),window[r]=Gi(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}function Qi(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ji)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ji=new P("analytics","Analytics",Yi),Xi=30,Zi=1e3;class er{constructor(e={},t=Zi){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tr=new er;function nr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ir(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:nr(i)},s=Vi.replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw Ji.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function rr(e,t=tr,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw Ji.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Ji.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cr;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Fi),sr({appId:i,apiKey:r,measurementId:s},o,a,t)}async function sr(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=tr){var s;const{appId:o,measurementId:a}=e;try{await or(i,t)}catch(c){if(a)return Bi.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null===c||void 0===c?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const t=await ir(e);return r.deleteThrottleMetadata(o),t}catch(c){const t=c;if(!ar(t)){if(r.deleteThrottleMetadata(o),a)return Bi.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:o,measurementId:a};throw c}const u=503===Number(null===(s=null===t||void 0===t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?Y(n,r.intervalMillis,Xi):Y(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,l),Bi.debug(`Calling attemptFetch again in ${u} millis`),sr(e,l,i,r)}}function or(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(Ji.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function ar(e){if(!(e instanceof D)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class cr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur,lr;async function hr(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t,s=Object.assign(Object.assign({},i),{send_to:r});e("event",n,s)}}function dr(e){lr=e}function fr(e){ur=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(){if(!R())return Bi.warn(Ji.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await N()}catch(e){return Bi.warn(Ji.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function gr(e,t,n,i,r,s,o){var a;const c=rr(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Bi.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Bi.error(e))),t.push(c);const u=pr().then((e=>e?i.getId():void 0)),[l,h]=await Promise.all([c,u]);Qi(s)||Hi(s,l.measurementId),lr&&(r("consent","default",lr),dr(void 0)),r("js",new Date);const d=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return d[xi]="firebase",d.update=!0,null!=h&&(d[Ui]=h),r("config",l.measurementId,d),ur&&(r("set",ur),fr(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.app=e}_delete(){return delete yr[this.app.options.appId],Promise.resolve()}}let yr={},vr=[];const wr={};let Er,_r,Ir="dataLayer",Tr="gtag",br=!1;function Sr(){const e=[];if(b()&&e.push("This is a browser extension environment."),k()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Ji.create("invalid-analytics-context",{errorInfo:t});Bi.warn(n.message)}}function Ar(e,t,n){Sr();const i=e.options.appId;if(!i)throw Ji.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Ji.create("no-api-key");Bi.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=yr[i])throw Ji.create("already-exists",{id:i});if(!br){zi(Ir);const{wrappedGtag:e,gtagCore:t}=Wi(yr,vr,wr,Ir,Tr);_r=e,Er=t,br=!0}yr[i]=gr(e,vr,wr,t,Er,Ir,n);const r=new mr(e);return r}function Cr(e=St()){e=J(e);const t=vt(e,Mi);return t.isInitialized()?t.getImmediate():Rr(e)}function Rr(e,t={}){const n=vt(e,Mi);if(n.isInitialized()){const e=n.getImmediate();if(x(t,n.getOptions()))return e;throw Ji.create("already-initialized")}const i=n.initialize({options:t});return i}function Nr(e,t,n,i){e=J(e),hr(_r,yr[e.app.options.appId],t,n,i).catch((e=>Bi.error(e)))}const kr="@firebase/analytics",Or="0.10.6";function Dr(){function e(e){try{const t=e.getProvider(Mi).getImmediate();return{logEvent:(e,n,i)=>Nr(t,e,n,i)}}catch(t){throw Ji.create("interop-component-reg-failed",{reason:t})}}yt(new X(Mi,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Ar(n,i,t)}),"PUBLIC")),yt(new X("analytics-internal",e,"PRIVATE")),At(kr,Or),At(kr,Or,"esm2017")}Dr();function Pr(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;function Lr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mr=Lr,Ur=new P("auth","Firebase",Lr()),xr=new le("@firebase/auth");function Fr(e,...t){xr.logLevel<=se.WARN&&xr.warn(`Auth (${Tt}): ${e}`,...t)}function Vr(e,...t){xr.logLevel<=se.ERROR&&xr.error(`Auth (${Tt}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,...t){throw Kr(e,...t)}function Br(e,...t){return Kr(e,...t)}function $r(e,t,n){const i=Object.assign(Object.assign({},Mr()),{[t]:n}),r=new P("auth","Firebase",i);return r.create(t,{appName:e.name})}function Hr(e){return $r(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zr(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&jr(e,"argument-error"),$r(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kr(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Ur.create(e,...t)}function qr(e,t,...n){if(!e)throw Kr(t,...n)}function Gr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Vr(t),new Error(t)}function Wr(e,t){e||Gr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Yr(){return"http:"===Jr()||"https:"===Jr()}function Jr(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(Yr()||b()||"connection"in navigator))||navigator.onLine}function Zr(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wr(t>e,"Short delay should be less than long delay!"),this.isMobile=I()||S()}get(){return Xr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e,t){Wr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void Gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void Gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void Gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},rs=new es(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function os(e,t,n,i,r={}){return as(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=V(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ns.fetch()(us(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function as(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},is),t);try{const t=new hs(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw ds(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ds(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ds(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ds(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw $r(e,a,o);jr(e,a)}}catch(r){if(r instanceof D)throw r;jr(e,"network-request-failed",{message:String(r)})}}async function cs(e,t,n,i,r={}){const s=await os(e,t,n,i,r);return"mfaPendingCredential"in s&&jr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function us(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?ts(e.config,r):`${e.config.apiScheme}://${r}`}function ls(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Br(this.auth,"network-request-failed"))),rs.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ds(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Br(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e){return void 0!==e&&void 0!==e.enterprise}class ps{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ls(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(e,t){return os(e,"GET","/v2/recaptchaConfig",ss(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(e,t){return os(e,"POST","/v1/accounts:delete",t)}async function ys(e,t){return os(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(e,t=!1){const n=J(e),i=await n.getIdToken(t),r=_s(i);qr(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"===typeof r.firebase?r.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:r,token:i,authTime:vs(Es(r.auth_time)),issuedAtTime:vs(Es(r.iat)),expirationTime:vs(Es(r.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function Es(e){return 1e3*Number(e)}function _s(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Vr("JWT malformed, contained fewer than 3 sections"),null;try{const e=u(n);return e?JSON.parse(e):(Vr("Failed to decode base64 JWT payload"),null)}catch(r){return Vr("Caught error parsing JWT payload as JSON",null===r||void 0===r?void 0:r.toString()),null}}function Is(e){const t=_s(e);return qr(t,"internal-error"),qr("undefined"!==typeof t.exp,"internal-error"),qr("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof D&&bs(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function bs({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Ts(e,ys(n,{idToken:i}));qr(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ks(s.providerUserInfo):[],a=Ns(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new As(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Rs(e){const t=J(e);await Cs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ns(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ks(e){return e.map((e=>{var{providerId:t}=e,n=Pr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(e,t){const n=await as(e,{},(async()=>{const n=V({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=us(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ns.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ds(e,t){return os(e,"POST","/v2/accounts:revokeToken",ss(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){qr(e.idToken,"internal-error"),qr("undefined"!==typeof e.idToken,"internal-error"),qr("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Is(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){qr(0!==e.length,"internal-error");const t=Is(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(qr(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await Os(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Ps;return n&&(qr("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(qr("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(qr("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return Gr("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e,t){qr("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class Ms{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Pr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ss(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new As(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return qr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ws(this,e)}reload(){return Rs(this)}_assign(e){this!==e&&(qr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){qr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Cs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(Hr(this.auth));const e=await this.getIdToken();return await Ts(this,ms(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:E,providerData:_,stsTokenManager:I}=t;qr(v&&I,e,"internal-error");const T=Ps.fromJSON(this.name,I);qr("string"===typeof v,e,"internal-error"),Ls(l,e.name),Ls(h,e.name),qr("boolean"===typeof w,e,"internal-error"),qr("boolean"===typeof E,e,"internal-error"),Ls(d,e.name),Ls(f,e.name),Ls(p,e.name),Ls(g,e.name),Ls(m,e.name),Ls(y,e.name);const b=new Ms({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(b.providerData=_.map((e=>Object.assign({},e)))),g&&(b._redirectEventId=g),b}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ps;i.updateFromServerResponse(t);const r=new Ms({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Cs(r),r}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];qr(void 0!==i.localId,"internal-error");const r=void 0!==i.providerUserInfo?ks(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length),o=new Ps;o.updateFromIdToken(n);const a=new Ms({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new As(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Map;function xs(e){Wr(e instanceof Function,"Expected a class definition");let t=Us.get(e);return t?(Wr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Us.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fs.type="NONE";const Vs=Fs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(e,t,n){return`firebase:${e}:${t}:${n}`}class Bs{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=js(this.userKey,i.apiKey,r),this.fullPersistenceKey=js("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Bs(xs(Vs),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||xs(Vs);const s=js(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=Ms._fromJSON(e,t);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(c){}}))),new Bs(r,e,n)):new Bs(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qs(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Hs(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ws(t))return"Blackberry";if(Qs(t))return"Webos";if(zs(t))return"Safari";if((t.includes("chrome/")||Ks(t))&&!t.includes("edge/"))return"Chrome";if(Gs(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Hs(e=_()){return/firefox\//i.test(e)}function zs(e=_()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ks(e=_()){return/crios\//i.test(e)}function qs(e=_()){return/iemobile/i.test(e)}function Gs(e=_()){return/android/i.test(e)}function Ws(e=_()){return/blackberry/i.test(e)}function Qs(e=_()){return/webos/i.test(e)}function Ys(e=_()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Js(e=_()){var t;return Ys(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Xs(){return A()&&10===document.documentMode}function Zs(e=_()){return Ys(e)||Gs(e)||Qs(e)||Ws(e)||/windows phone/i.test(e)||qs(e)}function eo(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e,t=[]){let n;switch(e){case"Browser":n=$s(_());break;case"Worker":n=`${$s(_())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tt}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(e,t={}){return os(e,"GET","/v2/passwordPolicy",ss(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=6;class so{constructor(e){var t,n,i,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:ro,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new co(this),this.idTokenSubscription=new co(this),this.beforeStateQueue=new no(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ur,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xs(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await ys(this,{idToken:e}),n=await Ms._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return qr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cs(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zr()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(Hr(this));const t=e?J(e):null;return t&&qr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&qr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return wt(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(Hr(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(xs(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await io(this),t=new so(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new P("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await Ds(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xs(e)||this._popupRedirectResolver;qr(t,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[xs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(qr(o,this,"internal-error"),o.then((()=>{s||r(this.currentUser)})),"function"===typeof t){const r=e.addObserver(t,n,i);return()=>{s=!0,r()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return qr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=to(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&Fr(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function ao(e){return J(e)}class co{constructor(e){this.auth=e,this.observer=null,this.addObserver=$((e=>this.observer=e))}get next(){return qr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lo(e){uo=e}function ho(e){return uo.loadJS(e)}function fo(){return uo.recaptchaEnterpriseScript}function po(){return uo.gapiScript}function go(e){return`__${e}${Math.floor(1e6*Math.random())}`}const mo="recaptcha-enterprise",yo="NO_RECAPTCHA";class vo{constructor(e){this.type=mo,this.auth=ao(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{gs(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new ps(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function i(t,n,i){const r=window.grecaptcha;fs(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(yo)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{n(this.auth).then((n=>{if(!t&&fs(window.grecaptcha))i(n,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=fo();0!==t.length&&(t+=n),ho(t).then((()=>{i(n,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function wo(e,t,n,i=!1){const r=new vo(e);let s;try{s=await r.verify(n)}catch(a){s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Eo(e,t,n,i){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await wo(e,t,n,"getOobCode"===n);return i(e,r)}return i(e,t).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await wo(e,t,n,"getOobCode"===n);return i(e,r)}return Promise.reject(r)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _o(e,t){const n=vt(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(x(i,null!==t&&void 0!==t?t:{}))return e;jr(e,"already-initialized")}const i=n.initialize({options:t});return i}function Io(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(xs);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}function To(e,t,n){const i=ao(e);qr(i._canInitEmulator,i,"emulator-config-failed"),qr(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=bo(t),{host:o,port:a}=So(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Co()}function bo(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function So(e){const t=bo(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Ao(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ao(t)}}}function Ao(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Co(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gr("not implemented")}_getIdTokenResponse(e){return Gr("not implemented")}_linkToIdToken(e,t){return Gr("not implemented")}_getReauthenticationResolver(e){return Gr("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(e,t){return os(e,"POST","/v1/accounts:resetPassword",ss(e,t))}async function ko(e,t){return os(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oo(e,t){return cs(e,"POST","/v1/accounts:signInWithPassword",ss(e,t))}async function Do(e,t){return os(e,"POST","/v1/accounts:sendOobCode",ss(e,t))}async function Po(e,t){return Do(e,t)}async function Lo(e,t){return Do(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mo(e,t){return cs(e,"POST","/v1/accounts:signInWithEmailLink",ss(e,t))}async function Uo(e,t){return cs(e,"POST","/v1/accounts:signInWithEmailLink",ss(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends Ro{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new xo(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new xo(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eo(e,t,"signInWithPassword",Oo);case"emailLink":return Mo(e,{email:this._email,oobCode:this._password});default:jr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eo(e,n,"signUpPassword",ko);case"emailLink":return Uo(e,{idToken:t,email:this._email,oobCode:this._password});default:jr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(e,t){return cs(e,"POST","/v1/accounts:signInWithIdp",ss(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="http://localhost";class jo extends Ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Pr(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new jo(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Fo(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fo(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fo(e,t)}buildRequest(){const e={requestUri:Vo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=V(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(e,t){return os(e,"POST","/v1/accounts:sendVerificationCode",ss(e,t))}async function $o(e,t){return cs(e,"POST","/v1/accounts:signInWithPhoneNumber",ss(e,t))}async function Ho(e,t){const n=await cs(e,"POST","/v1/accounts:signInWithPhoneNumber",ss(e,t));if(n.temporaryProof)throw ds(e,"account-exists-with-different-credential",n);return n}const zo={["USER_NOT_FOUND"]:"user-not-found"};async function Ko(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return cs(e,"POST","/v1/accounts:signInWithPhoneNumber",ss(e,n),zo)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Ro{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return $o(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ho(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ko(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new qo({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wo(e){const t=j(B(e))["link"],n=t?j(B(t))["deep_link_id"]:null,i=j(B(e))["deep_link_id"],r=i?j(B(i))["link"]:null;return r||i||n||t||e}class Qo{constructor(e){var t,n,i,r,s,o;const a=j(B(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=Go(null!==(i=a["mode"])&&void 0!==i?i:null);qr(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(r=a["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=Wo(e);try{return new Qo(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yo{constructor(){this.providerId=Yo.PROVIDER_ID}static credential(e,t){return xo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qo.parseLink(t);return qr(n,"argument-error"),xo._fromEmailAndCode(e,n.code,n.tenantId)}}Yo.PROVIDER_ID="password",Yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo extends Xo{constructor(){super("facebook.com")}static credential(e){return jo._fromParams({providerId:Zo.PROVIDER_ID,signInMethod:Zo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zo.credentialFromTaggedObject(e)}static credentialFromError(e){return Zo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Zo.credential(e.oauthAccessToken)}catch(t){return null}}}Zo.FACEBOOK_SIGN_IN_METHOD="facebook.com",Zo.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ea extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jo._fromParams({providerId:ea.PROVIDER_ID,signInMethod:ea.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ea.credentialFromTaggedObject(e)}static credentialFromError(e){return ea.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ea.credential(t,n)}catch(i){return null}}}ea.GOOGLE_SIGN_IN_METHOD="google.com",ea.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ta extends Xo{constructor(){super("github.com")}static credential(e){return jo._fromParams({providerId:ta.PROVIDER_ID,signInMethod:ta.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ta.credentialFromTaggedObject(e)}static credentialFromError(e){return ta.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ta.credential(e.oauthAccessToken)}catch(t){return null}}}ta.GITHUB_SIGN_IN_METHOD="github.com",ta.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na extends Xo{constructor(){super("twitter.com")}static credential(e,t){return jo._fromParams({providerId:na.PROVIDER_ID,signInMethod:na.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return na.credentialFromTaggedObject(e)}static credentialFromError(e){return na.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return na.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ia(e,t){return cs(e,"POST","/v1/accounts:signUp",ss(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */na.TWITTER_SIGN_IN_METHOD="twitter.com",na.PROVIDER_ID="twitter.com";class ra{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Ms._fromIdTokenResponse(e,n,i),s=sa(n),o=new ra({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=sa(n);return new ra({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function sa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa extends D{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new oa(e,t,n,i)}}function aa(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw oa._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(e,t,n=!1){const i=await Ts(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ra._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ua(e,t,n=!1){const{auth:i}=e;if(wt(i.app))return Promise.reject(Hr(i));const r="reauthenticate";try{const s=await Ts(e,aa(i,r,t,e),n);qr(s.idToken,i,"internal-error");const o=_s(s.idToken);qr(o,i,"internal-error");const{sub:a}=o;return qr(e.uid===a,i,"user-mismatch"),ra._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&jr(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(e,t,n=!1){if(wt(e.app))return Promise.reject(Hr(e));const i="signIn",r=await aa(e,i,t),s=await ra._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function ha(e,t){return la(ao(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?fa._fromServerResponse(e,t):"totpInfo"in t?pa._fromServerResponse(e,t):jr(e,"internal-error")}}class fa extends da{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new fa(t)}}class pa extends da{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new pa(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e,t,n){var i;qr((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),qr("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(qr(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(qr(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(e){const t=ao(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ya(e,t,n){const i=ao(e),r={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&ga(i,r,n),await Eo(i,r,"getOobCode",Lo)}async function va(e,t,n){await No(J(e),{oobCode:t,newPassword:n}).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&ma(e),t}))}async function wa(e,t){const n=J(e),i=await No(n,{oobCode:t}),r=i.requestType;switch(qr(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":qr(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":qr(i.mfaInfo,n,"internal-error");default:qr(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=da._fromServerResponse(ao(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function Ea(e,t){const{data:n}=await wa(J(e),t);return n.email}async function _a(e,t,n){if(wt(e.app))return Promise.reject(Hr(e));const i=ao(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},s=Eo(i,r,"signUpPassword",ia),o=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&ma(e),t})),a=await ra._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Ia(e,t,n){return wt(e.app)?Promise.reject(Hr(e)):ha(J(e),Yo.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&ma(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ta(e,t){return os(e,"POST","/v1/accounts:createAuthUri",ss(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(e,t){const n=Yr()?Qr():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:r}=await Ta(J(e),i);return r||[]}async function Sa(e,t){const n=J(e),i=await e.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};t&&ga(n.auth,r,t);const{email:s}=await Po(n.auth,r);s!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Aa(e,t){return os(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=J(e),r=await i.getIdToken(),s={idToken:r,displayName:t,photoUrl:n,returnSecureToken:!0},o=await Ts(i,Aa(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Ra(e,t,n,i){return J(e).onIdTokenChanged(t,n,i)}function Na(e,t,n){return J(e).beforeAuthStateChanged(t,n)}function ka(e){return J(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oa(e,t){return os(e,"POST","/v2/accounts/mfaEnrollment:start",ss(e,t))}function Da(e,t){return os(e,"POST","/v2/accounts/mfaEnrollment:finalize",ss(e,t))}function Pa(e,t){return os(e,"POST","/v2/accounts/mfaEnrollment:start",ss(e,t))}function La(e,t){return os(e,"POST","/v2/accounts/mfaEnrollment:finalize",ss(e,t))}new WeakMap;const Ma="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(){const e=_();return zs(e)||Ys(e)}const Fa=1e3,Va=10;class ja extends Ua{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xa()&&eo(),this.fallbackToPolling=Zs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Xs()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Va):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Fa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ja.type="LOCAL";const Ba=ja;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends Ua{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$a.type="SESSION";const Ha=$a;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ka(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await za(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qa(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka.receivers=[];class Ga{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=qa("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){return window}function Qa(e){Wa().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){return"undefined"!==typeof Wa()["WorkerGlobalScope"]&&"function"===typeof Wa()["importScripts"]}async function Ja(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Xa(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Za(){return Ya()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="firebaseLocalStorageDb",tc=1,nc="firebaseLocalStorage",ic="fbase_key";class rc{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function sc(e,t){return e.transaction([nc],t?"readwrite":"readonly").objectStore(nc)}function oc(){const e=indexedDB.deleteDatabase(ec);return new rc(e).toPromise()}function ac(){const e=indexedDB.open(ec,tc);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(nc,{keyPath:ic})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(nc)?t(n):(n.close(),await oc(),t(await ac()))}))}))}async function cc(e,t,n){const i=sc(e,!0).put({[ic]:t,value:n});return new rc(i).toPromise()}async function uc(e,t){const n=sc(e,!1).get(t),i=await new rc(n).toPromise();return void 0===i?null:i.value}function lc(e,t){const n=sc(e,!0).delete(t);return new rc(n).toPromise()}const hc=800,dc=3;class fc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ac()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>dc)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ya()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ka._getInstance(Za()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ja(),!this.activeServiceWorker)return;this.sender=new Ga(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Xa()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ac();return await cc(e,Ma,"1"),await lc(e,Ma),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>cc(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>uc(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>lc(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=sc(e,!1).getAll();return new rc(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),hc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}fc.type="LOCAL";const pc=fc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(e,t){return os(e,"POST","/v2/accounts/mfaSignIn:start",ss(e,t))}function mc(e,t){return os(e,"POST","/v2/accounts/mfaSignIn:finalize",ss(e,t))}function yc(e,t){return os(e,"POST","/v2/accounts/mfaSignIn:finalize",ss(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
go("rcb"),new es(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vc="recaptcha";async function wc(e,t,n){var i;const r=await n.verify();try{let s;if(qr("string"===typeof r,e,"argument-error"),qr(n.type===vc,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){qr("enroll"===t.type,e,"internal-error");const n=await Oa(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{qr("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;qr(n,e,"missing-multi-factor-info");const o=await gc(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Bo(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(e){this.providerId=Ec.PROVIDER_ID,this.auth=ao(e)}verifyPhoneNumber(e,t){return wc(this.auth,e,J(t))}static credential(e,t){return qo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ec.credentialFromTaggedObject(t)}static credentialFromError(e){return Ec.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qo._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _c(e,t){return t?xs(t):(qr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ec.PROVIDER_ID="phone",Ec.PHONE_SIGN_IN_METHOD="phone";class Ic extends Ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tc(e){return la(e.auth,new Ic(e),e.bypassAuthState)}function bc(e){const{auth:t,user:n}=e;return qr(n,t,"internal-error"),ua(n,new Ic(e),e.bypassAuthState)}async function Sc(e){const{auth:t,user:n}=e;return qr(n,t,"internal-error"),ca(n,new Ic(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tc;case"linkViaPopup":case"linkViaRedirect":return Sc;case"reauthViaPopup":case"reauthViaRedirect":return bc;default:jr(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new es(2e3,1e4);async function Rc(e,t,n){if(wt(e.app))return Promise.reject(Br(e,"operation-not-supported-in-this-environment"));const i=ao(e);zr(e,t,Jo);const r=_c(i,n),s=new Nc(i,"signInViaPopup",t,r);return s.executeNotNull()}class Nc extends Ac{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Nc.currentPopupAction&&Nc.currentPopupAction.cancel(),Nc.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return qr(e,this.auth,"internal-error"),e}async onExecution(){Wr(1===this.filter.length,"Popup operations only handle one event");const e=qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Br(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Br(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Br(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Cc.get())};e()}}Nc.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kc="pendingRedirect",Oc=new Map;class Dc extends Ac{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Oc.get(this.auth._key());if(!e){try{const t=await Pc(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Oc.set(this.auth._key(),e)}return this.bypassAuthState||Oc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Pc(e,t){const n=Uc(t),i=Mc(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function Lc(e,t){Oc.set(e._key(),t)}function Mc(e){return xs(e._redirectPersistence)}function Uc(e){return js(kc,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(e,t,n=!1){if(wt(e.app))return Promise.reject(Hr(e));const i=ao(e),r=_c(i,t),s=new Dc(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fc=6e5;class Vc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!$c(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Bc(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Br(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fc&&this.cachedEventUids.clear(),this.cachedEventUids.has(jc(e))}saveEventToCache(e){this.cachedEventUids.add(jc(e)),this.lastProcessedEventTime=Date.now()}}function jc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Bc({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function $c(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bc(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(e,t={}){return os(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kc=/^https?/;async function qc(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Hc(e);for(const i of t)try{if(Gc(i))return}catch(n){}jr(e,"unauthorized-domain")}function Gc(e){const t=Qr(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Kc.test(n))return!1;if(zc.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new es(3e4,6e4);function Qc(){const e=Wa().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Yc(e){return new Promise(((t,n)=>{var i,r,s;function o(){Qc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qc(),n(Br(e,"network-request-failed"))},timeout:Wc.get()})}if(null===(r=null===(i=Wa().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Wa().gapi)||void 0===s?void 0:s.load)){const t=go("iframefcb");return Wa()[t]=()=>{gapi.load?o():n(Br(e,"network-request-failed"))},ho(`${po()}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Jc=null,e}))}let Jc=null;function Xc(e){return Jc=Jc||Yc(e),Jc}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new es(5e3,15e3),eu="__/auth/iframe",tu="emulator/auth/iframe",nu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ru(e){const t=e.config;qr(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ts(t,tu):`https://${e.config.authDomain}/${eu}`,i={apiKey:t.apiKey,appName:e.name,v:Tt},r=iu.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${V(i).slice(1)}`}async function su(e){const t=await Xc(e),n=Wa().gapi;return qr(n,e,"internal-error"),t.open({where:document.body,url:ru(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nu,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=Br(e,"network-request-failed"),s=Wa().setTimeout((()=>{i(r)}),Zc.get());function o(){Wa().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},au=500,cu=600,uu="_blank",lu="http://localhost";class hu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function du(e,t,n,i=au,r=cu){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ou),{width:i.toString(),height:r.toString(),top:s,left:o}),u=_().toLowerCase();n&&(a=Ks(u)?uu:n),Hs(u)&&(t=t||lu,c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Js(u)&&"_self"!==a)return fu(t||"",a),new hu(null);const h=window.open(t||"",a,l);qr(h,e,"popup-blocked");try{h.focus()}catch(d){}return new hu(h)}function fu(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="__/auth/handler",gu="emulator/auth/handler",mu=encodeURIComponent("fac");async function yu(e,t,n,i,r,s){qr(e.config.authDomain,e,"auth-domain-config-required"),qr(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Tt,eventId:r};if(t instanceof Jo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",U(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Xo){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${mu}=${encodeURIComponent(c)}`:"";return`${vu(e)}?${V(a).slice(1)}${u}`}function vu({config:e}){return e.emulator?ts(e,gu):`https://${e.authDomain}/${pu}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="webStorageSupport";class Eu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ha,this._completeRedirectFn=xc,this._overrideRedirectResult=Lc}async _openPopup(e,t,n,i){var r;Wr(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await yu(e,t,n,Qr(),i);return du(e,s,qa())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await yu(e,t,n,Qr(),i);return Qa(r),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Wr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await su(e),n=new Vc(e);return t.register("authEvent",(t=>{qr(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(wu,{type:wu},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[wu];void 0!==r&&t(!!r),jr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zs()||zs()||Ys()}}const _u=Eu;class Iu{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Gr("unexpected MultiFactorSessionType")}}}class Tu extends Iu{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Tu(e)}_finalizeEnroll(e,t,n){return Da(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return mc(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bu{constructor(){}static assertion(e){return Tu._fromCredential(e)}}bu.FACTOR_ID="phone";class Su{static assertionForEnrollment(e,t){return Au._fromSecret(e,t)}static assertionForSignIn(e,t){return Au._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;qr("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const i=await Pa(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Cu._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Su.FACTOR_ID="totp";class Au extends Iu{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Au(t,void 0,e)}static _fromEnrollmentId(e,t){return new Au(t,e)}async _finalizeEnroll(e,t,n){return qr("undefined"!==typeof this.secret,e,"argument-error"),La(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){qr(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return yc(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Cu{constructor(e,t,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Cu(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(Ru(e)||Ru(t))&&(i=!0),i&&(Ru(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ru(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ru(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Nu="@firebase/auth",ku="1.7.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){qr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pu(e){yt(new X("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;qr(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:to(e)},u=new oo(i,r,s,c);return Io(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),yt(new X("auth-internal",(e=>{const t=ao(e.getProvider("auth").getImmediate());return(e=>new Ou(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),At(Nu,ku,Du(e)),At(Nu,ku,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=300,Mu=v("authIdTokenMaxAge")||Lu;let Uu=null;const xu=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Mu)return;const r=null===n||void 0===n?void 0:n.token;Uu!==r&&(Uu=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Fu(e=St()){const t=vt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=_o(e,{popupRedirectResolver:_u,persistence:[pc,Ba,Ha]}),i=v("authTokenSyncURL");if(i&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(i,location.origin);if(location.origin===e.origin){const t=xu(e.toString());Na(n,t,(()=>t(n.currentUser))),Ra(n,(e=>t(e)))}}const r=g("auth");return r&&To(n,`http://${r}`),n}function Vu(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}lo({loadJS(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Br("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Vu().appendChild(i)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Pu("Browser");var ju,Bu="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},$u={};(function(){var e;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function r(e,t,n){n||(n=0);var i=Array(16);if("string"===typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^s)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function s(e,t){var n=a;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function o(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=n;)r(this,e,o),o+=this.blockSize;if("string"===typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){r(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){r(this,i),s=0;break}}this.h=s,this.o+=t},i.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var a={};function c(e){return-128<=e&&128>e?s(e,(function(e){return new o([0|e],0>e?-1:0)})):new o([0|e],0>e?-1:0)}function u(e){if(isNaN(e)||!isFinite(e))return h;if(0>e)return m(u(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new o(t,0)}function l(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return m(l(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=u(Math.pow(t,8)),i=h,r=0;r<e.length;r+=8){var s=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+s),t);8>s?(s=u(Math.pow(t,s)),i=i.j(s).add(u(o))):(i=i.j(n),i=i.add(u(o)))}return i}var h=c(0),d=c(1),f=c(16777216);function p(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function g(e){return-1==e.h}function m(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new o(n,~e.h).add(d)}function y(e,t){return e.add(m(t))}function v(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function w(e,t){this.g=e,this.h=t}function E(e,t){if(p(t))throw Error("division by zero");if(p(e))return new w(h,h);if(g(e))return t=E(m(e),t),new w(m(t.g),m(t.h));if(g(t))return t=E(e,m(t)),new w(m(t.g),t.h);if(30<e.g.length){if(g(e)||g(t))throw Error("slowDivide_ only works with positive integers.");for(var n=d,i=t;0>=i.l(e);)n=_(n),i=_(i);var r=I(n,1),s=I(i,1);for(i=I(i,2),n=I(n,2);!p(i);){var o=s.add(i);0>=o.l(e)&&(r=r.add(n),s=o),i=I(i,1),n=I(n,1)}return t=y(e,r.j(t)),new w(r,t)}for(r=h;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=u(n),o=s.j(t);g(o)||0<o.l(e);)n-=i,s=u(n),o=s.j(t);p(s)&&(s=d),r=r.add(s),e=y(e,o)}return new w(r,e)}function _(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new o(n,e.h)}function I(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.i(s+n)>>>t|e.i(s+n+1)<<32-t:e.i(s+n);return new o(r,e.h)}e=o.prototype,e.m=function(){if(g(this))return-m(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.i(n);e+=(0<=i?i:4294967296+i)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(p(this))return"0";if(g(this))return"-"+m(this).toString(e);for(var t=u(Math.pow(e,6)),n=this,i="";;){var r=E(n,t).g;n=y(n,r.j(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,p(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=y(this,e),g(e)?-1:p(e)?0:1},e.abs=function(){return g(this)?m(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(65535&this.i(r))+(65535&e.i(r)),a=(s>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);i=a>>>16,s&=65535,a&=65535,n[r]=a<<16|s}return new o(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(p(this)||p(e))return h;if(g(this))return g(e)?m(this).j(m(e)):m(m(this).j(e));if(g(e))return m(this.j(m(e)));if(0>this.l(f)&&0>e.l(f))return u(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.i(i)>>>16,a=65535&this.i(i),c=e.i(r)>>>16,l=65535&e.i(r);n[2*i+2*r]+=a*l,v(n,2*i+2*r),n[2*i+2*r+1]+=s*l,v(n,2*i+2*r+1),n[2*i+2*r+1]+=a*c,v(n,2*i+2*r+1),n[2*i+2*r+2]+=s*c,v(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new o(n,0)},e.A=function(e){return E(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new o(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new o(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new o(n,this.h^e.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,$u.Md5=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=l,ju=$u.Integer=o}).apply("undefined"!==typeof Bu?Bu:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var Hu,zu,Ku,qu,Gu,Wu,Qu,Yu,Ju,Xu="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},Zu={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Xu&&Xu];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var i=n(this);function r(e,n){if(n)e:{var r=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in r))break e;r=r[o]}e=e[e.length-1],s=r[e],n=n(s),n!=s&&null!=n&&t(r,e,{configurable:!0,writable:!0,value:n})}}function s(e,t){e instanceof String&&(e+="");var n=0,i=!1,r={next:function(){if(!i&&n<e.length){var r=n++;return{value:t(r,e[r]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}r("Array.prototype.values",(function(e){return e||function(){return s(this,(function(e,t){return t}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function c(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function l(e,t,n){return e.call.apply(e.bind,arguments)}function h(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function d(e,t,n){return d=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:h,d.apply(null,arguments)}function f(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function p(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function g(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function m(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(c(t)){const n=e.length||0,i=t.length||0;e.length=n+i;for(let r=0;r<i;r++)e[n+r]=t[r]}else e.push(t)}}class y{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function v(e){return/^[\s\xa0]*$/.test(e)}function w(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function E(e){return E[" "](e),e}E[" "]=function(){};var _=-1!=w().indexOf("Gecko")&&!(-1!=w().toLowerCase().indexOf("webkit")&&-1==w().indexOf("Edge"))&&!(-1!=w().indexOf("Trident")||-1!=w().indexOf("MSIE"))&&-1==w().indexOf("Edge");function I(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function T(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function b(e){const t={};for(const n in e)t[n]=e[n];return t}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<S.length;t++)n=S[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function C(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function R(e){a.setTimeout((()=>{throw e}),0)}function N(){var e=M;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class k{constructor(){this.h=this.g=null}add(e,t){const n=O.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var O=new y((()=>new D),(e=>e.reset()));class D{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let P,L=!1,M=new k,U=()=>{const e=a.Promise.resolve(void 0);P=()=>{e.then(x)}};var x=()=>{for(var e;e=N();){try{e.h.call(e.g)}catch(n){R(n)}var t=O;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}L=!1};function F(){this.s=this.s,this.C=this.C}function V(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}F.prototype.s=!1,F.prototype.ma=function(){this.s||(this.s=!0,this.N())},F.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},V.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(n){}return e}();function B(e,t){if(V.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(_){e:{try{E(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:$[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&B.aa.h.call(this)}}p(B,V);var $={2:"touch",3:"pen",4:"mouse"};B.prototype.h=function(){B.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var H="closure_listenable_"+(1e6*Math.random()|0),z=0;function K(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++z,this.da=this.fa=!1}function q(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function G(e){this.src=e,this.g={},this.h=0}function W(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=Array.prototype.indexOf.call(r,t,void 0);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(q(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Q(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==i)return r}return-1}G.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Q(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new K(t,this.src,s,!!i,r),t.fa=n,e.push(t)),t};var Y="closure_lm_"+(1e6*Math.random()|0),J={};function X(e,t,n,i,r){if(i&&i.once)return te(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)X(e,t[s],n,i,r);return null}return n=ce(n),e&&e[H]?e.K(t,n,u(i)?!!i.capture:!!i,r):Z(e,t,n,!1,i,r)}function Z(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=u(r)?!!r.capture:!!r,a=oe(e);if(a||(e[Y]=a=new G(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=ee(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)j||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(re(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function ee(){function e(n){return t.call(e.src,e.listener,n)}const t=se;return e}function te(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)te(e,t[s],n,i,r);return null}return n=ce(n),e&&e[H]?e.L(t,n,u(i)?!!i.capture:!!i,r):Z(e,t,n,!0,i,r)}function ne(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)ne(e,t[s],n,i,r);else i=u(i)?!!i.capture:!!i,n=ce(n),e&&e[H]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Q(s,n,i,r),-1<n&&(q(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=oe(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Q(t,n,i,r)),(n=-1<e?t[e]:null)&&ie(n))}function ie(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[H])W(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(re(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=oe(t))?(W(n,e),0==n.h&&(n.src=null,t[Y]=null)):q(e)}}}function re(e){return e in J?J[e]:J[e]="on"+e}function se(e,t){if(e.da)e=!0;else{t=new B(t,this);var n=e.listener,i=e.ha||e.src;e.fa&&ie(e),e=n.call(i,t)}return e}function oe(e){return e=e[Y],e instanceof G?e:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(e){return"function"===typeof e?e:(e[ae]||(e[ae]=function(t){return e.handleEvent(t)}),e[ae])}function ue(){F.call(this),this.i=new G(this),this.M=this,this.F=null}function le(e,t){var n,i=e.F;if(i)for(n=[];i;i=i.F)n.push(i);if(e=e.M,i=t.type||t,"string"===typeof t)t=new V(t,e);else if(t instanceof V)t.target=t.target||e;else{var r=t;t=new V(i,e),A(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=he(o,i,!0,t)&&r}if(o=t.g=e,r=he(o,i,!0,t)&&r,r=he(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=he(o,i,!1,t)&&r}function he(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&W(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}function de(e,t,n){if("function"===typeof e)n&&(e=d(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=d(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function fe(e){e.g=de((()=>{e.g=null,e.i&&(e.i=!1,fe(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}p(ue,F),ue.prototype[H]=!0,ue.prototype.removeEventListener=function(e,t,n,i){ne(this,e,t,n,i)},ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)q(n[i]);delete t.g[e],t.h--}}this.F=null},ue.prototype.K=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},ue.prototype.L=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};class pe extends F{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:fe(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ge(e){F.call(this),this.h=e,this.g={}}p(ge,F);var me=[];function ye(e){I(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ie(e)}),e),e.g={}}ge.prototype.N=function(){ge.aa.N.call(this),ye(this)},ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ve=a.JSON.stringify,we=a.JSON.parse,Ee=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function _e(){}function Ie(e){return e.h||(e.h=e.i())}function Te(){}_e.prototype.h=null;var be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Se(){V.call(this,"d")}function Ae(){V.call(this,"c")}p(Se,V),p(Ae,V);var Ce={},Re=null;function Ne(){return Re=Re||new ue}function ke(e){V.call(this,Ce.La,e)}function Oe(e){const t=Ne();le(t,new ke(t))}function De(e,t){V.call(this,Ce.STAT_EVENT,e),this.stat=t}function Pe(e){const t=Ne();le(t,new De(t,e))}function Le(e,t){V.call(this,Ce.Ma,e),this.size=t}function Me(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}function Ue(){this.g=!0}function xe(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}function Fe(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ve(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Be(e,n)+(i?" "+i:"")}))}function je(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Be(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return ve(n)}catch(a){return t}}Ce.La="serverreachability",p(ke,V),Ce.STAT_EVENT="statevent",p(De,V),Ce.Ma="timingevent",p(Le,V),Ue.prototype.xa=function(){this.g=!1},Ue.prototype.info=function(){};var $e,He={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ze={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Ke(){}function qe(e,t,n,i){this.j=e,this.i=t,this.l=n,this.R=i||1,this.U=new ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ge}function Ge(){this.i=null,this.g="",this.h=!1}p(Ke,_e),Ke.prototype.g=function(){return new XMLHttpRequest},Ke.prototype.i=function(){return{}},$e=new Ke;var We={},Qe={};function Ye(e,t,n){e.L=1,e.v=St(Et(t)),e.m=n,e.P=!0,Je(e,null)}function Je(e,t){e.F=Date.now(),et(e),e.A=Et(e.v);var n=e.A,i=e.R;Array.isArray(i)||(i=[String(i)]),Ft(n.i,"t",i),e.C=0,n=e.j.J,e.h=new Ge,e.g=On(e.j,n?t:null,!e.m),0<e.O&&(e.M=new pe(d(e.Y,e,e.g),e.O)),t=e.U,n=e.g,i=e.ca;var r="readystatechange";Array.isArray(r)||(r&&(me[0]=r.toString()),r=me);for(var s=0;s<r.length;s++){var o=X(n,r[s],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?b(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Oe(),xe(e.i,e.u,e.A,e.l,e.R,e.m)}function Xe(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Ze(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Qe:(n=Number(t.substring(n,i)),isNaN(n)?We:(i+=1,i+n>t.length?Qe:(t=t.slice(i,i+n),e.C=i+n,t)))}function et(e){e.S=Date.now()+e.I,tt(e,e.I)}function tt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Me(d(e.ba,e),t)}function nt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function it(e){0==e.j.G||e.J||An(e.j,e)}function rt(e){nt(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ye(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function st(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||lt(n.h,e)))if(!e.K&&lt(n.h,e)&&3==n.G){try{var i=n.Da.g.parse(t)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Sn(n),pn(n)}In(n),Pe(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=Me(d(n.Za,n),6e3));if(1>=ut(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else Rn(n,11)}else if((e.K||n.g==e)&&Sn(n),!v(t))for(r=n.Da.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const r=u[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(i=1.5*l,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ht(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.ya=e,bt(i.I,i.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),i=n;var o=e;if(i.qa=kn(i,i.J?i.ia:null,i.W),o.K){dt(i.h,o);var a=o,c=i.L;c&&(a.I=c),a.B&&(nt(a),et(a)),i.g=o}else _n(i);0<n.i.length&&mn(n)}else"stop"!=u[0]&&"close"!=u[0]||Rn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Rn(n,7):fn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Oe(4)}catch(u){}}qe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==cn(e)?t.j():this.Y(e)},qe.prototype.Y=function(e){try{if(e==this.g)e:{const d=cn(this.g);var t=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||un(this.g)))){this.J||4!=d||7==t||Oe(8==t||0>=f?3:2),nt(this);var n=this.g.Z();this.X=n;t:if(Xe(this)){var i=un(this.g);e="";var r=i.length,s=4==cn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){rt(this),it(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:!(s&&t==r-1)});i.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Fe(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(c)){var l=c;break t}}l=null}if(!(n=l)){this.o=!1,this.s=3,Pe(12),rt(this),it(this);break e}Ve(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,st(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=Ze(this,o),e==Qe){4==d&&(this.s=4,Pe(14),n=!1),Ve(this.i,this.l,null,"[Incomplete Response]");break}if(e==We){this.s=4,Pe(15),Ve(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Ve(this.i,this.l,e,null),st(this,e)}if(Xe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Pe(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Tn(h),h.M=!0,Pe(11))}}else Ve(this.i,this.l,o,"[Invalid Chunked Response]"),rt(this),it(this)}else Ve(this.i,this.l,o,null),st(this,o);4==d&&rt(this),this.o&&!this.J&&(4==d?An(this.j,this):(this.o=!1,et(this)))}else ln(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),rt(this),it(this)}}}catch(d){}},qe.prototype.cancel=function(){this.J=!0,rt(this)},qe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(je(this.i,this.A),2!=this.L&&(Oe(),Pe(17)),rt(this),this.s=2,it(this)):tt(this,this.S-e)};var ot=class{constructor(e,t){this.g=e,this.map=t}};function at(e){this.l=e||10,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ct(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ut(e){return e.h?1:e.g?e.g.size:0}function lt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ht(e,t){e.g?e.g.add(t):e.h=t}function dt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ft(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return g(e.i)}function pt(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function gt(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(c(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function mt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=gt(e),i=pt(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}at.prototype.cancel=function(){if(this.i=ft(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var yt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function wt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof wt){this.h=e.h,_t(this,e.j),this.o=e.o,this.g=e.g,It(this,e.s),this.l=e.l;var t=e.i,n=new Lt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Tt(this,n),this.m=e.m}else e&&(t=String(e).match(yt))?(this.h=!1,_t(this,t[1]||"",!0),this.o=At(t[2]||""),this.g=At(t[3]||"",!0),It(this,t[4]),this.l=At(t[5]||"",!0),Tt(this,t[6]||"",!0),this.m=At(t[7]||"")):(this.h=!1,this.i=new Lt(null,this.h))}function Et(e){return new wt(e)}function _t(e,t,n){e.j=n?At(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function It(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Tt(e,t,n){t instanceof Lt?(e.i=t,jt(e.i,e.h)):(n||(t=Ct(t,Dt)),e.i=new Lt(t,e.h))}function bt(e,t,n){e.i.set(t,n)}function St(e){return bt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function At(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ct(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Rt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Rt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ct(t,Nt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Ct(t,Nt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ct(n,"/"==n.charAt(0)?Ot:kt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",Ct(n,Pt)),e.join("")};var Nt=/[#\/\?@]/g,kt=/[#\?:]/g,Ot=/[#\?]/g,Dt=/[#\?@]/g,Pt=/#/g;function Lt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Mt(e){e.g||(e.g=new Map,e.h=0,e.i&&vt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ut(e,t){Mt(e),t=Vt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function xt(e,t){return Mt(e),t=Vt(e,t),e.g.has(t)}function Ft(e,t,n){Ut(e,t),0<n.length&&(e.i=null,e.g.set(Vt(e,t),g(n)),e.h+=n.length)}function Vt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function jt(e,t){t&&!e.j&&(Mt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ut(this,t),Ft(this,n,e))}),e)),e.j=t}function Bt(e,t){const n=new Ue;if(a.Image){const i=new Image;i.onload=f(Ht,n,"TestLoadImage: loaded",!0,t,i),i.onerror=f(Ht,n,"TestLoadImage: error",!1,t,i),i.onabort=f(Ht,n,"TestLoadImage: abort",!1,t,i),i.ontimeout=f(Ht,n,"TestLoadImage: timeout",!1,t,i),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}function $t(e,t){const n=new Ue,i=new AbortController,r=setTimeout((()=>{i.abort(),Ht(n,"TestPingServer: timeout",!1,t)}),1e4);fetch(e,{signal:i.signal}).then((e=>{clearTimeout(r),e.ok?Ht(n,"TestPingServer: ok",!0,t):Ht(n,"TestPingServer: server error",!1,t)})).catch((()=>{clearTimeout(r),Ht(n,"TestPingServer: error",!1,t)}))}function Ht(e,t,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(s){}}function zt(){this.g=new Ee}function Kt(e,t,n){const i=n||"";try{mt(e,(function(e,n){let r=e;u(e)&&(r=ve(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function qt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Gt(e,t){ue.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Wt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Qt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Yt(e)}function Yt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Jt(e){let t="";return I(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Xt(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Jt(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):bt(e,t,n))}function Zt(e){ue.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=Lt.prototype,e.add=function(e,t){Mt(this),this.i=null,e=Vt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Mt(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},e.na=function(){Mt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},e.V=function(e){Mt(this);let t=[];if("string"===typeof e)xt(this,e)&&(t=t.concat(this.g.get(Vt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return Mt(this),this.i=null,e=Vt(this,e),xt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")},p(qt,_e),qt.prototype.g=function(){return new Gt(this.l,this.j)},qt.prototype.i=function(e){return function(){return e}}({}),p(Gt,ue),e=Gt.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Yt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Qt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Yt(this)),this.g&&(this.readyState=3,Yt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Qt(this):Yt(this),3==this.readyState&&Wt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Qt(this))},e.Qa=function(e){this.g&&(this.response=e,Qt(this))},e.ga=function(){this.g&&Qt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Gt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),p(Zt,ue);var en=/^https?$/i,tn=["POST","PUT"];function nn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,rn(e),on(e)}function rn(e){e.A||(e.A=!0,le(e,"complete"),le(e,"error"))}function sn(e){if(e.h&&"undefined"!=typeof o&&(!e.v[1]||4!=cn(e)||2!=e.Z()))if(e.u&&4==cn(e))de(e.Ea,0,e);else if(le(e,"readystatechange"),4==cn(e)){e.h=!1;try{const o=e.Z();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var r=String(e.D).match(yt)[1]||null;!r&&a.self&&a.self.location&&(r=a.self.location.protocol.slice(0,-1)),i=!en.test(r?r.toLowerCase():"")}n=i}if(n)le(e,"complete"),le(e,"success");else{e.m=6;try{var s=2<cn(e)?e.g.statusText:""}catch(c){s=""}e.l=s+" ["+e.Z()+"]",rn(e)}}finally{on(e)}}}function on(e,t){if(e.g){an(e);const i=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||le(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function an(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function cn(e){return e.g?e.g.readyState:0}function un(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(nl){return null}}function ln(e){const t={};e=(e.g&&2<=cn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(v(e[i]))continue;var n=C(e[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[r]||[];t[r]=s,s.push(n)}T(t,(function(e){return e.join(", ")}))}function hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function dn(e){this.Aa=0,this.i=[],this.j=new Ue,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,e),this.cb=hn("retryDelaySeedMs",1e4,e),this.Wa=hn("forwardChannelMaxRetries",2,e),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new at(e&&e.concurrentRequestLimit),this.Da=new zt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function fn(e){if(gn(e),3==e.G){var t=e.U++,n=Et(e.I);if(bt(n,"SID",e.K),bt(n,"RID",t),bt(n,"TYPE","terminate"),wn(e,n),t=new qe(e,e.j,t),t.L=2,t.v=St(Et(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(i){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=On(t.j,null),t.g.ea(t.v)),t.F=Date.now(),et(t)}Nn(e)}function pn(e){e.g&&(Tn(e),e.g.cancel(),e.g=null)}function gn(e){pn(e),e.u&&(a.clearTimeout(e.u),e.u=null),Sn(e),e.h.cancel(),e.s&&("number"===typeof e.s&&a.clearTimeout(e.s),e.s=null)}function mn(e){if(!ct(e.h)&&!e.s){e.s=!0;var t=e.Ga;P||U(),L||(P(),L=!0),M.add(t,e),e.B=0}}function yn(e,t){return!(ut(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=Me(d(e.Ga,e,t),Cn(e,e.B)),e.B++,!0))}function vn(e,t){var n;n=t?t.l:e.U++;const i=Et(e.I);bt(i,"SID",e.K),bt(i,"RID",n),bt(i,"AID",e.T),wn(e,i),e.m&&e.o&&Xt(i,e.m,e.o),n=new qe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=En(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),ht(e.h,n),Ye(n,i,t)}function wn(e,t){e.H&&I(e.H,(function(e,n){bt(t,n,e)})),e.l&&mt({},(function(e,n){bt(t,n,e)}))}function En(e,t,n){n=Math.min(e.i.length,n);var i=e.l?d(e.l.Na,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const c=r[a].map;if(n-=t,0>n)t=Math.max(0,r[a].g-100),o=!1;else try{Kt(c,e,"req"+n+"_")}catch(s){i&&i(c)}}if(o){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function _n(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;P||U(),L||(P(),L=!0),M.add(t,e),e.v=0}}function In(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Me(d(e.Fa,e),Cn(e,e.v)),e.v++,!0)}function Tn(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function bn(e){e.g=new qe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=Et(e.qa);bt(t,"RID","rpc"),bt(t,"SID",e.K),bt(t,"AID",e.T),bt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&bt(t,"TO",e.ja),bt(t,"TYPE","xmlhttp"),wn(e,t),e.m&&e.o&&Xt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=St(Et(t)),n.m=null,n.P=!0,Je(n,e)}function Sn(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function An(e,t){var n=null;if(e.g==t){Sn(e),Tn(e),e.g=null;var i=2}else{if(!lt(e.h,t))return;n=t.D,dt(e.h,t),i=1}if(0!=e.G)if(t.o)if(1==i){n=t.m?t.m.length:0,t=Date.now()-t.F;var r=e.B;i=Ne(),le(i,new Le(i,n)),mn(e)}else _n(e);else if(r=t.s,3==r||0==r&&0<t.X||!(1==i&&yn(e,t)||2==i&&In(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Rn(e,5);break;case 4:Rn(e,10);break;case 3:Rn(e,6);break;default:Rn(e,2)}}function Cn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function Rn(e,t){if(e.j.info("Error code "+t),2==t){var n=d(e.fb,e),i=e.Xa;const t=!i;i=new wt(i||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||_t(i,"https"),St(i),t?Bt(i.toString(),n):$t(i.toString(),n)}else Pe(2);e.G=0,e.l&&e.l.sa(t),Nn(e),gn(e)}function Nn(e){if(e.G=0,e.ka=[],e.l){const t=ft(e.h);0==t.length&&0==e.i.length||(m(e.ka,t),m(e.ka,e.i),e.h.i.length=0,g(e.i),e.i.length=0),e.l.ra()}}function kn(e,t,n){var i=n instanceof wt?Et(n):new wt(n);if(""!=i.g)t&&(i.g=t+"."+i.g),It(i,i.s);else{var r=a.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new wt(null);i&&_t(s,i),t&&(s.g=t),r&&It(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.ya,n&&t&&bt(i,n,t),bt(i,"VER",e.la),wn(e,i),i}function On(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new Zt(new qt({eb:n})):new Zt(e.pa),t.Ha(e.J),t}function Dn(){}function Pn(){}function Ln(e,t){ue.call(this),this.g=new dn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!v(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!v(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new xn(this)}function Mn(e){Se.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Un(){Ae.call(this),this.status=1}function xn(e){this.g=e}e=Zt.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$e.g(),this.v=this.o?Ie(this.o):Ie($e),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(s){return void nn(this,s)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tn,t,void 0))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{an(this),this.u=!0,this.g.send(e),this.u=!1}catch(s){nn(this,s)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,le(this,"complete"),le(this,"abort"),on(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Zt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?sn(this):this.bb())},e.bb=function(){sn(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),we(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=dn.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,i){Pe(0),this.W=e,this.H=t||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=kn(this,null,this.W),mn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new qe(this,this.j,e);let s=this.o;if(this.S&&(s?(s=b(s),A(s,this.S)):s=this.S),null!==this.m||this.O||(r.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=En(this,r,t),n=Et(this.I),bt(n,"RID",e),bt(n,"CVER",22),this.D&&bt(n,"X-HTTP-Session-Id",this.D),wn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Jt(s)))+"&"+t:this.m&&Xt(n,this.m,s)),ht(this.h,r),this.Ua&&bt(n,"TYPE","init"),this.P?(bt(n,"$req",t),bt(n,"SID","null"),r.T=!0,Ye(r,n,null)):Ye(r,n,t),this.G=2}}else 3==this.G&&(e?vn(this,e):0==this.i.length||ct(this.h)||vn(this))},e.Fa=function(){if(this.u=null,bn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Me(d(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),pn(this),bn(this))},e.Za=function(){null!=this.C&&(this.C=null,pn(this),In(this),Pe(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=Dn.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},Pn.prototype.g=function(e,t){return new Ln(e,t)},p(Ln,ue),Ln.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ln.prototype.close=function(){fn(this.g)},Ln.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=ve(e),e=n);t.i.push(new ot(t.Ya++,e)),3==t.G&&mn(t)},Ln.prototype.N=function(){this.g.l=null,delete this.j,fn(this.g),delete this.g,Ln.aa.N.call(this)},p(Mn,Se),p(Un,Ae),p(xn,Dn),xn.prototype.ua=function(){le(this.g,"a")},xn.prototype.ta=function(e){le(this.g,new Mn(e))},xn.prototype.sa=function(e){le(this.g,new Un)},xn.prototype.ra=function(){le(this.g,"b")},Pn.prototype.createWebChannel=Pn.prototype.g,Ln.prototype.send=Ln.prototype.o,Ln.prototype.open=Ln.prototype.m,Ln.prototype.close=Ln.prototype.close,Ju=Zu.createWebChannelTransport=function(){return new Pn},Yu=Zu.getStatEventTarget=function(){return Ne()},Qu=Zu.Event=Ce,Wu=Zu.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},He.NO_ERROR=0,He.TIMEOUT=8,He.HTTP_ERROR=6,Gu=Zu.ErrorCode=He,ze.COMPLETE="complete",qu=Zu.EventType=ze,Te.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",ue.prototype.listen=ue.prototype.K,Ku=Zu.WebChannel=Te,zu=Zu.FetchXmlHttpFactory=qt,Zt.prototype.listenOnce=Zt.prototype.L,Zt.prototype.getLastError=Zt.prototype.Ka,Zt.prototype.getLastErrorCode=Zt.prototype.Ba,Zt.prototype.getStatus=Zt.prototype.Z,Zt.prototype.getResponseJson=Zt.prototype.Oa,Zt.prototype.getResponseText=Zt.prototype.oa,Zt.prototype.send=Zt.prototype.ea,Zt.prototype.setWithCredentials=Zt.prototype.Ha,Hu=Zu.XhrIo=Zt}).apply("undefined"!==typeof Xu?Xu:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const el="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tl.UNAUTHENTICATED=new tl(null),tl.GOOGLE_CREDENTIALS=new tl("google-credentials-uid"),tl.FIRST_PARTY=new tl("first-party-uid"),tl.MOCK_USER=new tl("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let nl="10.12.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new le("@firebase/firestore");function rl(){return il.logLevel}function sl(e,...t){if(il.logLevel<=se.DEBUG){const n=t.map(cl);il.debug(`Firestore (${nl}): ${e}`,...n)}}function ol(e,...t){if(il.logLevel<=se.ERROR){const n=t.map(cl);il.error(`Firestore (${nl}): ${e}`,...n)}}function al(e,...t){if(il.logLevel<=se.WARN){const n=t.map(cl);il.warn(`Firestore (${nl}): ${e}`,...n)}}function cl(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(e="Unexpected state"){const t=`FIRESTORE (${nl}) INTERNAL ASSERTION FAILED: `+e;throw ol(t),new Error(t)}function ll(e,t){e||ul()}function hl(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fl extends D{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ml{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(tl.UNAUTHENTICATED)))}shutdown(){}}class yl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class vl{constructor(e){this.t=e,this.currentUser=tl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new pl;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new pl,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{sl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(sl("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new pl)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(sl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ll("string"==typeof t.accessToken),new gl(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ll(null===e||"string"==typeof e),new tl(e)}}class wl{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=tl.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class El{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new wl(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(tl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _l{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Il{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&sl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,sl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{sl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?i(e):sl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ll("string"==typeof e.token),this.R=e.token,new _l(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tl(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Tl(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function Sl(e,t){return e<t?-1:e>t?1:0}function Al(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cl{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fl(dl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fl(dl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new fl(dl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fl(dl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Cl.fromMillis(Date.now())}static fromDate(e){return Cl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Cl(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Sl(this.nanoseconds,e.nanoseconds):Sl(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Rl(e)}static min(){return new Rl(new Cl(0,0))}static max(){return new Rl(new Cl(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t,n){void 0===t?t=0:t>e.length&&ul(),void 0===n?n=e.length-t:n>e.length-t&&ul(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Nl.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nl?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class kl extends Nl{construct(e,t,n){return new kl(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new fl(dl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new kl(t)}static emptyPath(){return new kl([])}}const Ol=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dl extends Nl{construct(e,t,n){return new Dl(e,t,n)}static isValidIdentifier(e){return Ol.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dl.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Dl(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new fl(dl.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new fl(dl.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new fl(dl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new fl(dl.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dl(t)}static emptyPath(){return new Dl([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.path=e}static fromPath(e){return new Pl(kl.fromString(e))}static fromName(e){return new Pl(kl.fromString(e).popFirst(5))}static empty(){return new Pl(kl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===kl.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return kl.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Pl(new kl(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}Ll.UNKNOWN_ID=-1;function Ml(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=Rl.fromTimestamp(1e9===i?new Cl(n+1,0):new Cl(n,i));return new xl(r,Pl.empty(),t)}function Ul(e){return new xl(e.readTime,e.key,-1)}class xl{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new xl(Rl.min(),Pl.empty(),-1)}static max(){return new xl(Rl.max(),Pl.empty(),-1)}}function Fl(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Pl.comparator(e.documentKey,t.documentKey),0!==n?n:Sl(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Vl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(e){if(e.code!==dl.FAILED_PRECONDITION||e.message!==Vl)throw e;sl("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ul(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $l(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $l?t:$l.resolve(t)}catch(e){return $l.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$l.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$l.reject(t)}static resolve(e){return new $l(((t,n)=>{t(e)}))}static reject(e){return new $l(((t,n)=>{n(e)}))}static waitFor(e){return new $l(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=$l.resolve(!1);for(const n of e)t=t.next((e=>e?$l.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new $l(((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===r&&n(s)}),(e=>i(e)))}}))}static doWhile(e,t){return new $l(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zl(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function ql(e){return null==e}function Gl(e){return 0===e&&1/e==-1/0}function Wl(e){return"number"==typeof e&&Number.isInteger(e)&&!Gl(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kl.oe=-1;const Ql=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Yl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Jl=Yl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xl(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Zl(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.comparator=e,this.root=t||ih.EMPTY}insert(e,t){return new th(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ih.BLACK,null,null))}remove(e){return new th(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ih.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nh(this.root,e,this.comparator,!1)}getReverseIterator(){return new nh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nh(this.root,e,this.comparator,!0)}}class nh{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ih{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:ih.RED,this.left=null!=i?i:ih.EMPTY,this.right=null!=r?r:ih.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new ih(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ih.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return ih.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ih.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ih.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ul();if(this.right.isRed())throw ul();const e=this.left.check();if(e!==this.right.check())throw ul();return e+(this.isRed()?0:1)}}ih.EMPTY=null,ih.RED=!0,ih.BLACK=!1,ih.EMPTY=new class{constructor(){this.size=0}get key(){throw ul()}get value(){throw ul()}get color(){throw ul()}get left(){throw ul()}get right(){throw ul()}copy(e,t,n,i,r){return this}insert(e,t,n){return new ih(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rh{constructor(e){this.comparator=e,this.data=new th(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sh(this.data.getIterator())}getIteratorFrom(e){return new sh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof rh))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new rh(this.comparator);return t.data=e,t}}class sh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oh{constructor(e){this.fields=e,e.sort(Dl.comparator)}static empty(){return new oh([])}unionWith(e){let t=new rh(Dl.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new oh(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Al(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ch{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ah("Invalid base64 string: "+e):e}}(e);return new ch(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ch(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Sl(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ch.EMPTY_BYTE_STRING=new ch("");const uh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lh(e){if(ll(!!e),"string"==typeof e){let t=0;const n=uh.exec(e);if(ll(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:hh(e.seconds),nanos:hh(e.nanos)}}function hh(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function dh(e){return"string"==typeof e?ch.fromBase64String(e):ch.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ph(e){const t=e.mapValue.fields.__previous_value__;return fh(t)?ph(t):t}function gh(e){const t=lh(e.mapValue.fields.__local_write_time__.timestampValue);return new Cl(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t,n,i,r,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class yh{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yh("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof yh&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wh(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fh(e)?4:kh(e)?9007199254740991:10:ul()}function Eh(e,t){if(e===t)return!0;const n=wh(e);if(n!==wh(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return gh(e).isEqual(gh(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=lh(e.timestampValue),i=lh(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return dh(e.bytesValue).isEqual(dh(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return hh(e.geoPointValue.latitude)===hh(t.geoPointValue.latitude)&&hh(e.geoPointValue.longitude)===hh(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return hh(e.integerValue)===hh(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=hh(e.doubleValue),i=hh(t.doubleValue);return n===i?Gl(n)===Gl(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Al(e.arrayValue.values||[],t.arrayValue.values||[],Eh);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Xl(n)!==Xl(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Eh(n[r],i[r])))return!1;return!0}(e,t);default:return ul()}}function _h(e,t){return void 0!==(e.values||[]).find((e=>Eh(e,t)))}function Ih(e,t){if(e===t)return 0;const n=wh(e),i=wh(t);if(n!==i)return Sl(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Sl(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=hh(e.integerValue||e.doubleValue),i=hh(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Th(e.timestampValue,t.timestampValue);case 4:return Th(gh(e),gh(t));case 5:return Sl(e.stringValue,t.stringValue);case 6:return function(e,t){const n=dh(e),i=dh(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=Sl(n[r],i[r]);if(0!==e)return e}return Sl(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Sl(hh(e.latitude),hh(t.latitude));return 0!==n?n:Sl(hh(e.longitude),hh(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=Ih(n[r],i[r]);if(e)return e}return Sl(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===vh.mapValue&&t===vh.mapValue)return 0;if(e===vh.mapValue)return 1;if(t===vh.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=Sl(i[o],s[o]);if(0!==e)return e;const t=Ih(n[i[o]],r[s[o]]);if(0!==t)return t}return Sl(i.length,s.length)}(e.mapValue,t.mapValue);default:throw ul()}}function Th(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Sl(e,t);const n=lh(e),i=lh(t),r=Sl(n.seconds,i.seconds);return 0!==r?r:Sl(n.nanos,i.nanos)}function bh(e){return Sh(e)}function Sh(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=lh(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return dh(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Pl.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Sh(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Sh(e.fields[r])}`;return n+"}"}(e.mapValue):ul()}function Ah(e){return!!e&&"integerValue"in e}function Ch(e){return!!e&&"arrayValue"in e}function Rh(e){return!!e&&"mapValue"in e}function Nh(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Zl(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Nh(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Nh(e.arrayValue.values[n]);return t}return Object.assign({},e)}function kh(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oh{constructor(e){this.value=e}static empty(){return new Oh({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Rh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nh(t)}setAll(e){let t=Dl.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Nh(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Rh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Eh(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Rh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Zl(t,((t,n)=>e[t]=n));for(const i of n)delete e[i]}clone(){return new Oh(Nh(this.value))}}function Dh(e){const t=[];return Zl(e.fields,((e,n)=>{const i=new Dl([e]);if(Rh(n)){const e=Dh(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new oh(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ph{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ph(e,0,Rl.min(),Rl.min(),Rl.min(),Oh.empty(),0)}static newFoundDocument(e,t,n,i){return new Ph(e,1,t,Rl.min(),n,i,0)}static newNoDocument(e,t){return new Ph(e,2,t,Rl.min(),Rl.min(),Oh.empty(),0)}static newUnknownDocument(e,t){return new Ph(e,3,t,Rl.min(),Rl.min(),Oh.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Rl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oh.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Rl.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ph&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ph(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t){this.position=e,this.inclusive=t}}function Mh(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?Pl.comparator(Pl.fromName(o.referenceValue),n.key):Ih(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Uh(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Eh(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{}class jh extends Vh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Wh(e,t,n):"array-contains"===t?new Xh(e,n):"in"===t?new Zh(e,n):"not-in"===t?new ed(e,n):"array-contains-any"===t?new td(e,n):new jh(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Qh(e,n):new Yh(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ih(t,this.value)):null!==t&&wh(this.value)===wh(t)&&this.matchesComparison(Ih(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ul()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bh extends Vh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Bh(e,t)}matches(e){return $h(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $h(e){return"and"===e.op}function Hh(e){return zh(e)&&$h(e)}function zh(e){for(const t of e.filters)if(t instanceof Bh)return!1;return!0}function Kh(e){if(e instanceof jh)return e.field.canonicalString()+e.op.toString()+bh(e.value);if(Hh(e))return e.filters.map((e=>Kh(e))).join(",");{const t=e.filters.map((e=>Kh(e))).join(",");return`${e.op}(${t})`}}function qh(e,t){return e instanceof jh?function(e,t){return t instanceof jh&&e.op===t.op&&e.field.isEqual(t.field)&&Eh(e.value,t.value)}(e,t):e instanceof Bh?function(e,t){return t instanceof Bh&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&qh(n,t.filters[i])),!0)}(e,t):void ul()}function Gh(e){return e instanceof jh?function(e){return`${e.field.canonicalString()} ${e.op} ${bh(e.value)}`}(e):e instanceof Bh?function(e){return e.op.toString()+" {"+e.getFilters().map(Gh).join(" ,")+"}"}(e):"Filter"}class Wh extends jh{constructor(e,t,n){super(e,t,n),this.key=Pl.fromName(n.referenceValue)}matches(e){const t=Pl.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qh extends jh{constructor(e,t){super(e,"in",t),this.keys=Jh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Yh extends jh{constructor(e,t){super(e,"not-in",t),this.keys=Jh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Jh(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Pl.fromName(e.referenceValue)))}class Xh extends jh{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ch(t)&&_h(t.arrayValue,this.value)}}class Zh extends jh{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&_h(this.value.arrayValue,t)}}class ed extends jh{constructor(e,t){super(e,"not-in",t)}matches(e){if(_h(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!_h(this.value.arrayValue,t)}}class td extends jh{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ch(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>_h(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ue=null}}function id(e,t=null,n=[],i=[],r=null,s=null,o=null){return new nd(e,t,n,i,r,s,o)}function rd(e){const t=hl(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Kh(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ql(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>bh(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>bh(e))).join(",")),t.ue=e}return t.ue}function sd(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Fh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!qh(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Uh(e.startAt,t.startAt)&&Uh(e.endAt,t.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class od{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ad(e,t,n,i,r,s,o,a){return new od(e,t,n,i,r,s,o,a)}function cd(e){return new od(e)}function ud(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ld(e){return null!==e.collectionGroup}function hd(e){const t=hl(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",i=function(e){let t=new rh(Dl.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);i.forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new xh(i,n))})),e.has(Dl.keyField().canonicalString())||t.ce.push(new xh(Dl.keyField(),n))}return t.ce}function dd(e){const t=hl(e);return t.le||(t.le=fd(t,hd(e))),t.le}function fd(e,t){if("F"===e.limitType)return id(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new xh(e.field,t)}));const n=e.endAt?new Lh(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Lh(e.startAt.position,e.startAt.inclusive):null;return id(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function pd(e,t,n){return new od(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function gd(e,t){return sd(dd(e),dd(t))&&e.limitType===t.limitType}function md(e){return`${rd(dd(e))}|lt:${e.limitType}`}function yd(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Gh(e))).join(", ")}]`),ql(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>bh(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>bh(e))).join(",")),`Target(${t})`}(dd(e))}; limitType=${e.limitType})`}function vd(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Pl.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of hd(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Mh(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,hd(e),t))&&!(e.endAt&&!function(e,t,n){const i=Mh(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,hd(e),t))}(e,t)}function wd(e){return(t,n)=>{let i=!1;for(const r of hd(e)){const e=Ed(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function Ed(e,t,n){const i=e.field.isKeyField()?Pl.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?Ih(i,r):ul()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return ul()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zl(this.inner,((t,n)=>{for(const[i,r]of n)e(i,r)}))}isEmpty(){return eh(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new th(Pl.comparator);function Td(){return Id}const bd=new th(Pl.comparator);function Sd(...e){let t=bd;for(const n of e)t=t.insert(n.key,n);return t}function Ad(e){let t=bd;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Cd(){return Nd()}function Rd(){return Nd()}function Nd(){return new _d((e=>e.toString()),((e,t)=>e.isEqual(t)))}const kd=new th(Pl.comparator),Od=new rh(Pl.comparator);function Dd(...e){let t=Od;for(const n of e)t=t.add(n);return t}const Pd=new rh(Sl);function Ld(){return Pd}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(t)?"-0":t}}function Ud(e){return{integerValue:""+e}}function xd(e,t){return Wl(t)?Ud(t):Md(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this._=void 0}}function Vd(e,t,n){return e instanceof $d?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&fh(t)&&(t=ph(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Hd?zd(e,t):e instanceof Kd?qd(e,t):function(e,t){const n=Bd(e,t),i=Wd(n)+Wd(e.Pe);return Ah(n)&&Ah(e.Pe)?Ud(i):Md(e.serializer,i)}(e,t)}function jd(e,t,n){return e instanceof Hd?zd(e,t):e instanceof Kd?qd(e,t):n}function Bd(e,t){return e instanceof Gd?function(e){return Ah(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class $d extends Fd{}class Hd extends Fd{constructor(e){super(),this.elements=e}}function zd(e,t){const n=Qd(t);for(const i of e.elements)n.some((e=>Eh(e,i)))||n.push(i);return{arrayValue:{values:n}}}class Kd extends Fd{constructor(e){super(),this.elements=e}}function qd(e,t){let n=Qd(t);for(const i of e.elements)n=n.filter((e=>!Eh(e,i)));return{arrayValue:{values:n}}}class Gd extends Fd{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Wd(e){return hh(e.integerValue||e.doubleValue)}function Qd(e){return Ch(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Hd&&t instanceof Hd||e instanceof Kd&&t instanceof Kd?Al(e.elements,t.elements,Eh):e instanceof Gd&&t instanceof Gd?Eh(e.Pe,t.Pe):e instanceof $d&&t instanceof $d}(e.transform,t.transform)}class Jd{constructor(e,t){this.version=e,this.transformResults=t}}class Xd{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xd}static exists(e){return new Xd(void 0,e)}static updateTime(e){return new Xd(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zd(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ef{}function tf(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new df(e.key,Xd.none()):new af(e.key,e.data,Xd.none());{const n=e.data,i=Oh.empty();let r=new rh(Dl.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new cf(e.key,i,new oh(r.toArray()),Xd.none())}}function nf(e,t,n){e instanceof af?function(e,t,n){const i=e.value.clone(),r=lf(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof cf?function(e,t,n){if(!Zd(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=lf(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(uf(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function rf(e,t,n,i){return e instanceof af?function(e,t,n,i){if(!Zd(e.precondition,t))return n;const r=e.value.clone(),s=hf(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof cf?function(e,t,n,i){if(!Zd(e.precondition,t))return n;const r=hf(e.fieldTransforms,i,t),s=t.data;return s.setAll(uf(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return Zd(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function sf(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=Bd(i.transform,e||null);null!=r&&(null===n&&(n=Oh.empty()),n.set(i.field,r))}return n||null}function of(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Al(e,t,((e,t)=>Yd(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class af extends ef{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cf extends ef{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function uf(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function lf(e,t,n){const i=new Map;ll(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,jd(o,a,n[r]))}return i}function hf(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,Vd(e,s,t))}return i}class df extends ef{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ff extends ef{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&nf(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=rf(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=rf(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Rd();return this.mutations.forEach((i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=tf(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(Rl.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Dd())}isEqual(e){return this.batchId===e.batchId&&Al(this.mutations,e.mutations,((e,t)=>of(e,t)))&&Al(this.baseMutations,e.baseMutations,((e,t)=>of(e,t)))}}class gf{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){ll(e.mutations.length===n.length);let i=function(){return kd}();const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new gf(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yf,vf;function wf(e){switch(e){default:return ul();case dl.CANCELLED:case dl.UNKNOWN:case dl.DEADLINE_EXCEEDED:case dl.RESOURCE_EXHAUSTED:case dl.INTERNAL:case dl.UNAVAILABLE:case dl.UNAUTHENTICATED:return!1;case dl.INVALID_ARGUMENT:case dl.NOT_FOUND:case dl.ALREADY_EXISTS:case dl.PERMISSION_DENIED:case dl.FAILED_PRECONDITION:case dl.ABORTED:case dl.OUT_OF_RANGE:case dl.UNIMPLEMENTED:case dl.DATA_LOSS:return!0}}function Ef(e){if(void 0===e)return ol("GRPC error has no .code"),dl.UNKNOWN;switch(e){case yf.OK:return dl.OK;case yf.CANCELLED:return dl.CANCELLED;case yf.UNKNOWN:return dl.UNKNOWN;case yf.DEADLINE_EXCEEDED:return dl.DEADLINE_EXCEEDED;case yf.RESOURCE_EXHAUSTED:return dl.RESOURCE_EXHAUSTED;case yf.INTERNAL:return dl.INTERNAL;case yf.UNAVAILABLE:return dl.UNAVAILABLE;case yf.UNAUTHENTICATED:return dl.UNAUTHENTICATED;case yf.INVALID_ARGUMENT:return dl.INVALID_ARGUMENT;case yf.NOT_FOUND:return dl.NOT_FOUND;case yf.ALREADY_EXISTS:return dl.ALREADY_EXISTS;case yf.PERMISSION_DENIED:return dl.PERMISSION_DENIED;case yf.FAILED_PRECONDITION:return dl.FAILED_PRECONDITION;case yf.ABORTED:return dl.ABORTED;case yf.OUT_OF_RANGE:return dl.OUT_OF_RANGE;case yf.UNIMPLEMENTED:return dl.UNIMPLEMENTED;case yf.DATA_LOSS:return dl.DATA_LOSS;default:return ul()}}(vf=yf||(yf={}))[vf.OK=0]="OK",vf[vf.CANCELLED=1]="CANCELLED",vf[vf.UNKNOWN=2]="UNKNOWN",vf[vf.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vf[vf.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vf[vf.NOT_FOUND=5]="NOT_FOUND",vf[vf.ALREADY_EXISTS=6]="ALREADY_EXISTS",vf[vf.PERMISSION_DENIED=7]="PERMISSION_DENIED",vf[vf.UNAUTHENTICATED=16]="UNAUTHENTICATED",vf[vf.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vf[vf.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vf[vf.ABORTED=10]="ABORTED",vf[vf.OUT_OF_RANGE=11]="OUT_OF_RANGE",vf[vf.UNIMPLEMENTED=12]="UNIMPLEMENTED",vf[vf.INTERNAL=13]="INTERNAL",vf[vf.UNAVAILABLE=14]="UNAVAILABLE",vf[vf.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new ju([4294967295,4294967295],0);Error;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const e={and:"AND",or:"OR"}})();class _f{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function If(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Tf(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function bf(e,t){return If(e,t.toTimestamp())}function Sf(e){return ll(!!e),Rl.fromTimestamp(function(e){const t=lh(e);return new Cl(t.seconds,t.nanos)}(e))}function Af(e,t){return Cf(e,t).canonicalString()}function Cf(e,t){const n=function(e){return new kl(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Rf(e){const t=kl.fromString(e);return ll(jf(t)),t}function Nf(e,t){return Af(e.databaseId,t.path)}function kf(e){const t=Rf(e);return 4===t.length?kl.emptyPath():Df(t)}function Of(e){return new kl(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Df(e){return ll(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Pf(e,t,n){return{name:Nf(e,t),fields:n.value.mapValue.fields}}function Lf(e,t){let n;if(t instanceof af)n={update:Pf(e,t.key,t.value)};else if(t instanceof df)n={delete:Nf(e,t.key)};else if(t instanceof cf)n={update:Pf(e,t.key,t.data),updateMask:Vf(t.fieldMask)};else{if(!(t instanceof ff))return ul();n={verify:Nf(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof $d)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Hd)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Kd)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Gd)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw ul()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:bf(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ul()}(e,t.precondition)),n}function Mf(e,t){return e&&e.length>0?(ll(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Sf(e.updateTime):Sf(t);return n.isEqual(Rl.min())&&(n=Sf(t)),new Jd(n,e.transformResults||[])}(e,t)))):[]}function Uf(e){let t=kf(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){ll(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=xf(e);return t instanceof Bh&&Hh(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new xh(Ff(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ql(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Lh(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Lh(n,t)}(n.endAt)),ad(t,r,o,s,a,"F",c,u)}function xf(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ff(e.unaryFilter.field);return jh.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ff(e.unaryFilter.field);return jh.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ff(e.unaryFilter.field);return jh.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ff(e.unaryFilter.field);return jh.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ul()}}(e):void 0!==e.fieldFilter?function(e){return jh.create(Ff(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ul()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Bh.create(e.compositeFilter.filters.map((e=>xf(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ul()}}(e.compositeFilter.op))}(e):ul()}function Ff(e){return Dl.fromServerFormat(e.fieldPath)}function Vf(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function jf(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.ct=e}}function $f(e){const t=Uf({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?pd(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(hh(e.integerValue));else if("doubleValue"in e){const n=hh(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),Gl(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n&&(n=lh(n)),t.At(`${n.seconds||""}`),t.dt(n.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(dh(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?kh(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):ul()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const i of Object.keys(n))this.Rt(i,t),this.It(n[i],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const i of n)this.It(i,t)}gt(e,t){this.Et(t,37),Pl.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Hf.bt=new Hf;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zf{constructor(){this._n=new Kf}addToCollectionParentIndex(e,t){return this._n.add(t),$l.resolve()}getCollectionParents(e,t){return $l.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return $l.resolve()}deleteFieldIndex(e,t){return $l.resolve()}deleteAllFieldIndexes(e){return $l.resolve()}createTargetIndexes(e,t){return $l.resolve()}getDocumentsMatchingTarget(e,t){return $l.resolve(null)}getIndexType(e,t){return $l.resolve(0)}getFieldIndexes(e,t){return $l.resolve([])}getNextCollectionGroupToUpdate(e){return $l.resolve(null)}getMinOffset(e,t){return $l.resolve(xl.min())}getMinOffsetFromCollectionGroup(e,t){return $l.resolve(xl.min())}updateCollectionGroup(e,t,n){return $l.resolve()}updateIndexEntries(e,t){return $l.resolve()}}class Kf{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new rh(kl.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new rh(kl.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class qf{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new qf(e,qf.DEFAULT_COLLECTION_PERCENTILE,qf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qf.DEFAULT_COLLECTION_PERCENTILE=10,qf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qf.DEFAULT=new qf(41943040,qf.DEFAULT_COLLECTION_PERCENTILE,qf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qf.DISABLED=new qf(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gf{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Gf(0)}static Ln(){return new Gf(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wf{constructor(){this.changes=new _d((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ph.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?$l.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&rf(n.mutation,e,oh.empty(),Cl.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Dd()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Dd()){const i=Cd();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=Sd();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Cd();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Dd())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=Td();const s=Nd(),o=function(){return Nd()}();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof cf)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),rf(o.mutation,t,o.mutation.getFieldMask(),Cl.now())):s.set(t.key,oh.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Qf(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Nd();let i=new th(((e,t)=>e-t)),r=Dd();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||oh.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||Dd()).add(e);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=Rd();c.forEach((e=>{if(!r.has(e)){const i=tf(t.get(e),n.get(e));null!==i&&u.set(e,i),r=r.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return $l.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,i){return function(e){return Pl.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ld(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):$l.resolve(Cd());let o=-1,a=r;return s.next((t=>$l.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?$l.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Dd()))).next((e=>({batchId:o,changes:Ad(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Pl(t)).next((e=>{let t=Sd();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const r=t.collectionGroup;let s=Sd();return this.indexManager.getCollectionParents(e,r).next((o=>$l.forEach(o,(o=>{const a=function(e,t){return new od(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,a,n,i).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i)))).next((e=>{r.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,Ph.newInvalidDocument(i)))}));let n=Sd();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&rf(s.mutation,i,oh.empty(),Cl.now()),vd(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return $l.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Sf(e.createTime)}}(t)),$l.resolve()}getNamedQuery(e,t){return $l.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(e){return{name:e.name,query:$f(e.bundledQuery),readTime:Sf(e.readTime)}}(t)),$l.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.overlays=new th(Pl.comparator),this.hr=new Map}getOverlay(e,t){return $l.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Cd();return $l.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.ht(e,t,i)})),$l.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.hr.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),$l.resolve()}getOverlaysForCollection(e,t,n){const i=Cd(),r=t.length+1,s=new Pl(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return $l.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new th(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=Cd(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Cd(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=i)break;return $l.resolve(o)}ht(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new mf(t,n));let r=this.hr.get(t);void 0===r&&(r=Dd(),this.hr.set(t,r)),this.hr.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.Pr=new rh(ep.Ir),this.Tr=new rh(ep.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new ep(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new ep(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new Pl(new kl([])),n=new ep(t,e),i=new ep(t,e+1),r=[];return this.Tr.forEachInRange([n,i],(e=>{this.Ar(e),r.push(e.key)})),r}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new Pl(new kl([])),n=new ep(t,e),i=new ep(t,e+1);let r=Dd();return this.Tr.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new ep(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ep{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return Pl.comparator(e.key,t.key)||Sl(e.pr,t.pr)}static Er(e,t){return Sl(e.pr,t.pr)||Pl.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new rh(ep.Ir)}checkEmpty(e){return $l.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pf(r,t,n,i);this.mutationQueue.push(s);for(const o of i)this.wr=this.wr.add(new ep(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return $l.resolve(s)}lookupMutationBatch(e,t){return $l.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.br(n),r=i<0?0:i;return $l.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $l.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return $l.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ep(t,0),i=new ep(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,i],(e=>{const t=this.Sr(e.pr);r.push(t)})),$l.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rh(Sl);return t.forEach((e=>{const t=new ep(e,0),i=new ep(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,i],(e=>{n=n.add(e.pr)}))})),$l.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;Pl.isDocumentKey(r)||(r=r.child(""));const s=new ep(new Pl(r),0);let o=new rh(Sl);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.pr)),!0)}),s),$l.resolve(this.Dr(o))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ll(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return $l.forEach(t.mutations,(i=>{const r=new ep(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new ep(t,0),i=this.wr.firstAfterOrEqual(n);return $l.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$l.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.vr=e,this.docs=function(){return new th(Pl.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return $l.resolve(n?n.document.mutableCopy():Ph.newInvalidDocument(t))}getEntries(e,t){let n=Td();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ph.newInvalidDocument(e))})),$l.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=Td();const s=t.path,o=new Pl(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Fl(Ul(o),n)<=0||(i.has(o.key)||vd(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return $l.resolve(r)}getAllFromCollectionGroup(e,t,n,i){ul()}Fr(e,t){return $l.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ip(this)}getSize(e){return $l.resolve(this.size)}}class ip extends Wf{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(n)})),$l.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.persistence=e,this.Mr=new _d((e=>rd(e)),sd),this.lastRemoteSnapshotVersion=Rl.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Zf,this.targetCount=0,this.Lr=Gf.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),$l.resolve()}getLastRemoteSnapshotVersion(e){return $l.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $l.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$l.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),$l.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Gf(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,$l.resolve()}updateTargetData(e,t){return this.qn(t),$l.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,$l.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Mr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),$l.waitFor(r).next((()=>i))}getTargetCount(e){return $l.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return $l.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),$l.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),$l.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),$l.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return $l.resolve(n)}containsKey(e,t){return $l.resolve(this.Nr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t){this.Br={},this.overlays={},this.kr=new Kl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new rp(this),this.indexManager=new zf,this.remoteDocumentCache=function(e){return new np(e)}((e=>this.referenceDelegate.Kr(e))),this.serializer=new Bf(t),this.$r=new Jf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new tp(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){sl("MemoryPersistence","Starting transaction:",e);const i=new op(this.kr.next());return this.referenceDelegate.Ur(),n(i).next((e=>this.referenceDelegate.Wr(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gr(e,t){return $l.or(Object.values(this.Br).map((n=>()=>n.containsKey(e,t))))}}class op extends jl{constructor(e){super(),this.currentSequenceNumber=e}}class ap{constructor(e){this.persistence=e,this.zr=new Zf,this.jr=null}static Hr(e){return new ap(e)}get Jr(){if(this.jr)return this.jr;throw ul()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),$l.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),$l.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),$l.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $l.forEach(this.Jr,(n=>{const i=Pl.fromPath(n);return this.Yr(e,i).next((e=>{e||t.removeEntry(i,Rl.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return $l.or([()=>$l.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cp{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=i}static Ki(e,t){let n=Dd(),i=Dd();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new cp(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return C()?8:Hl(_())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,i){const r={result:null};return this.ji(e,t).next((e=>{r.result=e})).next((()=>{if(!r.result)return this.Hi(e,t,i,n).next((e=>{r.result=e}))})).next((()=>{if(r.result)return;const n=new up;return this.Ji(e,t,n).next((i=>{if(r.result=i,this.Ui)return this.Yi(e,t,n,i.size)}))})).next((()=>r.result))}Yi(e,t,n,i){return n.documentReadCount<this.Wi?(rl()<=se.DEBUG&&sl("QueryEngine","SDK will not create cache indexes for query:",yd(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$l.resolve()):(rl()<=se.DEBUG&&sl("QueryEngine","Query:",yd(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(rl()<=se.DEBUG&&sl("QueryEngine","The SDK decides to create cache indexes for query:",yd(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dd(t))):$l.resolve())}ji(e,t){if(ud(t))return $l.resolve(null);let n=dd(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=pd(t,null,"F"),n=dd(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=Dd(...i);return this.zi.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Zi(t,i);return this.Xi(t,s,r,n.readTime)?this.ji(e,pd(t,null,"F")):this.es(e,s,t,n)}))))})))))}Hi(e,t,n,i){return ud(t)||i.isEqual(Rl.min())?$l.resolve(null):this.zi.getDocuments(e,n).next((r=>{const s=this.Zi(t,r);return this.Xi(t,s,n,i)?$l.resolve(null):(rl()<=se.DEBUG&&sl("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yd(t)),this.es(e,s,t,Ml(i,-1)).next((e=>e)))}))}Zi(e,t){let n=new rh(wd(e));return t.forEach(((t,i)=>{vd(e,i)&&(n=n.add(i))})),n}Xi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(e,t,n){return rl()<=se.DEBUG&&sl("QueryEngine","Using full collection scan to execute query:",yd(t)),this.zi.getDocumentsMatchingQuery(e,t,xl.min(),n)}es(e,t,n,i){return this.zi.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t,n,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new th(Sl),this.rs=new _d((e=>rd(e)),sd),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}function dp(e,t,n,i){return new hp(e,t,n,i)}async function fp(e,t){const n=hl(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let o=Dd();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({us:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function pp(e,t){const n=hl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=$l.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ll(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Dd();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}function gp(e){const t=hl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}function mp(e,t){const n=hl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}class yp{constructor(){this.activeTargetIds=Ld()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vp{constructor(){this.no=new yp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new yp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{io(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){sl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){sl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _p=null;function Ip(){return null===_p?_p=function(){return 268435456+Math.round(2147483648*Math.random())}():_p++,"0x"+_p.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Tp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="WebChannelConnection";class Ap extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=t+"://"+e.host,this.So=`projects/${n}/databases/${i}`,this.bo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Do(){return!1}Co(e,t,n,i,r){const s=Ip(),o=this.vo(e,t.toUriEncodedString());sl("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(a,i,r),this.Mo(e,o,a,n).then((t=>(sl("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw al("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}xo(e,t,n,i,r,s){return this.Co(e,t,n,i,r)}Fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}vo(e,t){const n=Tp[e];return`${this.wo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,n,i){const r=Ip();return new Promise(((s,o)=>{const a=new Hu;a.setWithCredentials(!0),a.listenOnce(qu.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Gu.NO_ERROR:const t=a.getResponseJson();sl(Sp,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case Gu.TIMEOUT:sl(Sp,`RPC '${e}' ${r} timed out`),o(new fl(dl.DEADLINE_EXCEEDED,"Request time out"));break;case Gu.HTTP_ERROR:const n=a.getStatus();if(sl(Sp,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(dl).indexOf(t)>=0?t:dl.UNKNOWN}(t.status);o(new fl(e,t.message))}else o(new fl(dl.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new fl(dl.UNAVAILABLE,"Connection failed."));break;default:ul()}}finally{sl(Sp,`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(i);sl(Sp,`RPC '${e}' ${r} sending request:`,i),a.send(t,"POST",c,n,15)}))}Oo(e,t,n){const i=Ip(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ju(),o=Yu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new zu({})),this.Fo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=r.join("");sl(Sp,`Creating RPC '${e}' stream ${i}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new bp({lo:t=>{d?sl(Sp,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(h||(sl(Sp,`Opening RPC '${e}' stream ${i} transport.`),l.open(),h=!0),sl(Sp,`RPC '${e}' stream ${i} sending:`,t),l.send(t))},ho:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,Ku.EventType.OPEN,(()=>{d||(sl(Sp,`RPC '${e}' stream ${i} transport opened.`),f.mo())})),p(l,Ku.EventType.CLOSE,(()=>{d||(d=!0,sl(Sp,`RPC '${e}' stream ${i} transport closed`),f.po())})),p(l,Ku.EventType.ERROR,(t=>{d||(d=!0,al(Sp,`RPC '${e}' stream ${i} transport errored:`,t),f.po(new fl(dl.UNAVAILABLE,"The operation could not be completed")))})),p(l,Ku.EventType.MESSAGE,(t=>{var n;if(!d){const r=t.data[0];ll(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){sl(Sp,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=yf[e];if(void 0!==t)return Ef(t)}(t),r=o.message;void 0===n&&(n=dl.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),d=!0,f.po(new fl(n,r)),l.close()}else sl(Sp,`RPC '${e}' stream ${i} received:`,r),f.yo(r)}})),p(o,Qu.STAT_EVENT,(t=>{t.stat===Wu.PROXY?sl(Sp,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===Wu.NOPROXY&&sl(Sp,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(e){return new _f(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t,n=1e3,i=1.5,r=6e4){this.oi=e,this.timerId=t,this.No=n,this.Lo=i,this.Bo=r,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-n);i>0&&sl("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,(()=>(this.Qo=Date.now(),e()))),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){null!==this.qo&&(this.qo.skipDelay(),this.qo=null)}cancel(){null!==this.qo&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t,n,i,r,s,o,a){this.oi=e,this.Go=n,this.zo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Np(e,t)}Zo(){return 1===this.state||5===this.state||this.Xo()}Xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&null===this.Ho&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,(()=>this.r_())))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,4!==e?this.Yo.reset():t&&t.code===dl.RESOURCE_EXHAUSTED?(ol(t.toString()),ol("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===dl.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.jo===t&&this.u_(e,n)}),(t=>{e((()=>{const e=new fl(dl.UNKNOWN,"Fetching auth token failed: "+t.message);return this.c_(e)}))}))}u_(e,t){const n=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po((()=>{n((()=>this.listener.Po()))})),this.stream.To((()=>{n((()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,(()=>(this.Xo()&&(this.state=3),Promise.resolve()))),this.listener.To())))})),this.stream.Ao((e=>{n((()=>this.c_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}e_(){this.state=5,this.Yo.$o((async()=>{this.state=0,this.start()}))}c_(e){return sl("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget((()=>this.jo===e?t():(sl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Op extends kp{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(ll(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=Mf(e.writeResults,e.commitTime),n=Sf(e.commitTime);return this.listener.A_(n,t)}return ll(!e.writeResults||0===e.writeResults.length),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Of(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Lf(this.serializer,e)))};this.i_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new fl(dl.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,n,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Co(e,Cf(t,n),i,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===dl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fl(dl.UNKNOWN,e.toString())}))}xo(e,t,n,i,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.xo(e,Cf(t,n),i,s,o,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===dl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fl(dl.UNKNOWN,e.toString())}))}terminate(){this.m_=!0,this.connection.terminate()}}class Pp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve()))))}D_(e){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,"Online"===e&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ol(t),this.y_=!1):sl("OnlineStateTracker",t)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.io((e=>{n.enqueueAndForget((async()=>{xp(this)&&(sl("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=hl(e);t.M_.add(4),await Up(t),t.N_.set("Unknown"),t.M_.delete(4),await Mp(t)}(this))}))})),this.N_=new Pp(n,i)}}async function Mp(e){if(xp(e))for(const t of e.x_)await t(!0)}async function Up(e){for(const t of e.x_)await t(!1)}function xp(e){return 0===hl(e).M_.size}async function Fp(e,t,n){if(!zl(t))throw t;e.M_.add(1),await Up(e),e.N_.set("Offline"),n||(n=()=>gp(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{sl("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await Mp(e)}))}function Vp(e,t){return t().catch((n=>Fp(e,n,t)))}async function jp(e){const t=hl(e),n=Jp(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Bp(t);)try{const e=await mp(t.localStore,i);if(null===e){0===t.v_.length&&n.n_();break}i=e.batchId,$p(t,e)}catch(e){await Fp(t,e)}Hp(t)&&zp(t)}function Bp(e){return xp(e)&&e.v_.length<10}function $p(e,t){e.v_.push(t);const n=Jp(e);n.Xo()&&n.E_&&n.d_(t.mutations)}function Hp(e){return xp(e)&&!Jp(e).Zo()&&e.v_.length>0}function zp(e){Jp(e).start()}async function Kp(e){Jp(e).V_()}async function qp(e){const t=Jp(e);for(const n of e.v_)t.d_(n.mutations)}async function Gp(e,t,n){const i=e.v_.shift(),r=gf.from(i,t,n);await Vp(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await jp(e)}async function Wp(e,t){t&&Jp(e).E_&&await async function(e,t){if(function(e){return wf(e)&&e!==dl.ABORTED}(t.code)){const n=e.v_.shift();Jp(e).t_(),await Vp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await jp(e)}}(e,t),Hp(e)&&zp(e)}async function Qp(e,t){const n=hl(e);n.asyncQueue.verifyOperationInProgress(),sl("RemoteStore","RemoteStore received new credentials");const i=xp(n);n.M_.add(3),await Up(n),i&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await Mp(n)}async function Yp(e,t){const n=hl(e);t?(n.M_.delete(2),await Mp(n)):t||(n.M_.add(2),await Up(n),n.N_.set("Unknown"))}function Jp(e){return e.k_||(e.k_=function(e,t,n){const i=hl(e);return i.f_(),new Op(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{Po:()=>Promise.resolve(),To:Kp.bind(null,e),Ao:Wp.bind(null,e),R_:qp.bind(null,e),A_:Gp.bind(null,e)}),e.x_.push((async t=>{t?(e.k_.t_(),await jp(e)):(await e.k_.stop(),e.v_.length>0&&(sl("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))}))),e.k_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Xp{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new pl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new Xp(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new fl(dl.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zp(e,t){if(ol("AsyncQueue",`${t}: ${e}`),zl(e))return new fl(dl.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.queries=new _d((e=>md(e)),gd),this.onlineState="Unknown",this.z_=new Set}}function tg(e){e.z_.forEach((e=>{e.next()}))}var ng,ig;(ig=ng||(ng={})).J_="default",ig.Cache="cache";class rg{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new _d((e=>md(e)),gd),this.Da=new Map,this.Ca=new Set,this.va=new th(Pl.comparator),this.Fa=new Map,this.Ma=new Zf,this.xa={},this.Oa=new Map,this.Na=Gf.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}}async function sg(e,t,n){const i=fg(e);try{const e=await function(e,t){const n=hl(e),i=Cl.now(),r=t.reduce(((e,t)=>e.add(t.key)),Dd());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Td(),c=Dd();return n.os.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{s=r;const o=[];for(const e of t){const t=sf(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new cf(e.key,t,Dh(t.value.mapValue),Xd.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Ad(s)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.xa[e.currentUser.toKey()];i||(i=new th(Sl)),i=i.insert(t,n),e.xa[e.currentUser.toKey()]=i}(i,e.batchId,n),await hg(i,e.changes),await jp(i.remoteStore)}catch(e){const t=Zp(e,"Failed to persist write");n.reject(t)}}function og(e,t,n){const i=hl(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.ba.forEach(((n,i)=>{const r=i.view.j_(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=hl(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const r of n.U_)r.j_(t)&&(i=!0)})),i&&tg(n)}(i.eventManager,t),e.length&&i.Sa.h_(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function ag(e,t){const n=hl(e),i=t.batch.batchId;try{const e=await pp(n.localStore,t);lg(n,i,null),ug(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await hg(n,e)}catch(e){await Bl(e)}}async function cg(e,t,n){const i=hl(e);try{const e=await function(e,t){const n=hl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ll(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);lg(i,t,n),ug(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await hg(i,e)}catch(n){await Bl(n)}}function ug(e,t){(e.Oa.get(t)||[]).forEach((e=>{e.resolve()})),e.Oa.delete(t)}function lg(e,t,n){const i=hl(e);let r=i.xa[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.xa[i.currentUser.toKey()]=r}}async function hg(e,t,n){const i=hl(e),r=[],s=[],o=[];i.ba.isEmpty()||(i.ba.forEach(((e,a)=>{o.push(i.Ba(a,t,n).then((e=>{var t;if((e||n)&&i.isPrimaryClient){const r=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;i.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(e){r.push(e);const t=cp.Ki(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.Sa.h_(r),await async function(e,t){const n=hl(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>$l.forEach(t,(t=>$l.forEach(t.qi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>$l.forEach(t.Qi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!zl(e))throw e;sl("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.ns.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ns=n.ns.insert(e,r)}}}(i.localStore,s))}async function dg(e,t){const n=hl(e);if(!n.currentUser.isEqual(t)){sl("SyncEngine","User change. New user:",t.toKey());const e=await fp(n.localStore,t);n.currentUser=t,function(e,t){e.Oa.forEach((e=>{e.forEach((e=>{e.reject(new fl(dl.CANCELLED,t))}))})),e.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await hg(n,e.us)}}function fg(e){const t=hl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ag.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cg.bind(null,t),t}class pg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Rp(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return dp(this.persistence,new lp,e.initialUser,this.serializer)}createPersistence(e){return new sp(ap.Hr,this.serializer)}createSharedClientState(e){return new vp}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>og(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=dg.bind(null,this.syncEngine),await Yp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eg}()}createDatastore(e){const t=Rp(e.databaseInfo.databaseId),n=function(e){return new Ap(e)}(e.databaseInfo);return function(e,t,n,i){return new Dp(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,i,r){return new Lp(e,t,n,i,r)}(this.localStore,this.datastore,e.asyncQueue,(e=>og(this.syncEngine,e,0)),function(){return Ep.D()?new Ep:new wp}())}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new rg(e,t,n,i,r,s);return o&&(a.La=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=hl(e);sl("RemoteStore","RemoteStore shutting down."),t.M_.add(5),await Up(t),t.O_.shutdown(),t.N_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mg{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=tl.UNAUTHENTICATED,this.clientId=bl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{sl("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(sl("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fl(dl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Zp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function yg(e,t){e.asyncQueue.verifyOperationInProgress(),sl("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await fp(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function vg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Eg(e);sl("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>Qp(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Qp(t.remoteStore,n))),e._onlineComponents=t}function wg(e){return"FirebaseError"===e.name?e.code===dl.FAILED_PRECONDITION||e.code===dl.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Eg(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){sl("FirestoreClient","Using user provided OfflineComponentProvider");try{await yg(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!wg(n))throw n;al("Error using user provided cache. Falling back to memory cache: "+n),await yg(e,new pg)}}else sl("FirestoreClient","Using default OfflineComponentProvider"),await yg(e,new pg);return e._offlineComponents}async function _g(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(sl("FirestoreClient","Using user provided OnlineComponentProvider"),await vg(e,e._uninitializedComponentsProvider._online)):(sl("FirestoreClient","Using default OnlineComponentProvider"),await vg(e,new gg))),e._onlineComponents}function Ig(e){return _g(e).then((e=>e.syncEngine))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tg(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const bg=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(e,t,n){if(!n)throw new fl(dl.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ag(e,t,n,i){if(!0===t&&!0===i)throw new fl(dl.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Cg(e){if(!Pl.isDocumentKey(e))throw new fl(dl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Rg(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ul()}function Ng(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fl(dl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rg(e);throw new fl(dl.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kg{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new fl(dl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new fl(dl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ag("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tg(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new fl(dl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new fl(dl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new fl(dl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Og{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fl(dl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new fl(dl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kg(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ml;switch(e.type){case"firstParty":return new El(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new fl(dl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=bg.get(e);t&&(sl("ComponentProvider","Removing Datastore"),bg.delete(e),t.terminate())}(this),Promise.resolve()}}function Dg(e,t,n,i={}){var r;const s=(e=Ng(e,Og))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&al("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=tl.MOCK_USER;else{t=E(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new fl(dl.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new tl(s)}e._authCredentials=new yl(new gl(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Pg(this.firestore,e,this._query)}}class Lg{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mg(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lg(this.firestore,e,this._key)}}class Mg extends Pg{constructor(e,t,n){super(e,t,cd(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lg(this.firestore,null,new Pl(e))}withConverter(e){return new Mg(this.firestore,e,this._path)}}function Ug(e,t,...n){if(e=J(e),1===arguments.length&&(t=bl.newId()),Sg("doc","path",t),e instanceof Og){const i=kl.fromString(t,...n);return Cg(i),new Lg(e,null,new Pl(i))}{if(!(e instanceof Lg||e instanceof Mg))throw new fl(dl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(kl.fromString(t,...n));return Cg(i),new Lg(e.firestore,e instanceof Mg?e.converter:null,new Pl(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xg{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Np(this,"async_queue_retry"),this.hu=()=>{const e=Cp();e&&sl("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const e=Cp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Cp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise((()=>{}));const t=new pl;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.su.push(e),this.Tu())))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!zl(e))throw e;sl("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o((()=>this.Tu()))}}Iu(e){const t=this.iu.then((()=>(this.uu=!0,e().catch((e=>{this.au=e,this.uu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ol("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.uu=!1,e))))));return this.iu=t,t}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=Xp.createAndSchedule(this,e,t,n,(e=>this.Eu(e)));return this._u.push(i),i}Pu(){this.au&&ul()}verifyOperationInProgress(){}async du(){let e;do{e=this.iu,await e}while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then((()=>{this._u.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._u)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.du()}))}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class Fg extends Og{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=function(){return new xg}(),this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bg(this),this._firestoreClient.terminate()}}function Vg(e,t){const n="object"==typeof e?e:St(),i="string"==typeof e?e:t||"(default)",r=vt(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const e=m("firestore");e&&Dg(r,...e)}return r}function jg(e){return e._firestoreClient||Bg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Bg(e){var t,n,i;const r=e._freezeSettings(),s=function(e,t,n,i){return new mh(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Tg(i.experimentalLongPollingOptions),i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new mg(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $g{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $g(ch.fromBase64String(e))}catch(e){throw new fl(dl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new $g(ch.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new fl(dl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dl(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zg{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fl(dl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fl(dl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Sl(this._lat,e._lat)||Sl(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=/^__.*__$/;class Gg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new cf(e,this.data,this.fieldMask,t,this.fieldTransforms):new af(e,this.data,t,this.fieldTransforms)}}function Wg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ul()}}class Qg{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.mu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Qg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.gu({path:n,yu:!1});return i.wu(e),i}Su(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.gu({path:n,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return om(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(0===e.length)throw this.Du("Document fields must not be empty");if(Wg(this.fu)&&qg.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Yg{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Rp(e)}Fu(e,t,n,i=!1){return new Qg({fu:e,methodName:t,vu:n,path:Dl.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jg(e){const t=e._freezeSettings(),n=Rp(e._databaseId);return new Yg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Xg(e,t,n,i,r,s={}){const o=e.Fu(s.merge||s.mergeFields?2:0,t,n,r);nm("Data must be an object, but it was:",o,i);const a=em(i,o);let c,u;if(s.merge)c=new oh(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=im(t,i,n);if(!o.contains(r))throw new fl(dl.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);am(e,r)||e.push(r)}c=new oh(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Gg(new Oh(a),c,u)}function Zg(e,t){if(tm(e=J(e)))return nm("Unsupported field value:",t,e),em(e,t);if(e instanceof zg)return function(e,t){if(!Wg(t.fu))throw t.Du(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Du(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&4!==t.fu)throw t.Du("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Zg(r,t.bu(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=J(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return xd(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Cl.fromDate(e);return{timestampValue:If(t.serializer,n)}}if(e instanceof Cl){const n=new Cl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:If(t.serializer,n)}}if(e instanceof Kg)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof $g)return{bytesValue:Tf(t.serializer,e._byteString)};if(e instanceof Lg){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Du(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Af(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Du(`Unsupported field value: ${Rg(e)}`)}(e,t)}function em(e,t){const n={};return eh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Zl(e,((e,i)=>{const r=Zg(i,t.pu(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function tm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Cl||e instanceof Kg||e instanceof $g||e instanceof Lg||e instanceof zg)}function nm(e,t,n){if(!tm(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Rg(n);throw"an object"===i?t.Du(e+" a custom object"):t.Du(e+" "+i)}}function im(e,t,n){if((t=J(t))instanceof Hg)return t._internalPath;if("string"==typeof t)return sm(e,t);throw om("Field path arguments must be of type string or ",e,!1,void 0,n)}const rm=new RegExp("[~\\*/\\[\\]]");function sm(e,t,n){if(t.search(rm)>=0)throw om(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Hg(...t.split("."))._internalPath}catch(i){throw om(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function om(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new fl(dl.INVALID_ARGUMENT,a+e+c)}function am(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cm(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}function um(e,t,n){e=Ng(e,Lg);const i=Ng(e.firestore,Fg),r=cm(e.converter,t,n);return lm(i,[Xg(Jg(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,Xd.none())])}function lm(e,t){return function(e,t){const n=new pl;return e.asyncQueue.enqueueAndForget((async()=>sg(await Ig(e),t,n))),n.promise}(jg(e),t)}new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){nl=e}(Tt),yt(new X("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new Fg(new vl(e.getProvider("auth-internal")),new Il(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new fl(dl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yh(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),At(el,"4.6.4",e),At(el,"4.6.4","esm2017")}();const hm={apiKey:"AIzaSyCjjsljMohsGbvOOxj2kuv5PGywG-NgwW4",authDomain:"myproject-dd0cb.firebaseapp.com",projectId:"myproject-dd0cb",storageBucket:"myproject-dd0cb",messagingSenderId:"648871360118",appId:"1:648871360118:web:d68bf3ba203a751b3d1157",measurementId:"G-WBZJN6Z0V5"},dm=bt(hm),fm=(Cr(dm),Fu(dm)),pm=Vg(dm),gm=new ea;gm.setCustomParameters({prompt:"select_account"});const mm=()=>Rc(fm,gm),ym=async()=>{await ka(fm)},vm=async(e,t,n)=>{try{const i=await _a(fm,e,t);return await Sa(i.user),await Ca(i.user,{displayName:n}),i}catch(i){throw console.error("Error during signup:",i),i}},wm=async(e,t)=>{try{await um(Ug(pm,"users",e),t)}catch(n){throw console.error("Error during signup:",n),n}},Em=(e,t)=>{try{return Ia(fm,e,t)}catch(n){throw console.error("Error during sign in:",n.code,n.message),n}},_m=async()=>{const e=fm.currentUser;e&&await Sa(e)},Im=async e=>{try{const t=await ba(fm,e);return t}catch(t){throw console.error("Error during sign in:",t.code,t.message),t}},Tm=async e=>{const t={url:"http://localhost:8080/Test/#/emailoption",handleCodeInApp:!0};try{await ya(fm,e,t),console.log("重置密碼連結已發送，請檢查你的信箱。")}catch(n){throw console.error("Error during sign in:",n.code,n.message),n}},bm=async e=>{try{await Ea(fm,e)}catch(t){throw console.error("Error during sign in:",t.code,t.message),t}},Sm=async(e,t)=>{try{await va(fm,e,t)}catch(n){console.error("重置密碼錯誤:",n),(void 0).errorMessage="重置密碼失敗，請稍後再試"}}},679:function(e,t,n){var i=n(1625),r=TypeError;e.exports=function(e,t){if(i(t,e))return e;throw new r("Incorrect invocation")}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6193:function(e,t,n){var i=n(9504),r=Error,s=i("".replace),o=function(e){return String(new r(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!r.prepareStackTrace)while(t--)e=s(e,a,"");return e}},3167:function(e,t,n){var i=n(4901),r=n(34),s=n(2967);e.exports=function(e,t,n){var o,a;return s&&i(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2603:function(e,t,n){var i=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},655:function(e,t,n){var i=n(6955),r=String;e.exports=function(e){if("Symbol"===i(e))throw new TypeError("Cannot convert a Symbol value to a string");return r(e)}},4979:function(e,t,n){var i=n(6518),r=n(4475),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,E);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),i=new v(t,n),r=new y(t);return r.name=m,a(i,"stack",o(1,f(r.stack,1))),l(i,this,w),i},E=w.prototype=v.prototype,_="stack"in new y(m),I="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(r,m),b=!!T&&!(T.writable&&T.configurable),S=_&&!b&&!I;i({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:v});var A=s(m),C=A.prototype;if(C.constructor!==A)for(var R in g||a(C,"constructor",o(1,A)),d)if(c(d,R)){var N=d[R],k=N.s;c(A,k)||a(A,k,o(6,N.c))}},4603:function(e,t,n){var i=n(6840),r=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=r(c.append),l=r(c["delete"]),h=r(c.forEach),d=r([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&i(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var i=[];h(this,(function(e,t){d(i,{key:t,value:e})})),o(t,1);var r,a=s(e),c=s(n),f=0,p=0,g=!1,m=i.length;while(f<m)r=i[f++],g||r.key===a?(g=!0,l(this,r.key)):p++;while(p<m)r=i[p++],r.key===a&&r.value===c||u(this,r.key,r.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var i=n(6840),r=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=r(c.getAll),l=r(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||i(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var i=u(this,e);o(t,1);var r=s(n),a=0;while(a<i.length)if(i[a++]===r)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var i=n(3724),r=n(9504),s=n(2106),o=URLSearchParams.prototype,a=r(o.forEach);i&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=301.e7d37a91.js.map