<?php
    $pathname = 'index';
    $filename = 'index';

    if(isset($_SERVER['PATH_INFO'])){
        // 包含路径
        $urlpath = $_SERVER['PATH_INFO'];
        $str = substr($urlpath,'1');
        $arr = explode('/',$str);
        $pathname = $arr[0];
        $filename = $arr[1];
        //echo $filename;
    }else{
        // 不包含路径
        $filename = 'login';
    };

    include('./views/'.$pathname.'/'.$filename.'.html');

 ?>