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
		}, {
			suppressMapOpenBlock: true
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

// map yandex
if($('.map').length) {
	if( window.innerWidth >= 992 ){
		ymaps.ready(function () {
		
			var myMap = new ymaps.Map('map', {
			
				center: [55.770, 37.616856],
				zoom: 11
			}, {
				searchControlProvider: 'yandex#search'
			}),
		
			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),
			myPlacemark = new ymaps.Placemark([55.87551042823424, 37.54882573014792], {
				balloonContentBody: [
					'<address>',
					'<strong>ПОУ Автошкола Оого ДОСААФ России САО г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, Дмитровское шоссе, 96, корп. 2',
					'<br/>',
					'Подробнее: <a href="https://avtoschoolcao.ru/" target="_blank">https://avtoschoolcao.ru</a>',
					'</address>'
				].join('')
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
					iconImageOffset: [-5, -38]
			}),
			myPlacemarkWithContent = new ymaps.Placemark([55.86275524566285, 37.436894974399024], {
				balloonContentBody: [
					'<address>',
					'<strong>ПОУ Тушинская автомобильная школа РО ДОСААФ России</strong>',
					'<br/>',
					'Адрес: Москва, Планерная улица, 14к5',
					'<br/>',
					'Подробнее: <a href="https://avtoshkola-tushino-dosaaf.ru/" target="_blank">https://avtoshkola-tushino-dosaaf.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [38, 38],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent1 = new ymaps.Placemark([55.83344722707324, 37.49219539991899], {
				balloonContentBody: [
					'<address>',
					'<strong>Спортивно-стрелковый клуб Московский учебный технический центр ДОСААФ России</strong>',
					'<br/>',
					'Адрес: Москва, улица Адмирала Макарова, 4',
					'<br/>',
					'Подробнее: <a href="//momrtsh-dosaaf.com/" target="_blank">https://momrtsh-dosaaf.com</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [38, 38],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent2 = new ymaps.Placemark([55.82871766980956, 37.66265321775625], {
				balloonContentBody: [
					'<address>',
					'<strong>ДОСААФ СВАО г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, проезд Кадомцева, 11, корп. 1',
					'<br/>',
					'Подробнее: <a href="//dosaaf-svao.ru/" target="_blank">https://dosaaf-svao.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [38, 38],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent3 = new ymaps.Placemark([55.733669673767146,37.52339374355126], {
				balloonContentBody: [
					'<address>',
					'<strong>Автошкола ДОСААФ</strong>',
					'<br/>',
					'Адрес: Москва, Поклонная улица, 11с1',
					'<br/>',
					'Подробнее: <a href="//dosaaf-zao.ru/" target="_blank">https://dosaaf-zao.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [38, 38],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent4 = new ymaps.Placemark([55.703041529386915, 37.5309185595245], {
				balloonContentBody: [
					'<address>',
					'<strong>Автошкола ДОСААФ</strong>',
					'<br/>',
					'Адрес: Москва, Поклонная улица, 11с1',
					'<br/>',
					'Подробнее: <a href="//dosaaf-zao.ru/" target="_blank">https://dosaaf-zao.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [38, 38],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent5 = new ymaps.Placemark([55.665927798467905, 37.62781526256556], {
				balloonContentBody: [
					'<address>',
					'<strong>Учебно-спортивный центр ДОСААФ России Южного административного округа г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, Каширское шоссе, 12',
					'<br/>',
					'Подробнее: <a href="//dosaaf.ru/" target="_blank">https://dosaaf.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [38, 38],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent6 = new ymaps.Placemark([55.75254106896849, 37.75221199999996], {
				balloonContentBody: [
					'<address>',
					'<strong>Учебно-спортивный центр ДОСААФ России Южного административного округа г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, Электродная улица, 8',
					'<br/>',
					'Подробнее: <a href="//dosaaf.ru/" target="_blank">https://dosaaf.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [38, 38],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent7 = new ymaps.Placemark([55.700603576401484, 37.80635526256553], {
				balloonContentBody: [
					'<address>',
					'<strong>ПОУ УСЦ Оого ДОСААФ России ЮВАО г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, Ташкентская улица, 26, корп. 2',
					'<br/>',
					'Подробнее: <a href="//www.dosaaf-auto.ru/" target="_blank">https://www.dosaaf-auto.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [38, 38],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			});
			myMap.behaviors.disable('scrollZoom');
			myMap.geoObjects
				.add(myPlacemark)
				.add(myPlacemarkWithContent)
				.add(myPlacemarkWithContent1)
				.add(myPlacemarkWithContent2)
				.add(myPlacemarkWithContent3)
				.add(myPlacemarkWithContent4)
				.add(myPlacemarkWithContent5)
				.add(myPlacemarkWithContent6)
				.add(myPlacemarkWithContent7);
		});
	} else {
		ymaps.ready(function () {
		
			var myMap = new ymaps.Map('map', {
			
				center: [55.770, 37.616856],
				zoom: 10,
				controls: ['searchControl', 'routeButtonControl']
			}, {
				searchControlProvider: 'yandex#search'
			}),
		
			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),
			myPlacemark = new ymaps.Placemark([55.87551042823424, 37.54882573014792], {
				balloonContentBody: [
					'<address>',
					'<strong>ПОУ Автошкола Оого ДОСААФ России САО г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, Дмитровское шоссе, 96, корп. 2',
					'<br/>',
					'Подробнее: <a href="https://avtoschoolcao.ru/" target="_blank">https://avtoschoolcao.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [24, 24],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -24]
			}),
			myPlacemarkWithContent = new ymaps.Placemark([55.86275524566285, 37.436894974399024], {
				balloonContentBody: [
					'<address>',
					'<strong>ПОУ Тушинская автомобильная школа РО ДОСААФ России</strong>',
					'<br/>',
					'Адрес: Москва, Планерная улица, 14к5',
					'<br/>',
					'Подробнее: <a href="https://avtoshkola-tushino-dosaaf.ru/" target="_blank">https://avtoshkola-tushino-dosaaf.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [24, 24],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent1 = new ymaps.Placemark([55.83344722707324, 37.49219539991899], {
				balloonContentBody: [
					'<address>',
					'<strong>Спортивно-стрелковый клуб Московский учебный технический центр ДОСААФ России</strong>',
					'<br/>',
					'Адрес: Москва, улица Адмирала Макарова, 4',
					'<br/>',
					'Подробнее: <a href="//momrtsh-dosaaf.com/" target="_blank">https://momrtsh-dosaaf.com</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [24, 24],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent2 = new ymaps.Placemark([55.82871766980956, 37.66265321775625], {
				balloonContentBody: [
					'<address>',
					'<strong>ДОСААФ СВАО г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, проезд Кадомцева, 11, корп. 1',
					'<br/>',
					'Подробнее: <a href="//dosaaf-svao.ru/" target="_blank">https://dosaaf-svao.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [24, 24],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent3 = new ymaps.Placemark([55.733669673767146,37.52339374355126], {
				balloonContentBody: [
					'<address>',
					'<strong>Автошкола ДОСААФ</strong>',
					'<br/>',
					'Адрес: Москва, Поклонная улица, 11с1',
					'<br/>',
					'Подробнее: <a href="//dosaaf-zao.ru/" target="_blank">https://dosaaf-zao.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [24, 24],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent4 = new ymaps.Placemark([55.703041529386915, 37.5309185595245], {
				balloonContentBody: [
					'<address>',
					'<strong>Автошкола ДОСААФ</strong>',
					'<br/>',
					'Адрес: Москва, Поклонная улица, 11с1',
					'<br/>',
					'Подробнее: <a href="//dosaaf-zao.ru/" target="_blank">https://dosaaf-zao.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [24, 24],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent5 = new ymaps.Placemark([55.665927798467905, 37.62781526256556], {
				balloonContentBody: [
					'<address>',
					'<strong>Учебно-спортивный центр ДОСААФ России Южного административного округа г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, Каширское шоссе, 12',
					'<br/>',
					'Подробнее: <a href="//dosaaf.ru/" target="_blank">https://dosaaf.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [24, 24],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent6 = new ymaps.Placemark([55.75254106896849, 37.75221199999996], {
				balloonContentBody: [
					'<address>',
					'<strong>Учебно-спортивный центр ДОСААФ России Южного административного округа г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, Электродная улица, 8',
					'<br/>',
					'Подробнее: <a href="//dosaaf.ru/" target="_blank">https://dosaaf.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [24, 24],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			}),
			myPlacemarkWithContent7 = new ymaps.Placemark([55.700603576401484, 37.80635526256553], {
				balloonContentBody: [
					'<address>',
					'<strong>ПОУ УСЦ Оого ДОСААФ России ЮВАО г. Москвы</strong>',
					'<br/>',
					'Адрес: Москва, Ташкентская улица, 26, корп. 2',
					'<br/>',
					'Подробнее: <a href="//www.dosaaf-auto.ru/" target="_blank">https://www.dosaaf-auto.ru</a>',
					'</address>'
				].join('')
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: 'img/DOSAAF_1.svg',
					// Размеры метки.
					iconImageSize: [24, 24],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-24, -24],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			});
			myMap.behaviors.disable('drag');
			myMap.geoObjects
				.add(myPlacemark)
				.add(myPlacemarkWithContent)
				.add(myPlacemarkWithContent1)
				.add(myPlacemarkWithContent2)
				.add(myPlacemarkWithContent3)
				.add(myPlacemarkWithContent4)
				.add(myPlacemarkWithContent5)
				.add(myPlacemarkWithContent6)
				.add(myPlacemarkWithContent7);
		});
	}
}