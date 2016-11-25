var nav = document.getElementById('main-nav');
var menu = document.getElementById('menu');
menu.addEventListener('click', function () {
  'use strict';
  nav.classList.toggle('mostrar');
});

$(".menu-bar").click(function() {
			event.preventDefault();
			if($(".nav-menu").hasClass("visible")) {
				$(".nav-menu").removeClass("visible");
				} else {
					$(".nav-menu").addClass("visible");
				}
		});

$(".menu-bar").click(function() {
			event.preventDefault();
			if($(".redes-header").hasClass("visible")) {
				$(".redes-header").removeClass("visible");
				} else {
					$(".redes-header").addClass("visible");
				}
		});
$(".sub-menu").click(function(){
	$(this).children("ul").slideToggle();
});

$("ul").click(function(active){
	active.stopPropagation();
});