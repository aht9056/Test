"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[887],{7887:function(e,i,t){t.r(i),t.d(i,{default:function(){return u}});var s=function(){var e=this,i=e._self._c;return i("div",{staticClass:"container mt-5 layout"},[i("b-card",[i("b-card-body",[e.user.emailVerified?e._e():i("p",{staticStyle:{color:"red"}},[e._v(" 請先驗證您的信箱 ")]),i("p",[e._v("電子信箱: "+e._s(e.user.email))]),e.user.emailVerified?i("p",[e._v("驗證成功!")]):e._e(),e.user.emailVerified?e._e():i("b-button",{staticClass:"mt-3 ms-3",attrs:{variant:"warning",disabled:e.isCooldown},on:{click:e.resendVerificationEmail}},[e._v("重新發送驗證信")]),e.isCooldown&&!e.user.emailVerified?i("p",{staticClass:"text-warning mt-2"},[e._v(" 請等待 "+e._s(e.cooldownTime)+" 秒後再次發送驗證信。 ")]):e._e()],1)],1)],1)},r=[],o=(t(4114),t(9301)),n={data(){return{user:null,email:"",password:"",isVerifying:!0,isCooldown:!1,cooldownTime:60}},methods:{async Verify(){try{this.startCooldown(),await this.checkEmailVerification()}catch(e){this.isVerifying=!1}},async checkEmailVerification(){this.isVerifying=!0;let e=o.j2.currentUser;console.log("進行信箱驗證中....");while(e&&!e.emailVerified)await e.reload(),e=o.j2.currentUser,await new Promise((e=>setTimeout(e,2e3)));e&&e.emailVerified&&(console.log("信箱已驗證"),this.isVerifying=!1,this.user=e,this.$store.state.userInfo.user=this.user,this.$store.state.userInfo.notVerifyUser=null,localStorage.setItem("userInfo",JSON.stringify(result.user)),this.$store.commit("SET_IS_LOGIN",!0),this.$router.push("/home"))},async resendVerificationEmail(){try{this.startCooldown(),await(0,o.nA)(),alert("驗證信已重新發送，請檢察您的信箱。")}catch(e){console.error("重新發送驗證信錯誤: ",e)}},startCooldown(){this.isCooldown=!0,this.cooldownTime=60;const e=setInterval((()=>{this.cooldownTime--,this.cooldownTime<=0&&(clearInterval(e),this.isCooldown=!1)}),1e3)}},beforeMount(){this.user=this.$store.state.userInfo.notVerifyUser.user,this.Verify()}},a=n,l=t(1656),c=(0,l.A)(a,s,r,!1,null,"21995b14",null),u=c.exports}}]);
//# sourceMappingURL=887.3cd2c2bb.js.map