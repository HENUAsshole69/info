(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06628c90"],{"76e2":function(e,t,n){"use strict";var s=n("a5f6"),i=n.n(s);i.a},a55b:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.ok?n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:""}},[n("v-content",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{staticClass:"login-form text-xs-center"},[n("div",{staticClass:"display-1 mb-3"},[n("v-icon",{staticClass:"mr-2",attrs:{large:"large"}},[e._v(" mdi-bank-outline")]),e._v(" "),n("h3",{staticStyle:{display:"inline-block"}},[e._v("新闻管理系统")])],1),n("v-card",{attrs:{light:"light"}},[e.loading?n("v-progress-linear",{attrs:{indeterminate:"",color:"cyan"}}):e._e(),n("v-card-text",[n("div",{staticClass:"subheading"},[n("transition",{attrs:{name:"fade"}},[e.options.errorAlert?n("v-alert",{attrs:{type:"error"}},[e._v(" 用户名或密码错误 ")]):e._e()],1),n("transition",{attrs:{name:"fade"}},[e.options.successAlert?n("v-alert",{attrs:{type:"success"}},[e._v(" 操作成功 ")]):e._e()],1),e.options.isLoggingIn?[e._v("登录")]:[e._v("注册")]],2),n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{rules:e.notEmptyRules,light:"light","prepend-icon":"mdi-account",label:"用户名"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e.options.isLoggingIn?e._e():n("v-text-field",{attrs:{rules:e.notEmptyRules,light:"light","prepend-icon":"mdi-account",label:"真名"},model:{value:e.user.realName,callback:function(t){e.$set(e.user,"realName",t)},expression:"user.realName"}}),e.options.isLoggingIn?e._e():n("v-text-field",{attrs:{rules:e.notEmptyRules,type:"number",light:"light","prepend-icon":"mdi-phone",label:"电话"},model:{value:e.user.cell,callback:function(t){e.$set(e.user,"cell",t)},expression:"user.cell"}}),n("v-text-field",{attrs:{rules:e.notEmptyRules,light:"light","prepend-icon":"mdi-lock",label:"密码",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e.options.isLoggingIn?e._e():n("v-text-field",{attrs:{"prepend-icon":"mdi-lock",type:"password",label:"确认密码",rules:[function(e){return void 0!==e&&0!==e.length||"密码确认不能为空"},e.confirm],hint:"确认新密码"}}),e.options.isLoggingIn?n("v-btn",{attrs:{block:"block",type:"submit",disabled:!e.loading&&!e.valid},on:{click:[function(e){e.preventDefault()},e.login]}},[e._v("登录")]):n("v-btn",{attrs:{block:"block",type:"submit",disabled:!e.loading&&!e.valid},on:{click:[function(t){t.preventDefault(),e.options.isLoggingIn=!0},e.register]}},[e._v("注册")])],1)],1)],1),e.options.isLoggingIn?n("div",[e._v("没有账号?点此注册 "),n("v-btn",{attrs:{light:"light",text:"",disabled:e.loading},on:{click:e.goToRegister}},[e._v("注册")])],1):e._e()],1)],1)],1)],1),n("v-footer",{attrs:{app:"app"}},[n("v-flex",{staticClass:"text-xs-center"},[e._v("© 2018. 保留所有权利.")])],1)],1)],1):e._e()])},i=[],r=(n("b0c0"),n("96cf"),n("1da1")),a=n("2b0e"),o=n("9715"),l=n("d4ec"),c=function e(t,n,s){Object(l["a"])(this,e),this.info=t,this.name=n,this.type=s},u=function e(t,n){Object(l["a"])(this,e),this.cell=t,this.realName=n},p=function e(t,n,s,i,r){Object(l["a"])(this,e),this.password=t,this.user=new c(new u(i,r),n,s)},d=n("afbc"),g=n("8d8d"),h=a["default"].extend({name:"login",components:{},props:{reg:{type:String,default:""}},data:function(){return{user:{name:"",realName:"",cell:"",password:"",type:"INDIVIDUAL"},options:{isLoggingIn:!0,errorAlert:!1,successAlert:!1},ok:!1,loading:!1,valid:!0,notEmptyRules:[function(e){return 0!==e.length||"该项不能为空"}]}},beforeMount:function(){null!=this.$store.state.token?d["a"].push("/manage"):this.ok=!0,"true"===this.reg&&(this.options.isLoggingIn=!1)},methods:{confirm:function(e){return e===this.user.password||"密码不一致"},login:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,o["a"].login(this.user.name,this.user.password);case 4:return t=e.sent,this.$store.commit("login",t.data),g["a"].defaults.headers.common["x-api-key"]=t.data,localStorage.setItem("token",t.data),e.next=10,this.$store.dispatch("getUserObj");case 10:return e.next=12,d["a"].push("/manage");case 12:e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](0),this.options.errorAlert=!0,n=this,setTimeout((function(){n.options.errorAlert=!1}),1e3);case 19:return e.prev=19,this.loading=!1,e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,14,19,22]])})));function t(){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,e.next=4,o["a"].register(new p(this.user.password,this.user.name,this.user.type,this.user.cell,this.user.realName));case 4:return e.sent,this.successAlert=!0,e.next=8,d["a"].push("/manage");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.errorAlert=!0;case 13:return e.prev=13,this.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[0,10,13,16]])})));function t(){return e.apply(this,arguments)}return t}(),goToRegister:function(){this.valid=!1,this.options.isLoggingIn=!1}}}),v=h,f=(n("76e2"),n("2877")),m=Object(f["a"])(v,s,i,!1,null,"f57752ee",null);t["default"]=m.exports},a5f6:function(e,t,n){}}]);
//# sourceMappingURL=chunk-06628c90.340093a2.js.map