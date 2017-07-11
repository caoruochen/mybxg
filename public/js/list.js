define(['jquery','template','bootstrap'],function($,template){
        $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
                //if(data.code == 200) {
            //console.log(data);
            var html = template('teacherTpl', {list:data.result});
            $('#teacherList').html(html);

                //}
            }
    });


})
