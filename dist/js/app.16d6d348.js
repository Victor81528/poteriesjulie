(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1defbccb"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"08dd4117"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/poteriesjulie/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";n("2dad")},"2dad":function(t,e,n){},"378a":function(t,e,n){"use strict";n("e12f")},"39b2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view"),n("Footer")],1)},i=[],o=(n("39b2"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:{"nav-open":t.navShow.isOpen},style:{color:t.navTextColor.color},on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"nav-logo-burger"},[n("div",{staticClass:"nav-logo"},[n("router-link",{attrs:{to:"/"},nativeOn:{click:function(e){return t.closeMenu(e)}}},[n("p",[t._v("Julie")])])],1),n("a",{staticClass:"nav-burger",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-bars",on:{click:function(e){return e.preventDefault(),t.openMenu(e)}}}),n("i",{staticClass:"fas fa-times",on:{click:function(e){return e.preventDefault(),t.closeMenu(e)}}})])]),n("div",{staticClass:"nav-link"},[n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){return t.closeMenu(e)}}},[t._v("作者介紹")]),n("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){return t.closeMenu(e)}}},[t._v("設計主張")]),n("router-link",{attrs:{to:"/kiln"},nativeOn:{click:function(e){return t.closeMenu(e)}}},[t._v("關於柴燒")])],1)])}),s=[],c=n("5530"),u=n("2f62"),l={name:"Nav",data:function(){return{}},methods:{openMenu:function(){this.$store.commit("changeNavShow",!0)},closeMenu:function(){this.$store.commit("changeNavShow",!1),window.scrollTo(0,0)}},computed:Object(c["a"])({},Object(u["b"])(["navTextColor","navShow"]))},p=l,f=(n("378a"),n("2877")),d=Object(f["a"])(p,o,s,!1,null,null,null),v=d.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer-info"},[n("div",{staticClass:"fallow"},[n("h1",[t._v("關注我們")]),n("div",{staticClass:"footer-link"},[n("a",{attrs:{href:"https://www.facebook.com/victor81528",target:"blank"}},[n("i",{staticClass:"fab fa-facebook-square"})]),n("a",{attrs:{href:"https://www.instagram.com/victor.hong/",target:"blank"}},[n("i",{staticClass:"fab fa-instagram"})])])])]),n("div",{staticClass:"copyright"},[n("p",[t._v("Copyright © 2021 Alishan.")])])])}],b={name:"Footer"},k=b,g=(n("69e2"),Object(f["a"])(k,h,m,!1,null,null,null)),w=g.exports,y={components:{Nav:v,Footer:w}},C=y,_=(n("5c0b"),Object(f["a"])(C,r,i,!1,null,null,null)),O=_.exports,S=(n("d3b7"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{attrs:{id:"banner"}},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[n("swiper-slide",[n("div",{staticClass:"slider1"})]),n("swiper-slide",[n("div",{staticClass:"slider2"})]),n("swiper-slide",[n("div",{staticClass:"slider3"})]),n("swiper-slide",[n("div",{staticClass:"slider4"})]),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),t._m(0)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"style"}},[n("h1",[t._v("設計風格")]),n("div",{staticClass:"style-content"},[n("div",{staticClass:"style-content-zh"},[n("p",[t._v("皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡")]),n("br"),n("p",[t._v("皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡，皮卡皮卡皮卡皮卡，皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡皮卡。")]),n("br")]),n("div",{staticClass:"style-content-en"},[n("p",[t._v("Pika pika pika pika pika pika pika pika pika pika pika pika ")]),n("br"),n("p",[t._v("Pika pika pika pika pika pika pika pika pika pika pika pika, pika pika pika pika, pika pika pika pika pika pika pika pika pika pika pika pika pika.")])])])])}],E=n("7212"),T=n.n(E),M={name:"Home",components:{Swiper:E["Swiper"],SwiperSlide:E["SwiperSlide"]},data:function(){return{swiperOptions:{loop:!0,effect:"fade",spaceBetween:30,autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){this.$store.commit("changeColor","#f5f5f7")}},P=M,$=(n("21bb"),Object(f["a"])(P,j,x,!1,null,null,null)),N=$.exports;a["default"].use(S["a"]);var A=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/kiln",name:"Kiln",component:function(){return n.e("about").then(n.bind(null,"d5d6"))}}],B=new S["a"]({routes:A}),D=B;a["default"].use(u["a"]);var L=new u["a"].Store({state:{navTextColor:{color:""},navShow:{isOpen:!1}},mutations:{changeColor:function(t,e){t.navTextColor.color=e},changeNavShow:function(t,e){t.navShow.isOpen=e}},actions:{}});n("a7a3");a["default"].config.productionTip=!1,new a["default"]({router:D,store:L,render:function(t){return t(O)}}).$mount("#app"),a["default"].use(T.a)},"5c0b":function(t,e,n){"use strict";n("9c0c")},"69e2":function(t,e,n){"use strict";n("c4e8")},"9c0c":function(t,e,n){},c4e8:function(t,e,n){},e12f:function(t,e,n){}});
//# sourceMappingURL=app.16d6d348.js.map