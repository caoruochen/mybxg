define(['jquery','template','cookie'],function($,template){
    //???????????????????????
    // 控制左侧导航菜单的折叠和显示
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    /////????????????????????

    //点击退出，跳转到登录页面
    $('#logout').click(function(){
        $.ajax({
            type:'post',
            url:'/api/logout',
            dataType:'json',
            success:function(data){
                if(data.code == 200){
                    $.removeCookie('loginInfo',{path:'/'});
                    location.href='/';
                }
            }
        })
    });

    // 获取登录的用户信息cookie
    var loginInfo = $.cookie('loginInfo');
    // 渲染头像
    var tpl = '<!-- 头像 -->'
        +'<div class="avatar img-circle">'
        +'<img src="{{tc_avatar}}">'
        +'</div>'
        +'<h4>{{tc_name}}</h4>';
    var html = template.render(tpl,loginInfo?JSON.parse(loginInfo):{});
    $(".aside .profile").html(html);

    //??????????????????????????????
    // 验证用户是否登录过
    if(!$.cookie('PHPSESSID') && location.pathname != '/' && location.href != '/login'){
        location.href = '/';
    }
    //??????????????????????????????

});