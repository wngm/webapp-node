/*
* @Author: anchen
* @Date:   2017-03-29 18:39:11
* @Last Modified by:   anchen
* @Last Modified time: 2017-03-29 18:39:27
*/

'use strict';
require.config({
    baseUrl:'js/lib',
    paths:{
        ts:'../ts',
        jquery:'jquery-3.2.0',
        wng:'wng'
    }
})

require(['jquery','wng'],function($,wn){
    $('#box').html('hello require')
    wng()
})
require(['wng'],function(){
    fn1(2);
    document.getElementById('box').addEventListener('click',function(){
        fn1('click')
    })
})
define('qi',['jquery'],function($){
    return{
        name:'wengqi',
        age:'28',
        szie:24
    }
})
require(['qi'],function(q){
    console.log('name='+q.name)
    console.log($)
})
require(['js/lib/see.js'],function(){
    see('xiong')
})