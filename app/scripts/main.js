/* jshint devel:true */
'use strict';
$(document).ready(function() {
	var mobileMode = false;
	
	$(window).scroll(function () {
		if(!mobileMode){
			$('#about').waypoint({
				handler: function(direction) {
					if(direction === 'down'){
						$('.navbar').addClass('navbar-fixed-top');
						$('.navbar').addClass('fixedTopNav');
						$('.navbar').addClass('animated fadeInDown');
					}
					else {
						$('.navbar').removeClass('navbar-fixed-top');
						$('.navbar').removeClass('fixedTopNav');
						$('.navbar').removeClass('animated fadeInDown');
					}
				}, 
				offset: 100
			});
		}
	});
	
	$('#carousel-example-generic').swiperight(function() {
		$(this).carousel('prev');
	});
	$('#carousel-example-generic').swipeleft(function() {
		$(this).carousel('next');
	});
	function changeToPortraitMode() {	
		if (mq.matches) {  
			mobileMode = true;             
			$('.navbar').addClass('navbar-fixed-top');
			$('.navbar').addClass('fixedTopNav');
		} else {    
			mobileMode = false;                    
			$('.navbar').removeClass('navbar-fixed-top');
			$('.navbar').removeClass('fixedTopNav');
		}
	}
	if (window.matchMedia) {
		var mq = window.matchMedia ('(max-width:768px)');
		window.addEventListener ('resize',changeToPortraitMode,true);
		changeToPortraitMode(mq);
	}

});