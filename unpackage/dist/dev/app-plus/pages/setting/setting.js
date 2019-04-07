
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"btn{ background-color: #FB6152; color: #FFFFFF; }\n",],undefined,{path:"./pages/setting/setting.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/setting/setting.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      