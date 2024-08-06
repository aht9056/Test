"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[708],{6708:function(s,t,e){e.r(t),e.d(t,{default:function(){return d}});var i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"container mt-5 d-flex justify-content-center"},[t("div",{staticClass:"layout"},[t("article",{staticClass:"l-design-width"},[t("div",{staticClass:"card"},[t("h2",[s._v("登入")]),t("label",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.loginEmail,expression:"loginEmail"}],staticClass:"input__field",attrs:{type:"email",placeholder:""},domProps:{value:s.loginEmail},on:{input:function(t){t.target.composing||(s.loginEmail=t.target.value)}}}),t("span",{staticClass:"input__label"},[s._v("電子信箱")])]),t("small",{staticClass:"errorhint"},[s._v(s._s(this.emailError))]),t("label",{staticClass:"input"},["checkbox"===s.passwordFieldType?t("input",{directives:[{name:"model",rawName:"v-model",value:s.loginPassword,expression:"loginPassword"}],staticClass:"input__field",attrs:{placeholder:"",type:"checkbox"},domProps:{checked:Array.isArray(s.loginPassword)?s._i(s.loginPassword,null)>-1:s.loginPassword},on:{change:function(t){var e=s.loginPassword,i=t.target,a=!!i.checked;if(Array.isArray(e)){var o=null,r=s._i(e,o);i.checked?r<0&&(s.loginPassword=e.concat([o])):r>-1&&(s.loginPassword=e.slice(0,r).concat(e.slice(r+1)))}else s.loginPassword=a}}}):"radio"===s.passwordFieldType?t("input",{directives:[{name:"model",rawName:"v-model",value:s.loginPassword,expression:"loginPassword"}],staticClass:"input__field",attrs:{placeholder:"",type:"radio"},domProps:{checked:s._q(s.loginPassword,null)},on:{change:function(t){s.loginPassword=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:s.loginPassword,expression:"loginPassword"}],staticClass:"input__field",attrs:{placeholder:"",type:s.passwordFieldType},domProps:{value:s.loginPassword},on:{input:function(t){t.target.composing||(s.loginPassword=t.target.value)}}}),t("span",{staticClass:"input__label"},[s._v("密碼")]),t("button",{staticClass:"eye",on:{click:s.togglePasswordFieldType}},["text"===s.passwordFieldType?t("i",{staticClass:"bi bi-eye-fill"}):t("i",{staticClass:"bi bi-eye-slash-fill"})])]),t("div",{staticClass:"mt-1 d-flex justify-content-between"},[t("small",{staticClass:"errorhint"},[s._v(s._s(this.passwordError))]),t("a",{staticClass:"btn-outline-dark register_link ms-1",on:{click:function(t){return s.goforgetPassword()}}},[s._v(" 忘記密碼")])]),t("div",{staticClass:"mt-1",staticStyle:{"overflow-x":"auto","overflow-y":"hidden"},attrs:{id:"recaptchaLogin"}}),t("small",{staticClass:"errorhint"},[s._v(s._s(this.recaptchaError))]),t("div",{staticClass:"mt-3"},[t("button",{on:{click:s.loginWithEmail}},[s._v("登入")])]),t("div",{staticClass:"mt-3 d-flex"},[t("span",[s._v("還沒有帳號嗎? /")]),t("a",{staticClass:"btn-outline-dark register_link ms-1",on:{click:s.goRegister}},[s._v(" 我要註冊")])]),s._m(0),t("div",{staticClass:"mt-3"},[t("a",{staticClass:"btn bsb-btn-2xl btn-outline-dark rounded-0 d-flex align-items-center google",attrs:{href:"#!"},on:{click:s.loginWithGoogle}},[t("svg",{staticClass:"bi bi-google text-danger",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"}})]),t("span",{staticClass:"ms-2 fs-6 flex-grow-1"},[s._v("Google 登入")])])])])])])])},a=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"mt-3 d-flex justify-content-center"},[t("span",{staticClass:"line"},[s._v(" 使用其他方式快速登入 ")])])}],o=(e(4114),e(9301)),r={data(){return{loginEmail:"",loginPassword:"",emailError:"",passwordError:"",passwordFieldType:"password",sitekey:"6LcMlx8qAAAAAEO7Rag1tCQ1LooF2bqer_EN7ITo",myToken:"",recaptchaError:"",mode:"",oobCode:""}},methods:{async loginWithGoogle(){try{const s=await(0,o.G6)();this.$store.state.userInfo.user=s.user,localStorage.setItem("userInfo",JSON.stringify(s.user)),this.$store.commit("SET_IS_LOGIN",!0),this.$router.push("/home")}catch(s){console.error("登入錯誤: ",s)}},async loginWithEmail(){try{if(this.checkReCAPTCHA()){const s=await(0,o.Ru)(this.loginEmail,this.loginPassword);s.user.emailVerified?(this.$store.state.userInfo.user=s.user,localStorage.setItem("userInfo",JSON.stringify(s.user)),this.$store.commit("SET_IS_LOGIN",!0),this.$router.push("/home")):(this.$store.state.userInfo.notVerifyUser=s,alert("請先驗證您的信箱。"),this.$router.push("emailverify"))}}catch(s){this.emailError="",this.passwordError="","auth/user-not-found"===s.code?this.emailError="※ 無效的 Email 地址":"auth/wrong-password"===s.code?this.passwordError="※ 密碼錯誤":console.error("登入錯誤: ",s)}},goRegister(){this.$router.push("register")},togglePasswordFieldType(){"password"===this.passwordFieldType?this.passwordFieldType="text":this.passwordFieldType="password"},getToken:function(s){this.myToken=s,this.checkReCAPTCHA()},loadReCAPTCHA(){grecaptcha.render(document.getElementById("recaptchaLogin"),{sitekey:this.sitekey,callback:this.getToken})},checkReCAPTCHA(){return""==this.myToken?(this.recaptchaError="※ 機器人驗證失敗",!1):(this.recaptchaError="",!0)},goforgetPassword(){this.$router.push("forgetPassword")}},mounted(){this.loadReCAPTCHA()}},l=r,n=e(1656),c=(0,n.A)(l,i,a,!1,null,"576521b0",null),d=c.exports}}]);
//# sourceMappingURL=708.e168ca71.js.map