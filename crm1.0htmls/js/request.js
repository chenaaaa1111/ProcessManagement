
function geturl(name) {  //获取iframe参数
    var reg = new RegExp("[^\?&]?" + encodeURI(name) + "=[^&]+");
    var arr = window.parent.document.getElementById("myIframe").contentWindow.location.search.match(reg);
    if (arr != null) {
        return decodeURI(arr[0].substring(arr[0].search("=") + 1));
    }
    return "";
}


function request(config){
    var defaultconfig={
        url:'',
        data:{},
        type:'get',
        success:function(res){
            console.log(res);
        }
    }
    var configdata=Object.assign(defaultconfig,config);
     //debugger
     configdata.data.token=sessionStorage.getItem('token');
     var configdatafunction=configdata.success;
     configdata.success=function(resc){
         if(resc.code==0){
            configdatafunction(resc);
         }else if(resc.code==2){
            // location.href="login.html";

            console.log(resc);
         }
     }
    $.ajax(configdata);
}
function checkLogin(){//检验是否登录
    var token =sessionStorage.getItem('token');
    if(!token){
        location.href='/login.html';
    }
}
(function(){
    checkLogin();
})()