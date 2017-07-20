$(function(){
	
	$("footer ul li:eq(0) a").click(function(){
		$(".prompt").addClass("dis");
	});
	
	$(".prompt button:eq(0)").click(function(){
		$(".prompt").removeClass("dis");
	});
	$(".prompt button:eq(1)").click(function(){
		$(".prompt").removeClass("dis");
	});
	
	
	
	$("footer ul li:eq(1) a").click(function(){
		$(".mingpian").addClass("dis");
	});
	$(".mingpian button:eq(0)").click(function(){
		$(".mingpian").removeClass("dis");
	});
	
	
	
	$("footer ul li:eq(2) a").click(function(){
		$(".zixun").addClass("dis");
	});
	$(".zixun button:eq(0)").click(function(){
		$(".zixun").removeClass("dis");
	});
	
	
	
	$(".zixun li:eq(1) span").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	
	$(".zixun li:eq(2) span").click(function(){
		if($(this).is(".active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
	});
	$(".zixun li:eq(3) span").click(function(){
		if($(this).is(".active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
	});
	
	
	$(".sure_to_send").click(function(){
		$(".chenggong").addClass("dis");
	});
	$(".chenggong span:eq(2)").click(function(){
		$(".chenggong").removeClass("dis");
		$(".mingpian").removeClass("dis");
		$(".zixun").removeClass("dis");
	});
	
	
	
	
	
});