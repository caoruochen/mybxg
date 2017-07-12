define(['jquery','template','bootstrap'],function($,template){
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            var html = template('teacherTpl', {list:data.result});
            $('#teacherList').html(html);

            //模态框:讲师信息查看
            $('#teacherList .preview').click(function(){
                var tcId = $(this).parent().attr("data-tcId");
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    dataType:'json',
                    data:{tc_id:tcId},
                    success:function(data){
                        var html = template('teacherviewTpl',data.result);
                        $('#teacherView').html(html);
                    }
                })
            });

            // 实现讲师启用和注销功能
            $("#teacherList").find(".switchBtn").click(function(){
                var tcId = $(this).parent().attr("data-tcId");
                var status = $(this).attr("data-status");
                var that = this;
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    datetype:'json',
                    data:{tc_id:tcId,tc_status:status},
                    success:function(data){
                        $(that).attr("data-status",data.result.tc_status);
                        if(data.result.tc_status == 0){
                            $(that).text("注 销");
                        }else{
                            $(that).text("启 用");
                        }
                    }
                });
            });
        }
    });




})
