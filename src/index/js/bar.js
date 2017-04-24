/**
 * 侧边栏模块
 */
function Bar()
{
	
	//调用模块方法
	app.slider.run();
	
	
	//侦听模块消息
	$(window).bind('SLIDER_CHANGE',function(e,data)
	{
		console.log(data)
	})
	
	
	function run()
	{
		console.log('我是侧边栏')
	}
	
	return{
		
		run:run
	}
}

/**
 * 注册模块
 */
window['app']['bar'] = new Bar();
