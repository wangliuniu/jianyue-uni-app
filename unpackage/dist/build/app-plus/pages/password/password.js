
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"_input { height: 50px; border-bottom: 1px solid #eee; margin-bottom: 5px; }\n.",[1],"green-btn{ background: #DE533A; color:white ; border-color:#B4B4B4; }\n",],undefined,{path:"./pages/password/password.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/password/password.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      