$(document).ready(function(){
	var altura = $('.nav').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.scroll').addClass('menu-fixed');
		} else {
			$('.scroll').removeClass('menu-fixed');
		}
	});
 
});