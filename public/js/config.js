require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery.min',
        template:'artTemplate/template-web',
        cookie:'jquery-cookie/jquery.cookie',
        bootstrap : 'bootstrap/js/bootstrap.min',
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        form : 'jquery-form/jquery.form',
        validate:'validate/jquery-validate',
        common:'../js/common',
        login:'../js/login',
        index:'../js/index',
        teacher_list:'../js/teacher_list',
        teacher_add:'../js/teacher_add',
        utils:'../js/utils',
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        },
        validate:{
            deps:['jquery']
        }
    }
});
