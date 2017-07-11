require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery.min',
        template:'artTemplate/template-web',
        cookie:'jquery-cookie/jquery.cookie',
        bootstrap : 'bootstrap/js/bootstrap.min',
        common:'../js/common',
        login:'../js/login',
        list:'../js/list'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
});
