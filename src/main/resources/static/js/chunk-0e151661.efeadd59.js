(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e151661"],{"05fe":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("96cf");var r=n("1da1"),a=n("d4ec"),i=n("bee2"),u=n("8d8d"),s=function(){function e(){Object(a["a"])(this,e)}return Object(i["a"])(e,null,[{key:"postEntry",value:function(e,t){return u["a"].post("/static/page/"+t,e,{headers:{"Content-Type":"text/plain"}})}},{key:"getStaticPage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].get("/static/page/"+t,{responseType:"text"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getStaticPageDto",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].get("/static/page/"+t+"/dto",{});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"delStaticPage",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].delete("/static/page/"+t,{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getStaticPageDtoList",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].get("/static/page/list",{});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"updateEntry",value:function(e,t){return u["a"].put("/static/page/"+t,e,{headers:{"Content-Type":"text/plain"}})}},{key:"publish",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].put("/static/page/"+t+"/publish");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}()},"2c2f":function(e,t,n){},"3d24":function(e,t,n){"use strict";var r=n("2c2f"),a=n.n(r);a.a},fdfe:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Frame",[n("v-container",[n("v-row",{staticClass:"d-flex justify-center"},[n("v-col",{attrs:{md:"10",lg:"8",sm:"11"}},[n("v-card",[n("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{indeterminate:"",color:"cyan"}}),n("v-card-title",{staticClass:"headline text-center"},[e._v(e._s(null!==e.obj?e.obj.title:""))]),n("v-divider",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]}),n("v-container",{staticStyle:{"background-color":"white"}},[n("v-row",[n("v-col",[n("div",{key:e.content,ref:"editor",staticStyle:{height:"100%"}})])],1)],1)],1)],1)],1)],1)],1)],1)},a=[],i=(n("96cf"),n("1da1")),u=(n("2966"),n("9339")),s=n.n(u),c=n("c15e"),o=n("05fe"),l={name:"StaticViewer",components:{Frame:c["a"]},props:{id:String},data:function(){return{content:void 0,obj:null,loading:!1}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,o["a"].getStaticPageDto(e.id);case 3:return e.obj=t.sent,!0!==e.obj.published&&e.$router.push("/"),t.t0=JSON,t.next=8,o["a"].getStaticPage(e.id);case 8:t.t1=t.sent.data,e.content=t.t0.stringify.call(t.t0,t.t1),e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},updated:function(){var e=s.a.import("formats/font");e.whitelist=["SimSun","SimHei","Microsoft-YaHei","KaiTi","FangSong","Arial","Times-New-Roman","sans-serif"],s.a.register(e,!0),this.quill=new s.a(this.$refs["editor"],{scrollingContainer:this.$refs["editor"],theme:"bubble",modules:{toolbar:!1},readOnly:!0}),this.quill.setContents(JSON.parse(this.content))},methods:{save:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("update",JSON.stringify(this.quill.getContents()));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},p=l,d=(n("3d24"),n("2877")),f=Object(d["a"])(p,r,a,!1,null,"4e618612",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-0e151661.efeadd59.js.map