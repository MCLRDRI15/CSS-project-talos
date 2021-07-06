$(document).ready(function(){
	var height = $('.menu').offset().top;

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > height) {
			$('.menu').addClass('menu-fixed');
		}else{
			$('.menu').removeClass('menu-fixed');
			$('.nav-menu').removeClass('active');
			$('.hamburguer').removeClass('active');
		}
	});
});

