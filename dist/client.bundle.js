!function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(l&&l(e);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={0:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([13,1]),n()}({13:function(t,e,n){"use strict";n.r(e);var r=n(0),o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._v("\n    头部 －－－－－－ 头部\n    "),e("br"),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("bar")]),this._v(" "),e("router-link",{attrs:{to:"/foo"}},[this._v("foo")]),this._v(" "),e("router-view")],1)};o._withStripped=!0;var a={components:{},metaInfo:{title:"baijiahulian"}},i=n(1),s=Object(i.a)(a,o,[],!1,null,null,null);s.options.__file="src/App.vue";var u=s.exports,c=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"red",on:{click:this.show}},[this._v("\n    bar components\n    "+this._s(this.$store.state.username)+"\n")])};c._withStripped=!0;var l={created:function(){console.log("created")},asyncData:function(t){return t.store.dispatch("set_username")},mounted:function(){var t=this;setTimeout(function(){t.$bus.$emit("dinner","晚餐不吃了")},2e3),this.$bus.$on("dinner",function(t){console.log(t)}),this.$store.dispatch("set_username")},methods:{show:function(){alert(1e3)}}},p=(n(7),Object(i.a)(l,c,[],!1,null,"2aa73eda",null));p.options.__file="src/components/Bar.vue";var f=p.exports,d=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    foo components\n")])};d._withStripped=!0;var v={metaInfo:{title:"foo"}},h=Object(i.a)(v,d,[],!1,null,null,null);h.options.__file="src/components/Foo.vue";var _=h.exports,m=n(4),b=n(6),w=n.n(b);r.a.use(w.a),r.a.use(m.a);var y=n(5);r.a.use(y.a);r.a.prototype.$bus=new r.a;var g,j;(g=new m.a({mode:"history",routes:[{path:"/",component:f},{path:"/foo",component:_}]}),j=function(){var t=new y.a.Store({state:{username:"jw"},mutations:{set_username:function(t){t.username="zfpx"}},actions:{set_username:function(t){var e=t.commit;return new Promise(function(t,n){setTimeout(function(){e("set_username"),t()},1e3)})}}});return"undefined"!=typeof window&&window.__INITIAL_STATE__&&t.replaceState(window.__INITIAL_STATE__),t}(),{app:new r.a({router:g,store:j,render:function(t){return t(u)}}),router:g,store:j}).app.$mount("#app")},3:function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(14).default)("d1beab98",r,!1,{})},7:function(t,e,n){"use strict";var r=n(3);n.n(r).a},8:function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"\n.red[data-v-2aa73eda]{\n    background: red\n}\n",""])}});