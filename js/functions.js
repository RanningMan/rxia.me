window.onload = function() {
	goTop();
	document.getElementById("myname").onclick = function(){
		var dest = document.getElementById("profile");
		var timer = null;
		var isArrived = false;
		window.onscroll = function() {
			if(!isArrived)
				clearInterval(timer);
			isArrived = false;
		}

		timer = setInterval(function() {
			var destPosition = dest.getBoundingClientRect().top + window.scrollY;
			var curPosition = document.documentElement.scrollTop || document.body.scrollTop;
			var distance = curPosition - destPosition;
			var speed = Math.floor(-distance / 5);
			document.documentElement.scrollTop = document.body.scrollTop = curPosition + speed;
			isArrived = true;
			if(speed == 0) {
				document.documentElement.scrollTop = document.body.scrollTop = Math.ceil(curPosition - distance);
				clearInterval(timer);
			}
		}, 30);
	}
}

function goTo(obj) {
	var dest = document.getElementById(obj.id.toLowerCase().substr(2));
	var timer = null;
	var isArrived = false;
	window.onscroll = function() {
		if(!isArrived)
			clearInterval(timer);
		isArrived = false;
	}

	timer = setInterval(function() {
		var destPosition = dest.getBoundingClientRect().top + window.scrollY;
		var curPosition = document.documentElement.scrollTop || document.body.scrollTop;
		var distance = curPosition - destPosition;
		var speed = Math.floor(-distance / 3);
		document.documentElement.scrollTop = document.body.scrollTop = curPosition + speed;
		isArrived = true;
		if(speed == 0) {
			document.documentElement.scrollTop = document.body.scrollTop = Math.ceil(curPosition - distance);
			clearInterval(timer);
		}
	}, 30);
}

$(function() {
	var u_agent = navigator.userAgent;
	if(u_agent.indexOf("Edge")>-1 || u_agent.indexOf("Trident")>-1) {
		$("#myname_wrap").css({"margin-top":"20%"})
	}
	$(window).scroll(function(){
		var screen_height = $(window).height();
		var h_num = $(window).scrollTop();
		var part = $(".wrap");
		if(h_num > (screen_height * 0.8)) {
			$("#navigation").removeClass("before_scroll");
			$("#navigation").addClass("after_scroll");
		}
		else {
			$("#navigation").removeClass("after_scroll");
			$("#navigation").addClass("before_scroll");
		}
		var currentId = "";
		part.each(function() {
			var part_top = $(this).offset().top;
			if(h_num > part_top - 100) {
				currentId = "to" + $(this).attr("id");
			}
			else {
				return false;
			}
		});
		var currentpos = $("#navigation li").find(".viewing_part");
		if(currentId && currentpos.attr("id") != currentId) {
			currentpos.removeClass("viewing_part");
			currentpos.addClass("not_viewing_part");
			$("#navigation").find("#" + currentId).removeClass("not_viewing_part");
			$("#navigation").find("#" + currentId).addClass("viewing_part");
		}
	});

	$(".proj").hover(
		function(){
			$(this).addClass("background-theme");
			$(this).children("img").fadeTo(50, 0.2);
			//$(this).children("img").animate({"left":"+=1%"}, 50);
			$(this).children("div").fadeIn(50);
			$(this).children("div").children(".proj_name").fadeIn(50);
			$(this).children("div").children(".proj_content, .proj_tag").animate({"left":"-=95%"}, 300);
			$(this).children("div").children("hr").animate({"width":"90%"}, 300);
		},
		function(){
			$(this).removeClass("background-theme");
			$(this).children("img").fadeTo(50, 1);
			//$(this).children("img").animate({"left":"-=1%"}, 50);
			$(this).children("div").fadeOut(50);
			$(this).children("div").children(".proj_name").fadeOut(50);
			$(this).children("div").children(".proj_content, .proj_tag").animate({"left":"+=95%"}, 300);
			$(this).children("div").children("hr").animate({"width":"0%"}, 300);
	});

	$(".col>li").hover(
		function(){
			$(this).find(".starlist").children("li").animate({"margin-left":"+=2px"}, 200);
			$(this).css({"background-color":"#F5F5F5"});
		},
		function() {
			$(this).find(".starlist").children("li").animate({"margin-left":"-=2px"}, 200);
			$(this).css({"background-color":"#FFFFFF"});
	});
});
