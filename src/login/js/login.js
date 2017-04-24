
//创建应用
window['login'] = {};


//导入库
window['$']   = require('jquery'); 


//启动模块
window.addEventListener('load',function(e)
{
	require('./panel.js'); 
	require('./help.js');
})