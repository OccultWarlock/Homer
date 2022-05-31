(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-190df574"],{"154c":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("Generic",{attrs:{item:t.item},scopedSlots:t._u([{key:"indicator",fn:function(){return[r("div",{staticClass:"notifs"},[t.activity>0?r("strong",{staticClass:"notif activity",attrs:{title:"Activity"}},[t._v(" "+t._s(t.activity)+" ")]):t._e(),t.warnings>0?r("strong",{staticClass:"notif warnings",attrs:{title:"Warning"}},[t._v(" "+t._s(t.warnings)+" ")]):t._e(),t.errors>0?r("strong",{staticClass:"notif errors",attrs:{title:"Error"}},[t._v(" "+t._s(t.errors)+" ")]):t._e(),t.serverError?r("strong",{staticClass:"notif errors",attrs:{title:"Connection error to Sonarr API, check url and apikey in config.yml"}},[t._v(" ? ")]):t._e()])]},proxy:!0}])})},i=[],s=(r("99af"),r("c55c")),o=r("fd6b"),a="/api/v3",c="/api",u={name:"Sonarr",mixins:[s["a"]],props:{item:Object},components:{Generic:o["default"]},computed:{apiPath:function(){return this.item.legacyApi?c:a}},data:function(){return{activity:null,warnings:null,errors:null,serverError:!1}},created:function(){this.fetchConfig()},methods:{fetchConfig:function(){var t=this;this.fetch("".concat(this.apiPath,"/health?apikey=").concat(this.item.apikey)).then((function(n){t.warnings=0,t.errors=0;for(var r=0;r<n.length;r++)"warning"==n[r].type?t.warnings++:"error"==n[r].type&&t.errors++})).catch((function(n){console.error(n),t.serverError=!0})),this.fetch("".concat(this.apiPath,"/queue?apikey=").concat(this.item.apikey)).then((function(n){if(t.activity=0,t.item.legacyApi)for(var r=0;r<n.length;r++)n[r].series&&t.activity++;else t.activity=n.totalRecords})).catch((function(n){console.error(n),t.serverError=!0}))}}},f=u,h=(r("607c"),r("2877")),l=Object(h["a"])(f,e,i,!1,null,"7f49e0b4",null);n["default"]=l.exports},"25f0":function(t,n,r){"use strict";var e=r("5e77").PROPER,i=r("cb2d"),s=r("825a"),o=r("577e"),a=r("d039"),c=r("90d8"),u="toString",f=RegExp.prototype,h=f[u],l=a((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),d=e&&h.name!=u;(l||d)&&i(RegExp.prototype,u,(function(){var t=s(this),n=o(t.source),r=o(c(t));return"/"+n+"/"+r}),{unsafe:!0})},"2ca0":function(t,n,r){"use strict";var e=r("23e7"),i=r("e330"),s=r("06cf").f,o=r("50c4"),a=r("577e"),c=r("5a34"),u=r("1d80"),f=r("ab13"),h=r("c430"),l=i("".startsWith),d=i("".slice),p=Math.min,v=f("startsWith"),g=!h&&!v&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();e({target:"String",proto:!0,forced:!g&&!v},{startsWith:function(t){var n=a(u(this));c(t);var r=o(p(arguments.length>1?arguments[1]:void 0,n.length)),e=a(t);return l?l(n,e,r):d(n,r,r+e.length)===e}})},"607c":function(t,n,r){"use strict";r("9dda")},"8a79":function(t,n,r){"use strict";var e=r("23e7"),i=r("e330"),s=r("06cf").f,o=r("50c4"),a=r("577e"),c=r("5a34"),u=r("1d80"),f=r("ab13"),h=r("c430"),l=i("".endsWith),d=i("".slice),p=Math.min,v=f("endsWith"),g=!h&&!v&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();e({target:"String",proto:!0,forced:!g&&!v},{endsWith:function(t){var n=a(u(this));c(t);var r=arguments.length>1?arguments[1]:void 0,e=n.length,i=void 0===r?e:p(o(r),e),s=a(t);return l?l(n,s,i):d(n,i-s.length,i)===s}})},"90d8":function(t,n,r){var e=r("c65b"),i=r("1a2d"),s=r("3a9b"),o=r("ad6d"),a=RegExp.prototype;t.exports=function(t){var n=t.flags;return void 0!==n||"flags"in a||i(t,"flags")||!s(a,t)?n:e(o,t)}},"9dda":function(t,n,r){},c55c:function(t,n,r){"use strict";r("8a79"),r("fb6a"),r("d3b7"),r("25f0"),r("2ca0"),r("99af");n["a"]={props:{proxy:Object},created:function(){this.endpoint=this.item.endpoint||this.item.url,this.endpoint.endsWith("/")&&(this.endpoint=this.endpoint.slice(0,-1))},methods:{fetch:function(t){function n(n,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){var r,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i={};null!==(r=this.proxy)&&void 0!==r&&r.useCredentials&&(i.credentials="include"),void 0!==this.item.useCredentials&&(i.credentials=!0===this.item.useCredentials?"include":"omit"),i=Object.assign(i,n),t.startsWith("/")&&(t=t.slice(1));var s=this.endpoint;return t&&(s="".concat(this.endpoint,"/").concat(t)),fetch(s,i).then((function(t){if(!t.ok)throw new Error("Not 2xx response");return e?t.json():t}))}))}}}}]);
//# sourceMappingURL=chunk-190df574.55e31a21.js.map