$(function() {

	$.ajax({
		url: "data.json",
		type: "GET",
		dataType: "json",
		success: function(data) {
			//			apple(data);
		}
	});

	//	function apple(data){
	//		$.each(data, function(index,value){
	//			var lis = "<li><img src="+"images/"+data[index].picture+"/><p>"+ data[index].name+"</p></li>";
	//			$(".product #clearlr").prepend(lis);
	//		});	
	//	}

	$(".main .head_portrait .profession_button button").click(function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active")
	});

	//	$(".classify li").click(function(){
	//		var index = $(this).index();
	//		$(".main .leftheight li").removeClass("active");
	//		$(".main .leftheight li:eq("+index+")").addClass("active");
	//		
	//		$(".main .rightheight").removeClass("active");
	//		$(".main .rightheight:eq("+index+")").addClass("active");
	//	});

	$("footer ul li:eq(0) a").click(function() {
		$(".prompt").addClass("dis");
	});

	$(".prompt button:eq(0)").click(function() {
		$(".prompt").removeClass("dis");
	});
	$(".prompt button:eq(1)").click(function() {
		$(".prompt").removeClass("dis");
	});

	$("footer ul li:eq(1) a").click(function() {
		$(".mingpian").addClass("dis");
	});
	$(".mingpian button:eq(0)").click(function() {
		$(".mingpian").removeClass("dis");
	});

	$("footer ul li:eq(2) a").click(function() {
		$(".zixun").addClass("dis");
	});
	$(".zixun button:eq(0)").click(function() {
		$(".zixun").removeClass("dis");
	});

	$(".zixun li:eq(1) span").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
	});

	$(".zixun li:eq(2) span").click(function() {
		if($(this).is(".active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});
	$(".zixun li:eq(3) span").click(function() {
		if($(this).is(".active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});

	$(".sure_to_send").click(function() {
		$(".chenggong").addClass("dis");
	});
	$(".chenggong span:eq(2)").click(function() {
		$(".chenggong").removeClass("dis");
		$(".mingpian").removeClass("dis");
		$(".zixun").removeClass("dis");
	});

	var height = $(window).height() - $("nav").height();
	var lheight = $(".main .leftheight").height();
	var rheight = $(".main .rightheight").height();
	var mheight = $(".main").height();

	//高度适应屏幕高
	if(lheight <= height && rheight <= height) {
		$(".main .leftheight").height(height);
		$(".main .rightheight").height(height);
	} else {
		$(".main .leftheight").height(mheight);
		$(".main .rightheight").height(mheight);
	}

	//选项卡
	$(".main .leftheight li").click(function() {
		var index = $(this).index();
		$(this).siblings().removeClass("active");
		$(this).addClass("active");

		$(".main .rightheight").removeClass("active");
		$(".main .rightheight:eq(" + index + ")").addClass("active");

	});

});