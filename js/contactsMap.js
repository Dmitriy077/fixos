ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("contacts_map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.92456406419882,30.359490499999954],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });

        myMap.controls
        	.remove('geolocationControl')
        	.remove('searchControl')
        	.remove('trafficControl')
        	.remove('typeSelector')
        	.remove('fullscreenControl')
        	.remove('zoomControl')
        	.remove('rulerControl')
        	.remove('control.Button');

        myMap.behaviors.disable([
			// 'drag',
			'scrollZoom'
        	]);

        var myPlacemark = new ymaps.Placemark([59.92456406419882,30.359490499999954], {}, {
    		iconLayout: 'default#image',
		    iconImageHref: '../img/main/pin.png',
		    iconImageSize: [44, 44],
		    iconImageOffset: [-10, -40]
        });
		myMap.geoObjects.add(myPlacemark);
    }