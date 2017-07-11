define(['jquery','cookie'],function($){
    //点击登陆，跳转至首页
    $("#btn").click(function() {
        $.ajax({
            type: 'post',
            url: '/api/login',
            dataType: 'json',
            data: $("form").serialize(),
            success: function (data) {
                //var c=JSON.stringify(data.result);
                //console.log(typeof c);
                if (data.code == 200) {
                    // 应该把data中用户登录信息保存到cookie中即可实现页面数据共享
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'})
                    location.href = '/index/index';
                }
            }
        })
        return false;//阻止标签默认行为（submit提交跳转）
    })
})
