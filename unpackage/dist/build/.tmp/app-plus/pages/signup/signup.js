(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/signup/signup"],{"1ec8":function(e,t,i){"use strict";i("175f");var n=a(i("b0ce")),o=a(i("7daa"));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(o.default))},"6f35":function(e,t,i){"use strict";var n=i("a366"),o=i.n(n);o.a},"7daa":function(e,t,i){"use strict";i.r(t);var n=i("8700"),o=i("c417");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("6f35");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},8446:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{mobile:"",verifyCode:"",timer:20,show:!1,title:"获取验证码"}},onLoad:function(){e.setNavigationBarTitle({title:"注册"})},methods:{getVerifyCode:function(){var t=this;e.request({url:this.apiServer+"/user/verify",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{mobile:t.mobile},success:function(i){if(0===i.data.code){e.showToast({title:"验证码已发送"}),t.disabled=!0,console.log(t.disabled);var n=setInterval(function(){if(t.show=!0,t.timer--,t.title=t.timer+"s后再试",0==t.timer)return clearInterval(n),t.timer=20,t.show=!1,void(t.title="发送验证码")},1e3)}else e.showModal({title:"提示",content:i.data.msg})}})},checkCode:function(){var t=this;console.log(t.verifyCode),e.request({url:this.apiServer+"/user/check",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{mobile:t.mobile,verifyCode:t.verifyCode},success:function(i){console.log(i.data),0===i.data.code?e.navigateTo({url:"../password/password?mobile="+t.mobile}):e.showModal({title:"提示",content:i.data.msg})}})}}};t.default=i}).call(this,i("649d")["default"])},8700:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"container"},[i("view",{staticClass:"sign-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"uni-input left",attrs:{type:"number",placeholder:"输入手机号",required:"required",eventid:"16a7f191-0"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),i("button",{staticClass:"green-btn small-btn right",attrs:{disabled:e.show,eventid:"16a7f191-1"},on:{tap:e.getVerifyCode}},[e._v(e._s(e.title))])],1),i("input",{directives:[{name:"model",rawName:"v-model",value:e.verifyCode,expression:"verifyCode"}],staticClass:"uni-input",attrs:{type:"number",placeholder:"输入验证码",required:"required",eventid:"16a7f191-2"},domProps:{value:e.verifyCode},on:{input:function(t){t.target.composing||(e.verifyCode=t.target.value)}}}),i("button",{staticClass:"green-btn",attrs:{eventid:"16a7f191-3"},on:{tap:e.checkCode}},[e._v("下一步")])],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},a366:function(e,t,i){},c417:function(e,t,i){"use strict";i.r(t);var n=i("8446"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a}},[["1ec8","common/runtime","common/vendor"]]]);