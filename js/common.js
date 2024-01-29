$(function() {

	$('.main--categories__wrapper').owlCarousel({
		margin: 30,
		smartSpeed: 700,
		navContainer: $('.main--categories__arrows'),
		navText: [
			'<div class="arrows--prev"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>',
			'<div class="arrows--next"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>'
		],
		dots: false,
		loop: false,
		items: 3,
		responsive: {
			0: {
				autoWidth: true,
				margin: 20,
				nav: false,
				navContainer: $('')
			},
			600: {
				autoWidth: true,
				nav: true,
				navContainer: $('.inner--instructors__arrows')
			},
			993: {
				autoWidth: false
			}
		}
	});

	$('.main--categories__wrapper').on('changed.owl.carousel', function (event) {
		let owl = $(this);
		let currentIndex = event.item.index;
		let itemsCount = event.item.count;
	
		if (currentIndex > 0) {
			owl.parent('.row').find('.main--categories__arrows').find('.owl-prev').fadeIn(100);
			
		} else {
			owl.parent('.row').find('.main--categories__arrows').find('.owl-prev').fadeOut(100);
			
		}
		if ($(window).width() > 900) {
			if (currentIndex > 2){
				owl.parent('.row').find('.main--categories__arrows').find('.owl-next').fadeOut(100);
			} else {
				owl.parent('.row').find('.main--categories__arrows').find('.owl-next').fadeIn(100);
			}
		} else if ($(window).width() > 600) {
			if (currentIndex > 3){
				owl.parent('.row').find('.main--categories__arrows').find('.owl-next').fadeOut(100);
			} else {
				owl.parent('.row').find('.main--categories__arrows').find('.owl-next').fadeIn(100);
			}
		} else if ($(window).width() > 0) {
			if (currentIndex > 3){
				owl.parent('.row').find('.main--categories__arrows').find('.owl-next').fadeOut(100);
			} else {
				owl.parent('.row').find('.main--categories__arrows').find('.owl-next').fadeIn(100);
			}
		}
	});

	$('.main--education__wrapper').owlCarousel({
		center: true,
		smartSpeed: 700,
		margin: 30,
		navContainer: $('.main--education__arrows'),
		navText: [
			'<div class="arrows--prev"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>',
			'<div class="arrows--next"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>'
		],
		dots: false,
		loop: true,
		items: 3,
		responsive: {
			0: {
				margin: 10,
				autoWidth: true,
				center: false,
				loop: false
			},
			769: {
				margin: 20,
				autoWidth: false
			},
			993: {
				margin: 30
			}
		}
	});

	let owlCarousel = $('.main--education__wrapper');
	// Добавить transition для центрального изображения
	if ($(window).width() > 768) {
		owlCarousel.on('changed.owl.carousel', function() {
			let center = $('.center');
			center.addClass('transition');
			setTimeout(function() {
				center.removeClass('center transition');
			}, 300);
			let currentItem = $(this).find('.owl-item.active');
			if (!currentItem.hasClass('center')) {
				$(this).find('.owl-item').removeClass('center');
				currentItem.addClass('center');
			}
		});
	} else {
		owlCarousel.on('changed.owl.carousel', function (event) {
			let owl1 = $(this);
			let currentIndex1 = event.item.index;
			let itemsCount1 = event.item.count;

			if (currentIndex1 > 0) {
				owl1.parent('.row').find('.main--education__arrows').find('.owl-prev').fadeIn(100);
			} else {
				owl1.parent('.row').find('.main--education__arrows').find('.owl-prev').fadeOut(100);
			}
		});
	}

	// убрать стрелку owl-next
	owlCarousel.on('changed.owl.carousel', function(event) {
		let items = event.item.count;
		let item  = event.item.index;
		let page  = event.page.size;
		if ($(window).width() > 720 && $(window).width() <= 768) {
			if (item + page + 2 >= items) {
				$(".owl-next").fadeOut(100);
			} else {
				$(".owl-next").fadeIn(100);
			}
		} else if ($(window).width() > 600 && $(window).width() <= 720) {
			if (item + page + 1 >= items) {
				$(".owl-next").fadeOut(100);
			} else {
				$(".owl-next").fadeIn(100);
			}
		} else if ($(window).width() <= 600) {
			if (item + page >= items) {
				$(".owl-next").fadeOut(100);
			} else {
				$(".owl-next").fadeIn(100);
			}
		}
	});

	$('.cat').click(function(){
		$('.cat .circle').toggleClass('active');
		$('.circle--answer').toggleClass('active');
	});

	let menuBtn = $('.burger');
	if ($(window).width() <= 992 && $(window).width() > 700) {
		let menu = $('.block--menu');
		menuBtn.click( function(){
			menu.slideToggle('medium').toggleClass('active');
			$('html').toggleClass("overlay");
			$('.burger').toggleClass('open');
		});
	} else {
		menuBtn.click( function(){
			$('.menu--mobile').toggleClass('active');
			$('html').toggleClass("overlay");
		});
	}

	$('.burger.close').click(function(){
		$('html').removeClass("overlay");
	});

	let header = $(".header--wrapper__bottom");
	let offset = header.offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > offset) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	});
	$('.location span').click(function(event) {
		event.stopPropagation();
		$(this).parent().find('.icon--cities').toggleClass('active');
		$(document).on("click", function(event) {
			if(!$(event.target).closest(".icon--cities").length && !$(event.target).is(".icon--cities") && $(".icon--cities").hasClass("active")) {
				$(".icon--cities").removeClass("active");
			}
		});
	});

	$('.location--address span').click(function(event) {
		event.stopPropagation();
		$(this).parent().parent().toggleClass('active')
		$(this).parent().find('.icon--cities').toggleClass('active');
		$('html').addClass('overlay');
		$(document).on("click", function(event) {
			if(!$(event.target).closest(".location--address").length && !$(event.target).is(".location--address") && $(".location--address").hasClass("active")) {
				$(".icon--cities").removeClass("active");
				$(".location--address").removeClass("active");
				$('html').removeClass('overlay');
			}
		});
	});

	// inner--categories__wrapper
	if ($(window).width() <= 1100) {
		$('.inner--categories__wrapper').owlCarousel({
			margin: 30,
			smartSpeed: 700,
			navContainer: $('.inner--categories__arrows'),
			navText: [
				'<div class="arrows--prev"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>',
				'<div class="arrows--next"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>'
			],
			dots: false,
			loop: false,
			items: 3,
			responsive: {
				0: {
					autoWidth: true,
					margin: 20,
					nav: false,
					navContainer: $(''),
				},
				600: {
					nav: true,
					autoWidth: true
				},
				993: {
					autoWidth: true
				}
			}
		});
	
		$('.inner--categories__wrapper').on('changed.owl.carousel', function (event) {
			let owl = $(this);
			let currentIndex = event.item.index;
			let itemsCount = event.item.count;
		
			if (currentIndex > 0) {
				owl.parent('.row').find('.inner--categories__arrows').find('.owl-prev').fadeIn(100);
			} else {
				owl.parent('.row').find('.inner--categories__arrows').find('.owl-prev').fadeOut(100);
			}
			// if ($(window).width() > 900) {
			// 	if (currentIndex > 0){
			// 		owl.parent('.row').find('.inner--categories__arrows').find('.owl-next').fadeOut(100);
			// 	} else {
			// 		owl.parent('.row').find('.inner--categories__arrows').find('.owl-next').fadeIn(100);
			// 	}
			// } else if ($(window).width() > 600 && $(window).width() <= 900) {
			// 	if (currentIndex > 1){
			// 		owl.parent('.row').find('.inner--categories__arrows').find('.owl-next').fadeOut(100);
			// 	} else {
			// 		owl.parent('.row').find('.inner--categories__arrows').find('.owl-next').fadeIn(100);
			// 	}
			// }
		});
	}
	
	$('.inner--teachers__wrapper').owlCarousel({
		margin: 30,
		smartSpeed: 700,
		navContainer: $('.inner--teachers__arrows'),
		navText: [
			'<div class="arrows--prev"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>',
			'<div class="arrows--next"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>'
		],
		dots: false,
		loop: false,
		items: 3,
		responsive: {
			0: {
				autoWidth: true,
				margin: 20,
				nav: false,
				navContainer: $('')
			},
			600: {
				autoWidth: true,
				nav: true,
				navContainer: $('.inner--teachers__arrows')
			},
			993: {
				autoWidth: false
			}
		}
	});

	$('.inner--teachers__wrapper').on('changed.owl.carousel', function (event) {
		let owl = $(this);
		let currentIndex = event.item.index;
		let itemsCount = event.item.count;
	
		if (currentIndex > 0) {
			owl.parent('.row').find('.inner--teachers__arrows').find('.owl-prev').fadeIn(100);
			
		} else {
			owl.parent('.row').find('.inner--teachers__arrows').find('.owl-prev').fadeOut(100);
			
		}
		// if ($(window).width() > 900) {
		// 	if (currentIndex > 3){
		// 		owl.parent('.row').find('.inner--teachers__arrows').find('.owl-next').fadeOut(100);
		// 	} else {
		// 		owl.parent('.row').find('.inner--teachers__arrows').find('.owl-next').fadeIn(100);
		// 	}
		// } else if ($(window).width() > 600 && $(window).width() <= 900) {
		// 	if (currentIndex > 4){
		// 		owl.parent('.row').find('.inner--teachers__arrows').find('.owl-next').fadeOut(100);
		// 	} else {
		// 		owl.parent('.row').find('.inner--teachers__arrows').find('.owl-next').fadeIn(100);
		// 	}
		// }
	});

	$('.inner--instructors__wrapper').owlCarousel({
		margin: 30,
		smartSpeed: 700,
		navContainer: $('.inner--instructors__arrows'),
		navText: [
			'<div class="arrows--prev"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>',
			'<div class="arrows--next"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="#F0F0F0"/><path d="M10.6564 6.98486L4.01574 0.344238C3.55676 -0.114746 2.81457 -0.114746 2.36047 0.344238L1.25696 1.44775C0.797971 1.90674 0.797971 2.64893 1.25696 3.10303L5.9591 7.81494L1.25207 12.522C0.793088 12.981 0.793088 13.7231 1.25207 14.1772L2.35559 15.2856C2.81457 15.7446 3.55676 15.7446 4.01086 15.2856L10.6515 8.64502C11.1154 8.18604 11.1154 7.44385 10.6564 6.98486Z" fill="white"/></svg></div>'
		],
		dots: false,
		loop: false,
		items: 4,
		responsive: {
			0: {
				autoWidth: true,
				margin: 20,
				nav: false,
				navContainer: $('')
			},
			600: {
				autoWidth: true,
				nav: true,
				navContainer: $('.inner--instructors__arrows')
			},
			993: {
				autoWidth: false
			}
		}
	});

	$('.inner--instructors__wrapper').on('changed.owl.carousel', function (event) {
		let owl = $(this);
		let currentIndex = event.item.index;
		let itemsCount = event.item.count;
	
		if (currentIndex > 0) {
			owl.parent('.row').find('.inner--instructors__arrows').find('.owl-prev').fadeIn(100);
			
		} else {
			owl.parent('.row').find('.inner--instructors__arrows').find('.owl-prev').fadeOut(100);
			
		}
		// if ($(window).width() > 900) {
		// 	if (currentIndex > 3){
		// 		owl.parent('.row').find('.inner--instructors__arrows').find('.owl-next').fadeOut(100);
		// 	} else {
		// 		owl.parent('.row').find('.inner--instructors__arrows').find('.owl-next').fadeIn(100);
		// 	}
		// } else if ($(window).width() > 600 && $(window).width() <= 900) {
		// 	if (currentIndex > 5){
		// 		owl.parent('.row').find('.inner--instructors__arrows').find('.owl-next').fadeOut(100);
		// 	} else {
		// 		owl.parent('.row').find('.inner--instructors__arrows').find('.owl-next').fadeIn(100);
		// 	}
		// } else if ($(window).width() > 0 && $(window).width() <= 600) {
		// 	if (currentIndex > 6){
		// 		owl.parent('.row').find('.inner--instructors__arrows').find('.owl-next').fadeOut(100);
		// 	} else {
		// 		owl.parent('.row').find('.inner--instructors__arrows').find('.owl-next').fadeIn(100);
		// 	}
		// }
	});

	$('.inner--buttons a[href*="#"]').on('click', function() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 80
		}, 700);
		return false;
	});

	$('.modal--oneclick').click(function(){
		$('#modal--general').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--A').click(function(){
		$('#modal--A').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--B').click(function(){
		$('#modal--B').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--Bst').click(function(){
		$('#modal--Bst').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--Bvip').click(function(){
		$('#modal--Bvip').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});
	
	$('.modal--Bfast').click(function(){
		$('#modal--Bfast').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--C').click(function(){
		$('#modal--C').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--D').click(function(){
		$('#modal--D').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--E').click(function(){
		$('#modal--E').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});
	
	$('.modal--installment').click(function(){
		$('#modal--installment').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--students').click(function(){
		$('#modal--students').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});
	$('.modal--capital').click(function(){
		$('#modal--capital').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--salary').click(function(){
		$('#modal--salary').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--consultation').click(function(){
		$('#modal--consultation').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--online').click(function(){
		$('#modal--online').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.modal--close').click(function(){
		$('.modal').fadeOut().css({"opacity" : "0", "z-index" : "-1"});
		$('html').removeClass('overlay');
	});

	$('.modal--spec').click(function(){
		$('#modal--spec').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$(".blog--news__header--right a").on("click", function () {
		let href = $(this).attr("href");
		if ($(window).width() > '1200'){
			$("html, body").animate({
					scrollTop: $(href).offset().top - 100
			}, {
					duration: 800,
					easing: "linear"
			});
		}
		if ($(window).width() <= '1200'){
			$("html, body").animate({
				scrollTop: $(href).offset().top - 65
		}, {
				duration: 800,
				easing: "linear"
		});
		}
		return false;
	});

	let headerWrapper = document.querySelector('.header--wrapper'),
			headerWrapperTop = document.querySelector('.header--wrapper__top');

	if (headerWrapperTop) {
		headerWrapper.classList.add('height--more');
	} else {
		headerWrapper.classList.add('height--less');
	}

	if($('label').children().hasClass('select')){
		$('form').addClass('with--address');
	}

	// setTimeout(() => {
	// 	$('.location--current').addClass('active');
	// }, "5000");
	

	$('.location--current__buttons .no').click(function(){
		$('.location--current').hide();
		$('#location--modal').css({"opacity" : "1", "z-index" : "999999"}).hide().fadeIn();
		$('html').addClass('overlay');
	});

	$('.open--categoriesPriceInfo').click(function(){
		$(this).parent().parent().find('.open--categoriesPriceInfo__hidden').slideToggle();
	});

	$('.list li > span').click(function(){
		$(this).parent().find('.submenu').toggleClass('active');
	});

	if (localStorage.getItem('modalShown') !== 'true') {
    $('.modal--spam').css('opacity', '1').css('z-index', '9999999');
    $('.modal--spam .button').click(function(){
      $('.modal--spam').css('opacity', '0').css('z-index', '-1');
      localStorage.setItem('modalShown', 'true');
    });
  }

	$('.modal--spam .modal--wrapper__left .button').click(function(){
		$('.modal--spam').css({'opacity': '0', 'z-index': '-1'});
		localStorage.setItem('modalShown', 'true');
	});

});

