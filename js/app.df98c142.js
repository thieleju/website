(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],p=0,v=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/page/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},s=i,l=r("2877"),c=r("6544"),u=r.n(c),p=r("7496"),v=r("f6c4"),d=Object(l["a"])(s,n,o,!1,null,null,null),f=d.exports;u()(d,{VApp:p["a"],VMain:v["a"]});var m=r("8c4f"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("h1",[t._v("Hello, this is the start of this page")]),r("v-btn",{on:{click:function(e){return t.routeToName("Home")}}},[t._v("Go to Home")])],1)},b=[],g={name:"Home",components:{},methods:{routeToName:function(t){this.$router.push({name:t})}}},y=g,w=r("8336"),_=Object(l["a"])(y,h,b,!1,null,null,null),V=_.exports;u()(_,{VApp:p["a"],VBtn:w["a"]});var x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-system-bar",{attrs:{app:""}},[r("v-spacer"),r("v-icon",[t._v("mdi-square")]),r("v-icon",[t._v("mdi-circle")]),r("v-icon",[t._v("mdi-triangle")])],1),r("v-app-bar",{attrs:{app:"","clipped-right":"",flat:"",height:"72"}},[r("v-spacer"),r("v-responsive",{attrs:{"max-width":"156"}},[r("v-text-field",{attrs:{dense:"",flat:"","hide-details":"",rounded:"","solo-inverted":""}})],1)],1),r("v-navigation-drawer",{attrs:{app:"",width:"300"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-navigation-drawer",{attrs:{absolute:"",color:"grey lighten-3","mini-variant":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-avatar",{staticClass:"d-block text-center mx-auto mt-4",attrs:{color:"grey darken-1",size:"36"}}),r("v-divider",{staticClass:"mx-3 my-5"}),t._l(6,(function(t){return r("v-avatar",{key:t,staticClass:"d-block text-center mx-auto mb-9",attrs:{color:"grey lighten-1",size:"28"}})}))],2),r("v-sheet",{attrs:{color:"grey lighten-5",height:"128",width:"100%"}}),r("v-list",{staticClass:"pl-14",attrs:{shaped:""}},t._l(5,(function(e){return r("v-list-item",{key:e,attrs:{link:""}},[r("v-list-item-content",[r("v-list-item-title",[t._v("Item "+t._s(e))])],1)],1)})),1)],1),r("v-navigation-drawer",{attrs:{app:"",clipped:"",right:""}},[r("v-list",t._l(5,(function(e){return r("v-list-item",{key:e,attrs:{link:""}},[r("v-list-item-content",[r("v-list-item-title",[t._v("Item "+t._s(e))])],1)],1)})),1)],1),r("v-main",[r("v-btn",{on:{click:function(e){return t.routeToName("Start")}}},[t._v("Go to Start")])],1),r("v-footer",{attrs:{app:"",color:"transparent",height:"72",inset:""}},[r("v-text-field",{attrs:{"background-color":"grey lighten-1",dense:"",flat:"","hide-details":"",rounded:"",solo:""}})],1)],1)},k=[],O={name:"Home",components:{},methods:{routeToName:function(t){this.$router.push({name:t})}}},j=O,S=r("40dc"),T=r("8212"),P=r("ce7e"),A=r("553a"),H=r("132d"),I=r("8860"),M=r("da13"),$=r("5d23"),C=r("f774"),N=r("6b53"),B=r("8dd9"),L=r("2fa4"),E=r("afd9"),z=r("8654"),D=Object(l["a"])(j,x,k,!1,null,null,null),F=D.exports;u()(D,{VApp:p["a"],VAppBar:S["a"],VAvatar:T["a"],VBtn:w["a"],VDivider:P["a"],VFooter:A["a"],VIcon:H["a"],VList:I["a"],VListItem:M["a"],VListItemContent:$["a"],VListItemTitle:$["b"],VMain:v["a"],VNavigationDrawer:C["a"],VResponsive:N["a"],VSheet:B["a"],VSpacer:L["a"],VSystemBar:E["a"],VTextField:z["a"]}),a["a"].use(m["a"]);var G=[{path:"/",name:"Start",component:V},{path:"/home",name:"Home",component:F}],J=new m["a"]({mode:"history",base:"/page/",routes:G}),q=J,R=r("2f62");a["a"].use(R["a"]);var K=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=r("f309");a["a"].use(Q["a"]);var U=new Q["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:q,store:K,vuetify:U,render:function(t){return t(f)}}).$mount("#app")}});
//# sourceMappingURL=app.df98c142.js.map