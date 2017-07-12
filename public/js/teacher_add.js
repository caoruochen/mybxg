define(['jquery','template','utils'],function($,template,utils){
    var tcId = utils.urlKv("tc_id",location.search);

    if(tcId){
        //编辑教师信息
        $.ajax({
            type:'get',
            url:'/api/teacher/edit',
            dataType:'json',
            data:{tc_id:tcId},
            success:function(data){
                data.result.tc_operate = "编辑讲师";
                var html = template("teacheraddTpl",data.result);
                $('#teacheradd').html(html);
                //提交表单
                formSub('/api/teacher/update');
            }
        });
    }else{
        //添加教师信息
        var html = template("teacheraddTpl",{tc_operate:"添加讲师",tc_gender:0});
        $('#teacheradd').html(html);
        //提交表单
        formSub('/api/teacher/add');
    };

    //绑定表单提交
    function formSub(url){
        $("#teacheraddBtn").click(function(){
            var form=$('#teacheraddForm').serialize();
            $.ajax({
                type:'post',
                url:url,
                dataType:'json',
                data : $('#teacheraddForm').serialize(),
                success:function(data){
                    if(data.code == 200){
                        location.href = "/teacher/list";
                    }
                }
            });
        });
    }
});


