(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fada2e9e"],{"8b34":function(e,t,n){e.exports=n.p+"img/logo-big.392ea253.png"},a115:function(e,t,n){"use strict";var s=n("d018"),r=n.n(s);r.a},a55b:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[e.ok?s("div",{attrs:{id:"app"}},[s("v-app",{attrs:{dark:""}},[s("v-content",[s("v-container",{attrs:{"fill-height":""}},[s("v-layout",{attrs:{"align-center":"","justify-center":""}},[s("v-flex",{staticClass:"login-form text-xs-center"},[s("div",{staticClass:"display-1 mb-3"},[s("v-img",{attrs:{src:n("8b34")}})],1),s("v-card",{attrs:{light:"light"}},[e.loading?s("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),s("v-card-text",[s("div",{staticClass:"subheading"},[s("transition",{attrs:{name:"fade"}},[e.options.errorAlert?s("v-alert",{attrs:{type:"error"}},[e._v(" 用户名或密码错误 ")]):e._e()],1),s("transition",{attrs:{name:"fade"}},[e.options.successAlert?s("v-alert",{attrs:{type:"success"}},[e._v(" 操作成功 ")]):e._e()],1),e.options.isLoggingIn?[e._v("登录")]:[e._v("注册")]],2),s("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{rules:e.notEmptyRules,light:"light","prepend-icon":"mdi-account",label:"用户名"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e.options.isLoggingIn?e._e():s("v-text-field",{attrs:{rules:e.notEmptyRules,light:"light","prepend-icon":"mdi-account",label:"真名"},model:{value:e.user.realName,callback:function(t){e.$set(e.user,"realName",t)},expression:"user.realName"}}),e.options.isLoggingIn?e._e():s("v-text-field",{attrs:{rules:e.notEmptyRules,type:"number",light:"light","prepend-icon":"mdi-phone",label:"电话"},model:{value:e.user.cell,callback:function(t){e.$set(e.user,"cell",t)},expression:"user.cell"}}),s("v-text-field",{attrs:{rules:e.notEmptyRules,light:"light","prepend-icon":"mdi-lock",label:"密码",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e.options.isLoggingIn?e._e():s("v-text-field",{attrs:{"prepend-icon":"mdi-lock",type:"password",label:"确认密码",rules:[function(e){return void 0!==e&&0!==e.length||"密码确认不能为空"},e.confirm],hint:"确认新密码"}}),e.options.isLoggingIn?s("v-btn",{attrs:{block:"block",type:"submit",disabled:!e.loading&&!e.valid},on:{click:[function(e){e.preventDefault()},e.login]}},[e._v("登录")]):s("v-btn",{attrs:{block:"block",type:"submit",disabled:!e.loading&&!e.valid},on:{click:[function(t){t.preventDefault(),e.options.isLoggingIn=!0},e.register]}},[e._v("注册")])],1)],1)],1),e.options.isLoggingIn?s("div",[e._v("没有账号?点此注册 "),s("v-btn",{attrs:{light:"light",text:"",disabled:e.loading},on:{click:e.goToRegister}},[e._v("注册")])],1):e._e()],1)],1)],1)],1),s("v-footer",{attrs:{app:"app"}},[s("v-flex",{staticClass:"text-xs-center"},[e._v("© 2018. 保留所有权利.")])],1)],1)],1):e._e()])},r=[],i=(n("b0c0"),n("96cf"),n("1da1")),a=n("2b0e"),o=n("9715"),l=n("d4ec"),c=function e(t,n,s){Object(l["a"])(this,e),this.info=t,this.name=n,this.type=s},u=function e(t,n){Object(l["a"])(this,e),this.cell=t,this.realName=n},p=function e(t,n,s,r,i){Object(l["a"])(this,e),this.password=t,this.user=new c(new u(r,i),n,s)},d=n("afbc"),g=n("8d8d"),h=a["default"].extend({name:"login",components:{},props:{reg:{type:String,default:""}},data:function(){return{user:{name:"",realName:"",cell:"",password:"",type:"INDIVIDUAL"},options:{isLoggingIn:!0,errorAlert:!1,successAlert:!1},ok:!1,loading:!1,valid:!0,notEmptyRules:[function(e){return 0!==e.length||"该项不能为空"}]}},beforeMount:function(){null!=this.$store.state.token?d["a"].push("/manage"):this.ok=!0,"true"===this.reg&&(this.options.isLoggingIn=!1)},methods:{confirm:function(e){return e===this.user.password||"密码不一致"},login:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,o["a"].login(this.user.name,this.user.password);case 4:return t=e.sent,this.$store.commit("login",t.data),g["a"].defaults.headers.common["x-api-key"]=t.data,localStorage.setItem("token",t.data),e.next=10,this.$store.dispatch("getUserObj");case 10:return e.next=12,d["a"].push("/manage");case 12:e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](0),this.options.errorAlert=!0,n=this,setTimeout((function(){n.options.errorAlert=!1}),1e3);case 19:return e.prev=19,this.loading=!1,e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,14,19,22]])})));function t(){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,o["a"].register(new p(this.user.password,this.user.name,this.user.type,this.user.cell,this.user.realName));case 4:return e.sent,this.successAlert=!0,e.next=8,d["a"].push("/manage");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.errorAlert=!0;case 13:return e.prev=13,this.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[0,10,13,16]])})));function t(){return e.apply(this,arguments)}return t}(),goToRegister:function(){this.valid=!1,this.options.isLoggingIn=!1}}}),v=h,f=(n("a115"),n("2877")),m=Object(f["a"])(v,s,r,!1,null,"a2ff9e48",null);t["default"]=m.exports},d018:function(e,t,n){}}]);
//# sourceMappingURL=chunk-fada2e9e.2f84baaa.js.map