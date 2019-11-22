
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




// Ползунок

	$( ".calculator_slider" ).slider({
 		range: 'min',
		value : 200,//Значение, которое будет выставлено слайдеру при загрузке
		min : 0,//Минимально возможное значение на ползунке
		max : 1000,//Максимально возможное значение на ползунке
		step : 1,//Шаг, с которым будет двигаться ползунок
		create: function( event, ui ) {
			val = $( ".calculator_slider" ).slider("value");//При создании слайдера, получаем его значение в перемен. val
			$( ".calculator_slider_content" ).html( val );//Заполняем этим значением элемент с id contentSlider
			// $( ".calculator_slider" ).css('left', val/10 + '%');
		},
    	slide: function( event, ui ) {
			$( ".calculator_slider_content" ).html( ui.value );//При изменении значения ползунка заполняем элемент с id contentSlider
			// $( ".calculator_slider" ).css('left', ui.value/10 + '%');

        }
    });

});