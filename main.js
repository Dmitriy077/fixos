
$(function() {
// Главный слайдер
	$('.main_slider_slick').slick({
		// autoplay: true,
  		// autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		appendArrows:'.main_slider_arrow',
		prevArrow:'<div class="main_slider_arrow_prev"><img src="./img/main/left.svg" alt=""></div>',
		nextArrow:'<div class="main_slider_arrow_next"><img src="./img/main/right.svg" alt=""></div>',
	});

});