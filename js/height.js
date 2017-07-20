$(function(){

	var height = $(window).height()-$("nav").height();
	var lheight = $(".main .leftheight").height();
	var rheight = $(".main .rightheight").height();
	var mheight = $(".main").height();
	
	//高度适应屏幕高
	if(lheight <= height && rheight <=height){
		$(".main .leftheight").height(height);
		$(".main .rightheight").height(height);
	}else{
		$(".main .leftheight").height(mheight);
		$(".main .rightheight").height(mheight);
	}
	
	
	//选项卡
	$(".main .leftheight li").click(function(){
		var index = $(this).index();
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		
		
		$(".main .rightheight").removeClass("active");
		$(".main .rightheight:eq("+index+")").addClass("active");
		
	});
	
	
});
