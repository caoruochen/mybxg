define(['jquery'],function($){
    /*
     工具方法
     */
    // 获取URL中指定的参数值
    function urlKv(key,path){
        var obj={};
        if(path){
            var str = path.substr(1);
            var arr = str.split('&');
            arr.forEach(function(item){
                var kv = item.split("=");
                obj[kv[0]] = kv[1];
            })
        };
        return obj[key];
    }

    return{
        urlKv:urlKv
    }
})