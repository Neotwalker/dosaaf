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
				margin: 20
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
			if (currentIndex > 1){
				owl.parent('.row').find('.main--categories__arrows').find('.owl-next').fadeOut(100);
			} else {
				owl.parent('.row').find('.main--categories__arrows').find('.owl-next').fadeIn(100);
			}
		} else if ($(window).width() > 600) {
			if (currentIndex > 2){
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
		$('.circle').hide();
		$('.circle--answer').css({'top' : '-50px', 'left' : '165px', 'opacity': '1'});
		if ($(window).width() < 1550 && $(window).width() > 1450) {
			$('.circle--answer').css({'top' : '-50px', 'left' : '165px', 'opacity': '1'});
		} else if ($(window).width() <= 1450) {
			$('.circle--answer').css({'top' : '-40px', 'left' : '145px', 'opacity': '1'});
		}
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

	let header = $(".header--wrapper__bottom");
	let offset = header.offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > offset) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	});

});
