(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25bcc3ba"],{"2c96":function(t,e,i){},"2de2":function(t,e,i){},"38ec":function(t,e,i){t.exports=i.p+"img/indexhbg.546250ba.jpg"},"45ca":function(t,e,i){t.exports=i.p+"img/art_code.9f26ef24.jpg"},"564d":function(t,e,i){"use strict";var n=i("2c96"),a=i.n(n);a.a},8109:function(t,e,i){"use strict";var n=i("2de2"),a=i.n(n);a.a},8999:function(t,e,i){t.exports=i.p+"img/police.db7ba2e1.png"},c15e:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{position:"fixed",right:"1em",bottom:"4em","z-index":"100"}},[n("v-card",{attrs:{tile:""}},[n("v-list",{staticStyle:{"padding-top":"0","padding-bottom":"0"},attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._l(t.floatingOptions,(function(e,i){return[n("v-list-item",{key:i,staticClass:"text-center",staticStyle:{"padding-left":"0.5em","padding-right":"0.5em"},attrs:{color:"pink"},on:{click:function(){return t.goTo(e)}}},[n("v-list-item-content",[n("div",[n("v-icon",{attrs:{large:""}},[t._v(t._s(e.icon))]),n("v-list-item-title",[t._v(t._s(e.text))])],1)])],1),n("v-divider",{key:i})]}))],2)],1)],1),n("v-card",{staticStyle:{"margin-top":"1em"},attrs:{tile:""}},[n("v-list",{staticStyle:{"padding-top":"0","padding-bottom":"0"},attrs:{dense:""}},[n("v-list-item",{staticClass:"text-center",staticStyle:{"padding-left":"1em"},on:{click:function(e){return t.$vuetify.goTo(0)}}},[n("v-list-item-content",[n("div",[n("v-icon",{attrs:{large:""}},[t._v("mdi-chevron-up")]),n("v-list-item-title",[t._v("返回顶部")])],1)])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"",color:"black",dark:"",dense:""}},[n("v-spacer"),null===t.$store.state.userObj?[n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.$router.push("/login")}}},[t._v("登录")]),t._v("| "),n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.$router.push("/login/true")}}},[t._v("注册")]),t._v("| ")]:[n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.$router.push("/manage")}}},[t._v("后台")]),t._v("| ")],n("v-menu",{attrs:{"offset-y":"","offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:"",color:"white"}},"v-btn",a,!1),i),[n("v-icon",{attrs:{left:""}},[t._v("mdi-wechat")]),t._v("微信公众平台")],1)]}}])},[n("v-list",[n("v-list-item",[n("v-img",{attrs:{"max-width":"133px","max-height":"133px",src:i("45ca")}})],1)],1)],1)],2),n("v-container",{style:{backgroundImage:"url("+i("38ec")+")","background-size":"cover"},attrs:{fluid:""}},[n("v-container",{staticStyle:{padding:"0",margin:"0"}},[n("v-row",{staticClass:"d-flex justify-center flex-nowrap",attrs:{"no-gutters":""}},[n("v-col",{attrs:{lg:"8"}},[n("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"flex-grow-0"},[n("img",{staticStyle:{cursor:"pointer"},attrs:{src:i("c780")},on:{click:function(e){return t.$router.push("/")}}})]),n("v-col",{staticClass:"flex-grow-1"},[n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":""}},[n("div",{staticClass:"my-2"},[n("v-btn",{staticClass:"top-menu",attrs:{text:"",color:"white"},on:{click:function(e){return t.$router.push("/")}}},[t._v("首页")])],1),n("div",{staticClass:"my-2"},[n("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"top-menu",attrs:{text:"",color:"white"}},"v-btn",a,!1),i),[t._v(" 保税仓储 ")])]}}])},[n("v-list",{attrs:{color:"#29395a"}},t._l(t.warehouseItems,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",dense:""},on:{click:function(i){return t.goTo(e)}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"menu-text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),n("div",{staticClass:"my-2"},[n("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"top-menu",attrs:{text:"",color:"white"}},"v-btn",a,!1),i),[t._v(" 展览展示 ")])]}}])},[n("v-list",{attrs:{color:"#29395a"}},t._l(t.browseItems,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",dense:""},on:{click:function(i){return t.goTo(e)}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"menu-text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),n("div",{staticClass:"my-2"},[n("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"top-menu",attrs:{text:"",color:"white"}},"v-btn",a,!1),i),[t._v(" 拍卖 ")])]}}])},[n("v-list",{attrs:{color:"#29395a"}},t._l(t.auctionItems,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",dense:""},on:{click:function(i){return t.goTo(e)}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"menu-text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),n("div",{staticClass:"my-2"},[n("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"top-menu",attrs:{text:"",color:"white"}},"v-btn",a,!1),i),[t._v(" 子机构职能 ")])]}}])},[n("v-list",{attrs:{color:"#29395a"}},t._l(t.childDeptItems,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",dense:""},on:{click:function(i){return t.goTo(e)}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"menu-text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),n("div",{staticClass:"my-2"},[n("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"top-menu",attrs:{text:"",color:"white"}},"v-btn",a,!1),i),[t._v(" 信息公开 ")])]}}])},[n("v-list",{attrs:{color:"#29395a"}},t._l(t.newsItems,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",dense:""},on:{click:function(i){return t.goTo(e)}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"menu-text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1),n("div",{staticClass:"my-2"},[n("v-btn",{staticClass:"top-menu",attrs:{text:"",color:"white"},on:{click:function(e){return t.goTo({id:11})}}},[t._v(" 关于我们 ")])],1),n("div",{staticClass:"my-2"},[n("v-btn",{staticClass:"top-menu",attrs:{text:"",color:"white"}},[t._v(" 中英切换 ")])],1)])],1)],1)],1)],1)],1)],1),t._t("default")],2),t._t("footer"),n("Footer"),n("LegalInfo")],2)},a=[],s=(i("96cf"),i("1da1")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{style:{"background-size":"cover"},attrs:{fluid:""}},[i("v-row",{staticClass:"d-flex justify-center",attrs:{"no-gutters":""}},[i("v-col",{attrs:{lg:"8"}},[i("v-container",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"text d-flex justify-center",staticStyle:{"padding-right":"0","margin-right":"0"},attrs:{cols:"6"}},[i("v-container",{staticClass:"item",attrs:{fluid:""}},[i("v-row",{staticClass:"flex-nowrap",attrs:{"no-gutters":""}},[i("v-col",[i("div",[i("v-card-title",{staticClass:"subheading font-weight-bold"},[t._v("友情链接")]),i("v-divider"),i("v-list",{staticStyle:{background:"#00000000",margin:"0",padding:"0"},attrs:{dense:""}},[i("v-list-item",[i("v-list-item-avatar",{staticClass:"text item-text"},[t._v("自贸区")]),i("v-list-item-content",{staticClass:"align-end text"},[i("friendly-link-select")],1)],1),i("v-list-item",[i("v-list-item-content",{staticClass:"text item-text"},[t._v("保税仓")]),i("v-list-item-content",{staticClass:"align-end text"})],1)],1)],1)])],1)],1)],1),i("v-col",{staticClass:"text",staticStyle:{"padding-right":"0","margin-right":"0"},attrs:{cols:"6"}},[i("v-container",{staticClass:"item",attrs:{fluid:""}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"10"}},[i("div",[i("v-card-title",{staticClass:"text subheading font-weight-bold"},[t._v("国际艺术品保税仓")]),i("v-divider",{staticStyle:{color:"white"}}),i("v-list",{staticStyle:{background:"#00000000",margin:"0",padding:"0"},attrs:{dense:""}},[i("v-list-item",[i("v-list-item-avatar",{staticClass:"text  item-text "},[t._v("地址：")]),i("v-list-item-content",{staticClass:"align-start text"},[t._v("河南省开封市郑开大道与八大街交叉口绿地6号楼")])],1),i("v-list-item",[i("v-list-item-avatar",{staticClass:"text  item-text"},[t._v("电话：")]),i("v-list-item-content",{staticClass:"align-end text"},[t._v("0371-23333063")])],1)],1)],1)])],1)],1)],1),i("v-col",{staticClass:"d-flex justify-center",staticStyle:{"padding-right":"0","margin-right":"0"}})],1)],1)],1)],1)],1)},r=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-select",{attrs:{dark:"",label:"外部链接",items:t.links},on:{change:function(e){t.window.location=e}}})},l=[],v={"中国（河南）自由贸易试验区":"http://www.china-hnftz.gov.cn/","中国（河南）自由贸易试验区开封片区":"http://www.kfftz.gov.cn/","中国（河南）自由贸易试验区郑州片区":"http://www.zzftz.gov.cn/","中国（河南）自由贸易试验区洛阳片区":"http://www.china-lyftz.gov.cn/","中国（上海）自由贸易试验区":"http://www.china-shftz.gov.cn/","中国（广东）自由贸易试验区":"http://ftz.gd.gov.cn/","中国（福建）自由贸易试验区":"http://www.china-fjftz.gov.cn/","中国（天津）自由贸易试验区":"http://www.china-tjftz.gov.cn/","中国（湖北）自由贸易试验区":"https://www.china-hbftz.gov.cn/index.html","中国（广西）自由贸易试验区":"http://gxftz.gxzf.gov.cn/","中国（辽宁）自由贸易试验区":"http://www.china-lnftz.gov.cn/cn/index.html","中国（重庆）自由贸易试验区":"http://www.liangjiang.gov.cn/index.htm","中国（云南）自由贸易试验区":"http://yunnan.ynmaker.com/","中国（浙江）自由贸易试验区":"http://china-zsftz.zhoushan.gov.cn/","中国（四川）自由贸易试验区":"http://www.scftz.gov.cn/","中国（山东）自由贸易试验区":"http://ftz.sdcom.gov.cn/","中国（河北）自由贸易试验区":"http://ftz.hebei.gov.cn/","中国（陕西）自由贸易试验区":"http://ftz.shaanxi.gov.cn/","海南自由贸易港":"http://www.hnftp.gov.cn/"},u={name:"FriendlyLinkSelect",data:function(){return{friendlyList:v,window:window}},computed:{links:function(){var t=[],e=this;for(var i in this.friendlyList)t.push({text:i,value:e.friendlyList[i]});return t}}},d=u,m=i("2877"),f=Object(m["a"])(d,c,l,!1,null,"19ef02a9",null),p=f.exports,g={name:"Footer",components:{FriendlyLinkSelect:p}},h=g,w=(i("8109"),Object(m["a"])(h,o,r,!1,null,"8f8aa088",null)),_=w.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"background-color":"#000000"},attrs:{fluid:""}},[n("v-row",{staticClass:"d-flex justify-lg-space-between flex-nowrap"},[n("v-col",[n("div",{staticStyle:{color:"white","font-size":"small"}},[n("div",[t._v(" 拍卖经营批准书： "),n("a",{staticStyle:{"text-decoration":"none",color:"rgba(82,82,97,1)"},attrs:{href:"javascript:void(0);"}},[t._v("4406441100002018")]),t._v(" 河南省文物拍卖许可证： "),n("a",{staticStyle:{"text-decoration":"none",color:"rgba(82,82,97,1)"},attrs:{href:"javascript:void(0);"}},[t._v("豫文物证2019001号")])])])]),n("v-col",{},[n("div",{staticStyle:{color:"white","font-size":"small",float:"right"}},[n("img",{staticStyle:{width:"15px","vertical-align":"bottom"},attrs:{src:i("8999")}}),t._v(" 豫公网安备： "),n("a",{staticStyle:{"text-decoration":"none",color:"rgba(82,82,97,1)"},attrs:{href:"javascript:void(0);"}},[t._v(" 44030402001783号")]),t._v(" Copyright 2016 开封文化产权交易所 | "),n("a",{attrs:{href:"http://www.beian.miit.gov.cn/",target:"_blank"}},[t._v("豫ICP备11099274号")])])])],1)],1)},x=[],y={name:"LegalInfo"},k=y,C=Object(m["a"])(k,b,x,!1,null,"6d5eefb9",null),I=C.exports,S=i("c8c1"),z={name:"Frame",components:{LegalInfo:I,Footer:_},data:function(){return{warehouseItems:S["e"],browseItems:S["b"],auctionItems:S["a"],childDeptItems:S["c"],newsItems:S["d"],floatingOptions:[{icon:"mdi-open-in-app",text:"我要展览展示",path:"/manage/editor"},{icon:"mdi-gavel",text:"我要拍卖",path:"/manage/editor"},{icon:"mdi-bank",text:"我要保税仓储",path:"/manage/editor"},{icon:"mdi-account",text:"鉴证登记托管",path:"/manage/editor"}],selected:0}},methods:{goTo:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(void 0===t.id){i.next=10;break}if(n=t.id,null!==e.$store.state.userObj){i.next=7;break}return i.next=5,e.$router.push("/view/static/"+n);case 5:return e.$router.go(0),i.abrupt("return");case 7:return i.next=9,e.$router.push("/view/static/"+n);case 9:e.$router.go(0);case 10:if(void 0===t.path){i.next=14;break}return i.next=13,e.$router.push(t.path);case 13:e.$router.go(0);case 14:case"end":return i.stop()}}),i)})))()}}},T=z,j=(i("564d"),Object(m["a"])(T,n,a,!1,null,"021a1a6a",null));e["a"]=j.exports},c780:function(t,e,i){t.exports=i.p+"img/logo.d6029038.png"},c8c1:function(t,e,i){"use strict";i.d(e,"e",(function(){return n})),i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return r}));var n=[{title:"保税艺术品介绍",icon:"mdi-artstation",path:"/list/TAX_FREE"},{title:"仓储区介绍",icon:"mdi-library",id:2},{title:"海关监管",icon:"mdi-earth",id:3}],a=[{title:"书画展",icon:"mdi-camera-burst",path:"/category/EXHIBITION/PAINTING"},{title:"瓷器展",icon:"mdi-flask-empty",path:"/category/EXHIBITION/PORCELAIN"},{title:"杂项展",icon:"mdi-view-parallel",path:"/category/EXHIBITION/MISC"},{title:"展讯介绍",icon:"mdi-information-variant",path:"/exhibition/info"}],s=[{title:"春秋",icon:"mdi-leaf-maple",path:"/category/AUCTION/SPRING_AUTUMN"},{title:"望朔",icon:"mdi-eye-outline",path:"/category/AUCTION/WANG_SU"},{title:"网拍",icon:"mdi-web",path:"/category/AUCTION/ONLINE_AUCTION"},{title:"拍卖厅介绍",icon:"mdi-information-variant",id:5}],o=[{title:"艺术银行金融服务",icon:"mdi-bank",id:6},{title:"文物艺术品服务中心",icon:"mdi-web",id:7},{title:"离境退税店与跨境电商",icon:"mdi-web",id:8},{title:"艺术品托管平台",icon:"mdi-web",id:9}],r=[{title:"活动",icon:"mdi-web",id:6,path:"/list/ACTIVITY"},{title:"政策",icon:"mdi-web",id:7,path:"/list/POLICY"},{title:"要闻",icon:"mdi-web",id:8,path:"/list/NEWS"},{title:"公告",icon:"mdi-web",id:9,path:"/list/ANNOUNCE"}]}}]);
//# sourceMappingURL=chunk-25bcc3ba.8fd0aa29.js.map