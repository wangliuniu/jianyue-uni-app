(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/write/write"],{"0e2c":function(t,e,a){"use strict";a.r(e);var n=a("ff73"),i=a("1c4a");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("616a");var s=a("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"0fe3":function(t,e,a){},"1c4a":function(t,e,a){"use strict";a.r(e);var n=a("7217"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"616a":function(t,e,a){"use strict";var n=a("0fe3"),i=a.n(n);i.a},7217:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"",content:"",userId:t.getStorageSync("login_key").userId,imgs:[]}},onLoad:function(){t.setNavigationBarTitle({title:"写文章"})},methods:{chooseImg:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(a){console.log(JSON.stringify(a.tempFilePaths)),t.uploadFile({url:e.apiServer+"/avatar/upload",filePath:a.tempFilePaths[0],name:"file",success:function(t){console.log(t.data),e.imgs.push(t.data),e.content+='<img src="'+t.data+'" width = "100%"/>'}})}})},postArticle:function(){var e=this;t.request({url:this.apiServer+"/article/add",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{uId:this.userId,title:this.title,content:"<div>"+this.content+"</div>"},success:function(a){if(0===a.data.code){var n=a.data.data;console.log(n),t.showToast({title:"发布成功"}),t.request({url:"http://192.168.43.99:8080/api/img/add",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{aId:n,imgs:JSON.stringify(e.imgs)},success:function(t){0===t.data.code&&console.log("文章图片地址已写入数据库")}}),t.switchTab({url:"../index/index"})}}})}}};e.default=a}).call(this,a("649d")["default"])},db67:function(t,e,a){"use strict";a("175f");var n=o(a("b0ce")),i=o(a("0e2c"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},ff73:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"container"},[a("view",{staticClass:"top"},[a("view",{staticClass:"head"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"biaoti",attrs:{type:"text",placeholder:"请输入标题",eventid:"22af4dd1-0"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("button",{staticClass:"green-btn",attrs:{eventid:"22af4dd1-1"},on:{tap:t.postArticle}},[t._v("发布")])],1),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"content",attrs:{placeholder:"请输入正文",eventid:"22af4dd1-2"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),a("button",{staticClass:"add-btn",attrs:{eventid:"22af4dd1-3"},on:{tap:t.chooseImg}},[t._v("+  图片")]),a("text",{staticClass:"yulan"},[t._v("效果预览")]),a("view",{staticClass:"grace-text"},[a("rich-text",{attrs:{nodes:t.content,bindtap:"tap",mpcomid:"22af4dd1-0"}})],1)],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})}},[["db67","common/runtime","common/vendor"]]]);