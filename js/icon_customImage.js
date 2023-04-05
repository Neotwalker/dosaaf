if( window.innerWidth >= 992 ){
	ymaps.ready(function () {
	
		var myMap_chel = new ymaps.Map('inner--map', {
		
			center: [55.17352569581125, 61.38588160643766],
			zoom: 16
		}, {
			searchControlProvider: 'yandex#search'
		}),
	
		// Создаём макет содержимого.
		MyIconContentLayout1 = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),
		myPlacemark1 = new ymaps.Placemark([55.17351648486467,61.385866513183575], {
			balloonContentHeader: '<a href="#" class="inner--map__title">Автошкола ДОСААФ</a>',
			// Зададим содержимое основной части балуна.
			balloonContentBody: '<div class="inner--map__wrapper"> <div><a href="tel:+7-351-220-14-15">+7 351 220-14-15</a><a href="tel:+7-900-078-98-61">+7 900 078-98-61</a></div>' +
					'<div><span> Пн-Чт с 09:00 до 19:00</span> <span> Пт с 09:00 до 18:00 </span> <div> </div>'
		}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'img/DOSAAF_1.svg',
				// Размеры метки.
				iconImageSize: [38, 38],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-5, -38],
				iconContentLayout: MyIconContentLayout1
		});
		myMap_chel.geoObjects.add(myPlacemark1);
		myPlacemark1.balloon.open();
		myMap_chel.behaviors.disable('scrollZoom');
	});
} else {
	ymaps.ready(function () {
	
		var myMap_chel = new ymaps.Map('inner--map', {
		
			center: [55.17352569581125, 61.38799160643766],
			zoom: 16,
			controls: ['searchControl', 'routeButtonControl']
		}, {
			searchControlProvider: 'yandex#search'
		}),
	
		MyIconContentLayout1 = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
	),
	myPlacemark = new ymaps.Placemark([55.17351648486467,61.385866513183575], {
		balloonContentHeader: '<a href="#" class="inner--map__title">Автошкола ДОСААФ</a>',
			// Зададим содержимое основной части балуна.
			balloonContentBody: '<div class="inner--map__wrapper"> <div><a href="tel:+7-351-220-14-15">+7 351 220-14-15</a><a href="tel:+7-900-078-98-61">+7 900 078-98-61</a></div>' +
					'<div><span> Пн-Чт с 09:00 до 19:00</span> <span> Пт с 09:00 до 18:00 </span> <div> </div>'
		}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'img/DOSAAF_1.svg',
				// Размеры метки.
				iconImageSize: [38, 38],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-5, -38],
				iconContentLayout: MyIconContentLayout1
		});

	myMap_chel.geoObjects.add(myPlacemark);
	myPlacemark.balloon.open();
	myMap_chel.behaviors.disable('drag');
	});
} 