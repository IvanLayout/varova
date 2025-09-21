// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 405) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=405, user-scalable=no'
}

$(() => {
	if ($('.products-slider').length) {
		new Swiper('.products-slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 20,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 4,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				},
			}
		})
	}

	if ($('.choose-slider').length) {
		new Swiper('.choose-slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 16,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 3,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				},
			}
		})
	}

	if ($('.reviews__slider').length) {
		new Swiper('.reviews__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 16,
			slidesPerView: 3,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 4,
				},
				'1200': {
					spaceBetween: 16,
					slidesPerView: 5,
				},
				'1500': {
					spaceBetween: 16,
					slidesPerView: 6,
				}
			},
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				},
			}
		})
	}

	if ($('.portfolio__slider').length) {
		new Swiper('.portfolio__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 16,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 3,
				},
				'1400': {
					spaceBetween: 16,
					slidesPerView: 4,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				},
			}
		})
	}
	
	// Добавление/Удаление (избранное)
	$('body').on('click', '.favorite-js', function (e) {
		e.preventDefault()
	
		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})
	
	
	// Добавление/Удаление (корзина)
	$('body').on('click', '.cart-js', function (e) {
		e.preventDefault()
	
		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})

	$('body').on('submit', '.form-ajax', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}])
	})
});


$(window).on('load', () => {
	let informationAnim = gsap.timeline({
		scrollTrigger: {
			trigger: ".main-about",
			scrub: true,
			start: "top",
			end: "bottom",
			pin: true,
			// duration: 100,
			// markers: true,
			onUpdate: (self) => console.log("direction:", self.direction),
			onToggle: (self) => {
				if (self.isActive == true ){
					$('.main-about').addClass('index')
				} else {
					$('.main-about').removeClass('index')
				}
			},
		}
	})
	informationAnim.to('.main-about__items', { duration: 1, delay: 0, x: '-100%' }, "start")

	if ( $('.main-info__top').length ) {
		setHeight($('.main-info__top'))
	}
});


$(window).on('resize', () => {
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 405) document.getElementsByTagName('meta')['viewport'].content = 'width=405, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}

	if ( $('.main-info__top').length ) {
		$('.main-info__top').height('auto')

		setHeight($('.main-info__top'))
	}
});