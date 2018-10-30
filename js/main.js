$(function() {

	$('header').height( $(window).height() );
	var loadingLeftCenter = ( ( $(window).width()  / 2 ) - 60);
	$(".loading .spinner").css("marginLeft", loadingLeftCenter);
	var loadingTopCenter = ( ( $(window).height() - $(".loading .spinner").height() - 60) / 2 );
	$(".loading .spinner").css("marginTop", loadingTopCenter);
	$(window).resize(function() {
		$('header').height( $(window).height() );
		$(".loading .spinner").css("marginTop", loadingTopCenter);
		$(".loading .spinner").css("marginLeft", loadingLeftCenter);
	});

	$('body').niceScroll({
		cursorcolor:"#dbebfa",
		cursorwidth:"12px",
		cursorborderradius:0,
		cursorborder:"0px solid aquamarine",
	});

	$('nav').singlePageNav({
		"duration": 3000,
		"effect": 'swing'
	});

	$(".loading").delay(5000).fadeOut(1000);

});