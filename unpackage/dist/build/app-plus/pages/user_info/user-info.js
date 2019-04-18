
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"list-item-heigher { height: 80px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"left { -webkit-box-flex: 1; -webkit-flex: 1 1 30%; -ms-flex: 1 1 30%; flex: 1 1 30%; font-size: 17px; color: #DE533A; }\n.",[1],"right { -webkit-box-flex: 1; -webkit-flex: 1 1 70%; -ms-flex: 1 1 70%; flex: 1 1 70%; font-size: 17px; }\n.",[1],"right1{ -webkit-box-flex: 1; -webkit-flex: 1 1 30%; -ms-flex: 1 1 30%; flex: 1 1 30%; font-size: 17px; }\n.",[1],"green-btn{ background: #DE533A; color:white ; border-color:#B4B4B4; }\n",],undefined,{path:"./pages/user_info/user-info.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/user_info/user-info.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      