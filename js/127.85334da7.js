"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[127],{127:function(t,a,e){e.r(a),e.d(a,{default:function(){return d}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("div",{ref:"routerView",staticClass:"navbar-container"},[a("nav",{staticClass:"navbar navbar-expand-lg",class:{"navbar-expanded":t.isNavbarExpanded},style:{backgroundColor:"white"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-brand"},[t._v("LOGOTEST")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(a){return t.toggleEvent()}}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/home"}},[t._v("數位行銷")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/about"}},[t._v("網站設計")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/vuex"}},[t._v("VuexTry")])],1),t._m(0),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/about"}},[t._v("關於")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/about"}},[t._v("會員管理系統")])],1)])])])])]),a("div",{staticClass:"router"},[a("router-view")],1)])},i=[function(){var t=this,a=t._self._c;return a("li",{staticClass:"nav-item dropdown",staticStyle:{display:"block",margin:"0 auto"}},[a("a",{staticClass:"nav-link dropdown-icon",attrs:{href:"#"}},[t._v(" 下拉式 ")]),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"dropdown-li"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")])]),a("li",{staticClass:"dropdown-li"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")])]),a("li",{staticClass:"dropdown-li"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something")])])])])}],r={data(){return{isNavbarExpanded:!1,isTogggleExpanded:!1,arr:["a"]}},mounted(){window.addEventListener("resize",this.handleResize)},destroyed(){window.removeEventListener("resize",this.handleResize)},methods:{toggleEvent(){"330px"!=this.$refs.routerView.style.height?(this.$refs.routerView.style.height="330px",this.isTogggleExpanded=!0):(this.$refs.routerView.style.height="60px",this.isTogggleExpanded=!1),this.handleResize()},handleResize(){const t=window.innerWidth;console.log("当前窗口宽度："+t+"px"),t>=992?this.$refs.routerView.style.height="70px":0==this.isTogggleExpanded?this.$refs.routerView.style.height="60px":1==this.isTogggleExpanded&&(this.$refs.routerView.style.height="330px")}}},n=r,l=e(1656),o=(0,l.A)(n,s,i,!1,null,null,null),d=o.exports}}]);
//# sourceMappingURL=127.85334da7.js.map