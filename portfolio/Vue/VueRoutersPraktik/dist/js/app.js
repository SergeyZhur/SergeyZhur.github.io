(function(t){function e(e){for(var r,o,i=e[0],l=e[1],s=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("header",[n("div",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-content"},[n("div",{staticClass:"logo"},[t._v("Vue-CLI")]),n("ul",{staticClass:"navbar-list"},t._l(t.links,(function(e){return n("li",{key:e.title,staticClass:"navbar-item"},[n("router-link",{staticClass:"navbar-link",attrs:{title:e.title,to:e.url}},[t._v(t._s(e.title))])],1)})),0)])])])]),n("router-view")],1)},c=[],o={data:function(){return{links:[{title:"Home",url:"/"},{title:"Exapmle",url:"/exapmle"}]}}},i=o,l=(n("5c0b"),n("2877")),s=Object(l["a"])(i,a,c,!1,null,null,null),u=s.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("h1",[t._v("HOME Router")])])])])}],d={},b=Object(l["a"])(d,f,v,!1,null,null,null),h=b.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("h1",[t._v("ERROR 404 ")]),n("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Return to home page")])],1)])])},_=[],w=(n("dac1"),{}),x=Object(l["a"])(w,m,_,!1,null,"345ce0b9",null),y=x.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("h1",[t._v("Example Router")])])])])}],g={},j=Object(l["a"])(g,O,C,!1,null,null,null),k=j.exports;r["a"].use(p["a"]);var E=new p["a"]({routes:[{path:"/",name:"home",component:h},{path:"/exapmle",name:"exapmle",component:k},{path:"*",name:"error404",component:y}]});n("c1c3");r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"69c4":function(t,e,n){},"9c0c":function(t,e,n){},c1c3:function(t,e,n){},dac1:function(t,e,n){"use strict";var r=n("69c4"),a=n.n(r);a.a}});