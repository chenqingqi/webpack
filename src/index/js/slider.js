/**
 * 幻灯模块
 */
function Slider()
{
	
	$('.slider').bind('click',function(e)
	{
		$(window).trigger('SLIDER_CHANGE','幻灯已改变')
	})
	
	
	function run()
	{
		console.log('我是幻灯');
	}
	
	
	return{
		
		run:run
	}
}

/**
 * 注册模块
 */
window['app']['slider'] = new Slider();
