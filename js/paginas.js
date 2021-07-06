$(document).ready(function(){

var principalImage = $('.principal-images').offset().top;
var descriptions = $('.descriptions').offset().top;

$(window).on('scroll', function(){
	if ($(window).scrollTop() > principalImage && $(window).scrollTop() < descriptions) {	
		$('#one').addClass('activo');
	}else{
		$('#one').removeClass('activo');
	}
	});

var teamSection = $('.team-section').offset().top;

$(window).on('scroll', function(){
	if ($(window).scrollTop() > descriptions && $(window).scrollTop() < teamSection) {	
		$('#two').addClass('activo');
	}else{
		$('#two').removeClass('activo');
	}
	});

var portafolio = $('.portfolio-section').offset().top;

$(window).on('scroll', function(){
	if ($(window).scrollTop() > teamSection && $(window).scrollTop() < portafolio) {	
		$('#three').addClass('activo');
		$('#four').addClass('activo');
	}else{
		$('#three').removeClass('activo');
		$('#four').removeClass('activo');
	}
	});


var blog = $('.our-blog-section').offset().top;

$(window).on('scroll', function(){
	if ($(window).scrollTop() > portafolio && $(window).scrollTop() < blog) {	
		$('#five').addClass('activo');
	}else{
		$('#five').removeClass('activo');
	}
	});

var form = $('.form-section').offset().top;

	$(window).on('scroll', function(){
	if ($(window).scrollTop() > blog && $(window).scrollTop() < form) {	
		$('#six').addClass('activo');
	}else{
		$('#six').removeClass('activo');
	}
	});

	$(window).on('scroll', function(){
	if ($(window).scrollTop() > form) {	
		$('#seven').addClass('activo');
}	else{
		$('#seven').removeClass('activo');
	}
	});

});






