/**
 * 帮助模块
 */
function Help()
{
	$(window).bind('PANEL_CLICK',function(e,data)
	{
		console.log(data)
	})
}

/**
 * 注册模块
 */
window['login']['help'] = new Help();
