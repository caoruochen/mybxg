define(['jquery','template','utils','datepicker','language','form','validate'],function($,template,utils){
    // 设置导航菜单选中
    utils.setMenu('/teacher/list');

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

    //绑定表单提交1-表单序列化
    //function formSub(url){
    //    $("#teacheraddBtn").click(function(){
    //        var form=$('#teacheraddForm').serialize();
    //        $.ajax({
    //            type:'post',
    //            url:url,
    //            dataType:'json',
    //            data : $('#teacheraddForm').serialize(),
    //            success:function(data){
    //                if(data.code == 200){
    //                    location.href = "/teacher/list";
    //                }
    //            }
    //        });
    //    });
    //};

    //绑定表单提交2-插件提交form,validate
    function formSub(url){
        //$("#teacheraddBtn").click(function(){
        //    $('#teacheraddForm').ajaxSubmit({
        //        type:'post',
        //        url:url,
        //        dataType:'json',
        //        success:function(data){
        //            if(data.code == 200){
        //                location.href = "/teacher/list";
        //            }
        //        }
        //    });
        //});
        $("#teacheraddForm").validate({
            sendForm:false,
            valid:function(){
                $('#teacheraddForm').ajaxSubmit({
                    type:'post',
                    url:url,
                    dataType:'json',
                    success:function(data){
                        if(data.code == 200){
                            location.href = "/teacher/list";
                        }
                    }
                });
            },
            description : {
                tc_name : {
                    required : '用户名不能为空'
                },
                tc_pass : {
                    required : '密码不能为空',
                    pattern : '密码只能是6位数字'
                },
                tc_join_date : {
                    required : '入职日期必须选择'
                }
            }
        })

    };

});


