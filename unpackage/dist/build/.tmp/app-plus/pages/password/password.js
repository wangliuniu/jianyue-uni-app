(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/password/password"],{"1bc7":function(t,e,n){"use strict";n.r(e);var a=n("74f0"),o=n("2590");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("3f71");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},2590:function(t,e,n){"use strict";n.r(e);var a=n("f89d"),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},"3f71":function(t,e,n){"use strict";var a=n("5c77"),o=n.n(a);o.a},"5c77":function(t,e,n){},"74f0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"uni-input",attrs:{password:"",type:"text",placeholder:"输入密码",required:"required",eventid:"31e67a31-0"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{staticClass:"green-btn",attrs:{eventid:"31e67a31-1"},on:{tap:function(e){t.signUp(t.userDTO)}}},[t._v("注册")])],1)},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},ba06:function(t,e,n){"use strict";n("175f");var a=s(n("b0ce")),o=s(n("1bc7"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},f89d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{userDTO:{mobile:"",password:""}}},onLoad:function(t){console.log(t.mobile),this.mobile=t.mobile},methods:{signUp:function(e){var n=this;t.request({url:this.apiServer+"/user/sign_up",method:"POST",header:{"content-type":"application/json"},data:{mobile:n.mobile,password:n.password},success:function(e){0===e.data.code?(t.showModal({title:"提示",content:"注册成功"}),t.navigateTo({url:"../signin/signin"})):t.showModal({title:"提示",content:e.data.msg})}})}}};e.default=n}).call(this,n("649d")["default"])}},[["ba06","common/runtime","common/vendor"]]]);