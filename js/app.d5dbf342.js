(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],u=0,h=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},r={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-e742308a":"2ada028e"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-e742308a":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-e742308a":"438e33f1"}[e]+".css",r=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){l=h[o],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[e],d.parentNode.removeChild(d),n(s)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var h=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",h.name="ChunkLoadError",h.type=a,h.request=i,n[1](h)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"113b":function(e,t,n){"use strict";n("9494")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"appClass",attrs:{app:""}},[n("v-app-bar",{attrs:{app:"",dark:"",flat:""}},[n("v-tabs",{staticClass:"ml-n9",attrs:{centered:""},model:{value:e.active_tab,callback:function(t){e.active_tab=t},expression:"active_tab"}},e._l(e.topApps,(function(t,a){return n("v-tab",{key:a,on:{click:function(n){return e.routeTo(t.route)}}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),n("GithubCorner",{attrs:{url:"https://me.node5.de",flipOnHover:"",cornerColor:"#12161B",size:62}}),n("v-main",{attrs:{color:"primary"}},[n("particlesJS",{staticStyle:{position:"absolute",width:"100%",height:"100%"}}),n("v-container",{staticClass:"bringToFront",attrs:{fluid:""}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"routerViewFill"})],1)],1)],1),n("v-footer",{staticClass:"py-1",attrs:{color:"grey darken-4"}},[n("span",{staticClass:"mr-auto overline"},[e._v("Node 5 ©2022")]),n("v-spacer"),n("a",{staticClass:"mr-auto overline",on:{click:e.showDSGVO}},[e._v("Datenschutzerklärung")]),e._v("   |   "),n("a",{staticClass:"mr-auto overline",on:{click:e.showImpressum}},[e._v("Impressum")])],1),n("v-overlay",{attrs:{value:e.showOverlay}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},r=[],s=(n("c740"),n("b0c0"),n("bc3a")),o=n.n(s),c=n("3d20"),l=n.n(c),u=n("074a"),h=n.n(u),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"particles-js"}})},p=[],f={name:"ParticlesJS",mounted:function(){var e=this;n("572f"),this.$nextTick((function(){e.initParticlesJS()}))},methods:{initParticlesJS:function(){particlesJS("particles-js",{particles:{number:{value:160,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"connect",parallax:{enable:!0,force:1,smooth:10}},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},y=f,v=(n("113b"),n("2877")),m=Object(v["a"])(y,d,p,!1,null,null,null),b=m.exports,g={name:"App",components:{GithubCorner:h.a,particlesJS:b},data:function(){return{showOverlay:null,impressum:null,dsgvo:null,active_tab:0,topApps:[{name:"Home",route:"home"},{name:"About",route:"about"}],apiUnavailableText:"Sorry, the API is currently unavailable"}},mounted:function(){var e=this;this.active_tab=this.topApps.findIndex((function(t){return t.route===e.$route.name}))},methods:{routeTo:function(e){this.$router.push({name:e}).catch((function(){}))},showImpressum:function(){var e=this;this.impressum?this.showSwal(this.impressum):o.a.get("/v1/impressum").then((function(t){e.impressum=t.data,e.showSwal(t.data)})).catch((function(){return e.showSwal(e.apiUnavailableText)}))},showDSGVO:function(){var e=this;this.dsgvo?this.showSwal(this.dsgvo):o.a.get("/v1/dsgvo").then((function(t){e.dsgvo=t.data,e.showSwal(t.data)})).catch((function(){return e.showSwal(e.apiUnavailableText)}))},showSwal:function(e){l.a.fire({width:800,html:e,showCloseButton:!0,showCancelButton:!1,focusConfirm:!1,showClass:{popup:"impressum"},confirmButtonText:"Close"})}}},w=g,k=(n("5c0b"),n("6544")),x=n.n(k),_=n("7496"),C=n("40dc"),O=n("a523"),S=n("553a"),P=n("f6c4"),j=n("a797"),A=n("490a"),T=n("2fa4"),E=n("71a3"),B=n("fe57"),V=Object(v["a"])(w,i,r,!1,null,null,null),I=V.exports;x()(V,{VApp:_["a"],VAppBar:C["a"],VContainer:O["a"],VFooter:S["a"],VMain:P["a"],VOverlay:j["a"],VProgressCircular:A["a"],VSpacer:T["a"],VTab:E["a"],VTabs:B["a"]});n("d3b7"),n("3ca3"),n("ddb0");var D=n("8c4f"),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.showCanvas?n("gameCanvas"):n("vue-typer",{staticClass:"text-center",attrs:{text:e.textArray,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":100,"type-delay":200,"pre-erase-delay":1e3,"erase-delay":1e3,"erase-style":"clear","erase-on-complete":!0,"caret-animation":"blink"}})],1)},N=[],L=n("e956"),G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{staticClass:"canvas",attrs:{id:"pixi"}})])}],R=(n("159b"),n("7db0"),n("25f0"),n("7aaa")),$=n("b66e"),z=n("2909"),J=n("d4ec"),U=n("bee2"),H=n("ade3"),q=function(){function e(t,n,a,i,r){var s;Object(J["a"])(this,e),Object(H["a"])(this,"id",""),Object(H["a"])(this,"name",""),Object(H["a"])(this,"color",""),Object(H["a"])(this,"radius",0),Object(H["a"])(this,"x",0),Object(H["a"])(this,"y",0),Object(H["a"])(this,"opacity",1),Object(H["a"])(this,"scene",null),Object(H["a"])(this,"alive",!0),Object(H["a"])(this,"container",null),Object(H["a"])(this,"playerGraphics",null),this.id=n,this.name=a,this.color=i,this.radius=r,this.scene=t,this.playerGraphics=(new R["c"]).lineStyle(0).beginFill(this.color,this.opacity).drawCircle(this.x,this.y,this.radius).endFill(),this.container=new R["b"],this.container.addChild(this.playerGraphics),(s=this.container).addChild.apply(s,Object(z["a"])(this.generateText(this.name))),this.container.interactive=!0;var o=this.generateRandomStartingPosition();this.container.position.x=o.x,this.container.position.y=o.y}return Object(U["a"])(e,[{key:"moveByVelocity",value:function(e,t){this.container.position=this.getPositionInBounds(this.container.position.x+e.x*t,this.container.position.y+e.y*t,this.playerGraphics.getBounds())}},{key:"getPositionInBounds",value:function(e,t,n){var a=0,i=0;return a=e<n.width-this.radius?n.width-this.radius:e>this.scene.width-n.width+this.radius?this.scene.width-n.width+this.radius:e,i=t<n.height-this.radius?n.height-this.radius:t>this.scene.height-n.height+this.radius?this.scene.height-n.height+this.radius:t,{x:a,y:i}}},{key:"generateText",value:function(e){var t=new R["e"]({fontFamily:"Arial",fontSize:16,fill:"white",stroke:"black",strokeThickness:1}),n=new R["d"](e,t);n.x=this.x-n.width/2,n.y=this.y-this.radius-1.5*n.height;var a=3,i=(new R["c"]).beginFill(0,.5).drawRect(n.x-a,n.y-a,n.width+2*a,n.height+2*a).endFill();return[n,i]}},{key:"getGraphics",value:function(){return this.container}},{key:"getID",value:function(){return this.id}},{key:"isAlive",value:function(){return this.alive}},{key:"generateRandomStartingPosition",value:function(){var e=25;return{x:this.getRandomNumberBetween(this.radius,this.scene.width-this.radius),y:this.getRandomNumberBetween(this.radius+e,this.scene.height-this.radius)}}},{key:"getRandomNumberBetween",value:function(e,t){return Math.floor(Math.random()*(t-e)+e)}}]),e}(),K={data:function(){return{app:null,keys:[],scene:{width:1080,height:720},allPlayers:[],allPlayerInstances:[],player:{alive:!0,id:"",name:null,color:3711909,radius:20,speed:4,velocity:{x:0,y:0}}}},created:function(){var e=this;document.body.addEventListener("keydown",(function(t){e.keys[t.key]=!0})),document.body.addEventListener("keyup",(function(t){e.keys[t.key]=!1}))},mounted:function(){this.initApplication(),this.initBorders(),this.player.id=this.generateID(),this.allPlayers.push({id:this.player.id,name:this.getNewRandomUserName(),color:this.player.color,radius:this.player.radius,speed:this.player.speed,velocity:this.player.velocity}),this.initPlayers()},sockets:{message:function(e){console.log(e)}},methods:{initPlayers:function(){var e=this;this.allPlayers.forEach((function(t){var n=new q(e.scene,t.id,t.name,t.color,t.radius);e.allPlayerInstances.push(n),e.app.stage.addChild(n.getGraphics())}))},updatePlayerPosition:function(e){var t=this,n=this.allPlayerInstances.find((function(e){return e.getID()==t.player.id}));n&&n.isAlive()&&(this.keys["w"]?this.player.velocity.y=-this.player.speed:this.keys["s"]?this.player.velocity.y=this.player.speed:this.player.velocity.y=0,this.keys["a"]?this.player.velocity.x=-this.player.speed:this.keys["d"]?this.player.velocity.x=this.player.speed:this.player.velocity.x=0,n.moveByVelocity(this.player.velocity,e))},gameLoop:function(e){this.updatePlayerPosition(e)},initApplication:function(){var e=this;this.app=new R["a"]({width:this.scene.width,height:this.scene.height,antialias:!0,autoDensity:!0,backgroundAlpha:0,view:document.getElementById("pixi")}),this.app.stage.interactive=!0,this.app.stage.hitArea=this.app.renderer.screen,this.app.ticker.add((function(t){return e.gameLoop(t)}))},initBorders:function(){var e=new R["c"];e.lineStyle(2),e.lineTo(0,0),e.lineTo(this.scene.width,0),e.lineTo(this.scene.width,this.scene.height),e.lineTo(0,this.scene.height),e.lineTo(0,0),this.app.stage.addChild(e)},getNewRandomUserName:function(){return Object($["b"])({dictionaries:[$["a"]],separator:" ",style:"capital"})},generateID:function(){return Math.random().toString(36).substr(2,15)}}},X=K,Y=(n("d6b5"),Object(v["a"])(X,G,M,!1,null,null,null)),Q=Y.exports,W={components:{VueTyper:L["VueTyper"],gameCanvas:Q},data:function(){return{textArray:["Hello!","Press SPACE to start!"],showCanvas:!1}},created:function(){var e=this;window.addEventListener("keydown",(function(t){"Space"==t.code&&(e.showCanvas=!0)}))},sockets:{sockets:{message:function(e){console.log(e)}}}},Z=W,ee=(n("638c"),Object(v["a"])(Z,F,N,!1,null,"f40947f2",null)),te=ee.exports;a["a"].use(D["a"]);var ne=[{path:"/",name:"home",component:te,meta:{title:"Home"}},{path:"/about",name:"about",component:function(){return n.e("chunk-e742308a").then(n.bind(null,"f820"))},meta:{title:"About"}},{path:"*",redirect:"/"}],ae=new D["a"]({mode:"history",base:"/",routes:ne});ae.afterEach((function(e){a["a"].nextTick((function(){document.title=e.meta.title+" - node5"}))}));var ie=ae,re=n("2f62");a["a"].use(re["a"]);var se=new re["a"].Store({state:{},mutations:{},actions:{},modules:{}}),oe=n("f309");a["a"].use(oe["a"]);var ce=new oe["a"]({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#38A3A5",secondary:"#0A1013",background:"#161618",background2:"#2D2D2D",accent:"#80ED99",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),le=n("130e"),ue=n("f87c"),he=n("daa8"),de=Object(he["a"])("https://websiteapi.node5.de",{path:"/socket.io",reconnectionDelayMax:1e4});o.a.defaults.baseURL="https://websiteapi.node5.de",a["a"].use(ue["a"],de,{store:se}),a["a"].use(le["a"],o.a),a["a"].config.productionTip=!1,new a["a"]({router:ie,store:se,vuetify:ce,render:function(e){return e(I)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"638c":function(e,t,n){"use strict";n("ce86")},9494:function(e,t,n){},"9c0c":function(e,t,n){},ce86:function(e,t,n){},d69c:function(e,t,n){},d6b5:function(e,t,n){"use strict";n("d69c")}});
//# sourceMappingURL=app.d5dbf342.js.map