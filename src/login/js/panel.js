/**
 * 面板模块
 */
function Panel()
{
	$('.panel').bind('click',function(e)
	{
		$(window).trigger('PANEL_CLICK','登录面板被点击')
	})
}

/**
 * 注册模块
 */
window['login']['panel'] = new Panel();