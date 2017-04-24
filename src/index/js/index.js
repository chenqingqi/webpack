
//创建应用
window['app'] = {};


//导入库
window['$']   = require('jquery'); 


//启动模块
window.addEventListener('load',function(e)
{
	require('./slider.js'); 
	require('./bar.js');
})