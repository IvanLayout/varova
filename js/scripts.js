// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
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

	if ($('.cart-products__slider').length) {
		new Swiper('.cart-products__slider', {
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
				'768': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 3,
				},
				'1200': {
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
					slidesPerView: 2
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

	if ($('.discounts__slider').length) {
		new Swiper('.discounts__slider', {
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
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
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

	if ($('.product-info').length) {
		galleryThumbs = new Swiper('.product-thumbs', {
			spaceBetween: 5,
			slidesPerView: 'auto',
			direction: 'horizontal',
			loop: false,
			speed: 500,
			watchOverflow: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 5,
					slidesPerView: 'auto',
					direction: 'horizontal',
				},
				'768': {
					spaceBetween: 5,
					slidesPerView: 5,
					direction: 'vertical',
				}
			}
		})

		new Swiper('.product-images__slider', {
			spaceBetween: 5,
			loop: false,
			speed: 500,
			watchOverflow: true,
			thumbs: {
				swiper: galleryThumbs
			}
		})
	}

	//Ползунки
	$priceRange = $("#price_range").ionRangeSlider({
		type     : 'double',
		min      : 0,
		max      : 100000,
		from     : 0,
		to       : 23500,
		step     : 1,
		onChange : function (data) {
			$('.price_range input.ot').val( data.from.toLocaleString('ru-RU'))
			$('.price_range input.do').val( data.to.toLocaleString('ru-RU') )
	
			let widthTextOt = $('.price_range input.ot').closest('.range').find('.irs-from')
			let widthTextDo = $('.price_range input.do').closest('.range').find('.irs-to')

			$('.price_range input.ot').closest('.range__field').find('.range-rub').css('margin-left', widthTextOt.width())
			$('.price_range input.do').closest('.range__field').find('.range-rub').css('margin-left', widthTextDo.width())
		},
		onUpdate: data => {
			$('.price_range input.ot').val( data.from.toLocaleString('ru-RU'))
			$('.price_range input.do').val( data.to.toLocaleString('ru-RU') )
		}
	}).data("ionRangeSlider")

	$('.price_range .range__input').keyup(function() {
		$priceRange.update({
			from : $('.price_range input.ot').val().replace(/\s/g,''),
			to : $('.price_range input.do').val().replace(/\s/g,'')
		})
	
		let widthTextOt = $('.price_range input.ot').closest('.range').find('.irs-from')
		let widthTextDo = $('.price_range input.do').closest('.range').find('.irs-to')

		$('.price_range input.ot').closest('.range__field').find('.range-rub').css('margin-left', widthTextOt.width())
		$('.price_range input.do').closest('.range__field').find('.range-rub').css('margin-left', widthTextDo.width())
	})

	$('.reset-btn').click(function(){
		if ( $('.price_range').length ) {
			$priceRange.reset()
		}
	})
	
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

	if ( $(window).width() < 1024 && !$('.main-info__images').hasClass('_mob') ) {	
		$('.main-info__images').removeClass('_pc')
		$('.main-info__images').addClass('_mob')

		$('.main-info__cols').find('.main-info__images').each(function() {
			let thisEl = $(this)
			$(this).find('.main-info__img1').each(function() {
				let parent = thisEl.closest('.main-info__cols').find('.main-info__gallery')

				$(this).appendTo(parent)
			})

			$(this).find('.main-info__images-flex').each(function() {
				let parent = thisEl.closest('.main-info__cols').find('.main-info__gallery')

				$(this).appendTo(parent)
			})
		})
	}

	if ($('.advantages-page__top-wrap').length){
		advantagesSlider1()
	}

	if ($('.advantages-page__wrap').length){
		advantagesSlider2()
	}

	$('body').on('click', '[data-href-link]', function(e) {
		e.preventDefault()

		let value = $(this).data('href-link'),
			$temp = $("<input>");

		$("body").append($temp);
		$temp.val(value).select();
		document.execCommand("copy");
		$temp.remove();
	})

	if ( $(window).width() < 1024 && !$('.tabs-container_choose').hasClass('_mob') ) {	
		$('.tabs-container_choose').removeClass('_pc')
		$('.tabs-container_choose').addClass('_mob')

		$('.tabs-container_choose').find('.tabs__data').each(function() {
			let parent = $(this).closest('.tabs-container_choose').find('.tab-title-mob')

			$(this).appendTo(parent)
		})
	}
});


$(window).on('load', () => {
	// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	// ScrollSmoother.create({
	// 	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
	// 	effects: true, // looks for data-speed and data-lag attributes on elements
	// 	smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	// });

	let informationAnim = gsap.timeline({
		scrollTrigger: {
			trigger: ".main-about",
			scrub: true,
			start: "top",
			end: $(window).height()*4,
			pin: true,
			// duration: 100,
			// markers: true,
			// onUpdate: (self) => console.log("direction:", self.direction),
			onToggle: (self) => {
				if (self.isActive == true ){
					$('.main-about').addClass('index')
				} else {
					$('.main-about').removeClass('index')
				}
			},
		}
	})
	// informationAnim.to('.main-about__items', { duration: 1, delay: 0, x: '-100%' }, "start")

	informationAnim
	.add([
		TweenMax.fromTo('.main-about__item1 .main-about__name span', { scale: .3, opacity: 1, ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, ease: "none" }, "start"),
		TweenMax.fromTo('.main-about__item1 .main-about__img3 img', { scale: .3, opacity: .3, x: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, x: 0, filter: 'blur(0)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item1 .main-about__img2 img', { scale: .3, opacity: .3, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item1 .main-about__img1 img', { scale: .3, opacity: .3, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item1 .main-about__coll', { scale: .3, opacity: .3, ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, ease: "none"}, "start")
	]).add([
		TweenMax.fromTo('.main-about__item1 .main-about__name span', { opacity: 1, scale: 1, ease: "none"}, { duration: 1, delay: 1, opacity: 0, scale: 1, ease: "none" }, "start"),
		TweenMax.fromTo('.main-about__item1 .main-about__img3 img', { opacity: 1, scale: 1, x: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: 1, opacity: 0, scale: 1.5, x: '60%', filter: 'blur(10px)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item1 .main-about__img2 img', { opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: 1, opacity: 0, scale: 1.5, y: '40%', filter: 'blur(10px)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item1 .main-about__img1 img', { opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: 1, opacity: 0, scale: 1.5, y: "-50%", filter: 'blur(10px)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item1 .main-about__coll', { opacity: 1, scale: 1, ease: "none"}, { duration: 1, delay: 1, opacity: 0, scale: 1, ease: "none"}, "start")
	]).add([
		TweenMax.fromTo('.main-about__item2 .main-about__name span', { scale: 0, opacity: 1, ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, ease: "none" }, "start"),
		TweenMax.fromTo('.main-about__item2 .main-about__img3 img', { scale: 0, opacity: 0, x: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, x: 0, filter: 'blur(0)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item2 .main-about__img2 img', { scale: 0, opacity: 0, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item2 .main-about__img1 img', { scale: 0, opacity: 0, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item2 .main-about__coll', { scale: 0, opacity: 0, ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, ease: "none"}, "start")
	]).add([
		TweenMax.fromTo('.main-about__item2 .main-about__name span', { opacity: 1, scale: 1, ease: "none"}, { duration: 1, delay: 1, opacity: .5, scale: 1, ease: "none" }, "start"),
		TweenMax.fromTo('.main-about__item2 .main-about__img3 img', { opacity: 1, scale: 1, x: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: 1, opacity: .5, scale: 1.5, x: '60%', filter: 'blur(10px)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item2 .main-about__img2 img', { opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: 1, opacity: .5, scale: 1.5, y: '40%', filter: 'blur(10px)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item2 .main-about__img1 img', { opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: 1, opacity: .5, scale: 1.5, y: "-50%", filter: 'blur(10px)', ease: "none"}, "start"),
		TweenMax.fromTo('.main-about__item2 .main-about__coll', { opacity: 1, scale: 1, ease: "none"}, { duration: 1, delay: 1, opacity: .5, scale: 1, ease: "none"}, "start")
	])

	// .fromTo('.main-about__item1 .main-about__name span', { scale: .3, ease: "none"}, { duration: 1, delay: 0.25, delay: .08, opacity: 1, scale: 1, ease: "none" }, "start")
	// .fromTo('.main-about__item1 .main-about__img3 img', { scale: .3, opacity: .3, x: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, x: 0, filter: 'blur(0)', ease: "none"}, "start")
	// .fromTo('.main-about__item1 .main-about__img2 img', { scale: .3, opacity: .3, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, "start")
	// .fromTo('.main-about__item1 .main-about__img1 img', { scale: .3, opacity: .3, y: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, "start")
	// .fromTo('.main-about__item1 .main-about__coll', { scale: .3, opacity: .3, ease: "none"}, { duration: 1, delay: .08, opacity: 1, scale: 1, ease: "none"}, "start")
	// // .fromTo('.main-about__item1', { scale: 1, opacity: 1 }, { duration: .3, delay: .6, opacity: 0, scale: 2, }, "start")
	// .to('.main-about__item1 .main-about__coll', { duration: 1, delay: .29, opacity: 0, scale: 1, ease: "none"}, "start")
	// .to('.main-about__item1 .main-about__name span', { duration: 1, delay: .29, opacity: 0, scale: 1, ease: "none"}, "start")
	// .to('.main-about__item1 .main-about__img3 img', { duration: 1, delay: .29, opacity: 0, scale: 1.5, x: '60%', filter: 'blur(10px)', ease: "none"}, "start")
	// .to('.main-about__item1 .main-about__img2 img', { duration: 1, delay: .29, opacity: 0, scale: 1.5, y: '40%', filter: 'blur(10px)', ease: "none"}, "start")
	// .to('.main-about__item1 .main-about__img1 img', { duration: 1, delay: .29, opacity: 0, scale: 1.5, y: "-50%", filter: 'blur(10px)', ease: "none"}, "start")
	// .fromTo('.main-about__item2 .main-about__coll', { scale: 0, opacity: 0, }, { duration: 1, delay: .5, opacity: 1, scale: 1, ease: "none"}, "start")
	// .fromTo('.main-about__item2 .main-about__name span', { scale: 0, opacity: 0}, { duration: 1, delay: .50, opacity: 1, scale: 1, ease: "none"}, "start")
	// .fromTo('.main-about__item2 .main-about__img3 img', { scale: 0, opacity: 0,  x: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .50, opacity: 1, scale: 1, x: 0, filter: 'blur(0)', ease: "none"}, "start")
	// .fromTo('.main-about__item2 .main-about__img2 img', { scale: 0, opacity: 0, x: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .50, opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, "start")
	// .fromTo('.main-about__item2 .main-about__img1 img', { scale: 0, opacity: 0, x: 0, filter: 'blur(0)', ease: "none"}, { duration: 1, delay: .50, opacity: 1, scale: 1, y: 0, filter: 'blur(0)', ease: "none"}, "start")
	// .to('.main-about__item2 .main-about__coll', { duration: 1, opacity: 1, ease: "none"}, "end")
	// .to('.main-about__item2 .main-about__name span', { duration: 1, opacity: 1, ease: "none"}, "end")
	// .to('.main-about__item2 .main-about__img3 img', { duration: 1, opacity: .5, scale: 1.5, x: '60%', filter: 'blur(10px)', ease: "none"}, "end")
	// .to('.main-about__item2 .main-about__img2 img', { duration: 1, opacity: .5, scale: 1.5, y: '40%', filter: 'blur(10px)', ease: "none"}, "end")
	// .to('.main-about__item2 .main-about__img1 img', { duration: 1, opacity: .5, scale: 1.5, y: "-50%", filter: 'blur(10px)', ease: "none"}, "end")


	// .fromTo('.main-about__item1 .main-about__name span', { scale: .2, opacity: .5 }, { duration: 0.1, delay: .05, opacity: 1, scale: 1 }, "start")
	// .fromTo('.main-about__item1 .main-about__img3 img', { scale: .3, opacity: .3 }, { duration: 0.1, delay: .05, opacity: 1, scale: 1}, "start")
	// .fromTo('.main-about__item1 .main-about__img2 img', { scale: .1, opacity: .1 }, { duration: 0.1, delay: .07, opacity: 1, scale: 1,}, "start")
	// .fromTo('.main-about__item1 .main-about__img1 img', { scale: .5, opacity: .5 }, { duration: 0.1, delay: .09, opacity: 1, scale: 1,}, "start")
	// .fromTo('.main-about__item1 .main-about__coll', { scale: 1, opacity: 1 }, { duration: 0.2, delay: .2, opacity: 0, scale: 2, x: '-30%' }, "start")
	// .to('.main-about__item1 .main-about__name span', { duration: 0.1, delay: .15, opacity: 0, scale: 2 }, "start")
	// .to('.main-about__item1 .main-about__img3 img', { duration: 0.1, delay: .15, opacity: 0, scale: 3, x: '250%' }, "start")
	// .to('.main-about__item1 .main-about__img2 img', { duration: 0.1, delay: .17, opacity: 0, scale: 3, y: '250%' }, "start")
	// .to('.main-about__item1 .main-about__img1 img', { duration: 0.1, delay: .19, opacity: 0, scale: 3, y: "-250%" }, "start")
	// .fromTo('.main-about__item2 .main-about__coll', { scale: 0, opacity: 0, x: "-100%" }, { duration: 0.1, opacity: 1, scale: 1, x: 0}, "end")
	// .fromTo('.main-about__item2 .main-about__name span', { scale: 0, opacity: 0}, { duration: 0.1, delay: .05, opacity: 1, scale: 1 }, "end")
	// .fromTo('.main-about__item2 .main-about__img3 img', { scale: 0, opacity: 0, x: "250%" }, { duration: 0.1, delay: .05, opacity: 1, scale: 1, x: 0}, "end")
	// .fromTo('.main-about__item2 .main-about__img2 img', { scale: 0, opacity: 0, y: "250%" }, { duration: 0.1, delay: .07, opacity: 1, scale: 1, y: 0}, "end")
	// .fromTo('.main-about__item2 .main-about__img1 img', { scale: 0, opacity: 0, y: "-250%" }, { duration: 0.1, delay: .09, opacity: 1, scale: 1, y: 0}, "end")
	// .to('.main-about__item2 .main-about__name span', { duration: 0.1, delay: 1.15, opacity: 0, scale: 2 }, "start")
	// .to('.main-about__img3 img', { duration: 0.1, delay: .15, opacity: 0, scale: 3, x: '250%' }, "start")
	// .to('.main-about__item2 .main-about__item2 .main-about__img2 img', { duration: 0.1, delay: 1.17, opacity: 0, scale: 3, y: '250%' }, "start")
	// .to('.main-about__item2 .main-about__img1 img', { duration: 0.1, delay: 1.19, opacity: 0, scale: 3, y: "-250%" }, "start")
	// .to('.main-about__coll', { duration: 0.1, delay: .1, opacity: 0, scale: 2 }, "start")
	// .to('.main-about__img3 img', { duration: 0.1, delay: .2, opacity: 0, scale: 2 }, "start")
	// .to('.main-about__img2 img', { duration: 0.1, delay: .3, opacity: 0, scale: 2 }, "start")
	// .to('.main-about__img1 img', { duration: 0.1, delay: .4, opacity: 0, scale: 2 }, "start")
	// .to('.main-about__name span', { duration: 0.1, delay: .5, opacity: 0, scale: 2 }, "start")

	if ( $('.main-info__top').length ) {
		setHeight($('.main-info__top'))
	}

	if ( $('.main-about__coll').length ) {
		setHeight($('.main-about__coll'))
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

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}

	if ( $('.main-info__top').length ) {
		$('.main-info__top').height('auto')

		setHeight($('.main-info__top'))
	}

	if ( $('.main-about__coll').length ) {
		$('.main-about__coll').height('auto')

		setHeight($('.main-about__coll'))
	}

	if ( $(window).width() < 1024 && !$('.main-info__images').hasClass('_mob') ) {	
		$('.main-info__images').removeClass('_pc')
		$('.main-info__images').addClass('_mob')

		$('.main-info__cols').find('.main-info__images').each(function() {
			let thisEl = $(this)
			$(this).find('.main-info__img1').each(function() {
				let parent = thisEl.closest('.main-info__cols').find('.main-info__gallery')

				$(this).appendTo(parent)
			})

			$(this).find('.main-info__images-flex').each(function() {
				let parent = thisEl.closest('.main-info__cols').find('.main-info__gallery')

				$(this).appendTo(parent)
			})
		})
	}

	if ( $(window).width() > 1023 && !$('.main-info__images').hasClass('_pc') ) {
		$('.main-info__images').removeClass('_mob')
		$('.main-info__images').addClass('_pc')

		$('.main-info__cols').find('.main-info__gallery').each(function() {
			let thisEl = $(this)
			$(this).find('.main-info__img1').each(function() {
				let parent = thisEl.closest('.main-info__cols').find('.main-info__images')

				$(this).appendTo(parent)
			})

			$(this).find('.main-info__images-flex').each(function() {
				let parent = thisEl.closest('.main-info__cols').find('.main-info__images')

				$(this).appendTo(parent)
			})
		})
	}

	if ($('.advantages-page__top-wrap').length){
		advantagesSlider1()
	}

	if ($('.advantages-page__wrap').length){
		advantagesSlider2()
	}

	if ( $(window).width() < 1024 && !$('.tabs-container_choose').hasClass('_mob') ) {	
		$('.tabs-container_choose').removeClass('_pc')
		$('.tabs-container_choose').addClass('_mob')

		$('.tabs-container_choose').find('.tabs__data').each(function() {
			let parent = $(this).closest('.tabs-container_choose').find('.tab-title-mob')

			$(this).appendTo(parent)
		})
	}

	if ( $(window).width() > 1023 && !$('.tabs-container_choose').hasClass('_pc') ) {
		$('.tabs-container_choose').removeClass('_mob')
		$('.tabs-container_choose').addClass('_pc')

		$('.tabs-container_choose').find('.tabs__data').each(function() {
			let indexTitle = $(this).data('title-index')

			let parent = $(this).closest('.tabs-container_choose').find('.tabs__item:eq('+ indexTitle + ')')

			$(this).appendTo(parent)
		})
	}
});

function advantagesSlider1(){
	if ( $(window).width() < 768 && !$('.advantages-page__top-wrap').hasClass('swiper-initialized') ) {
		$('.advantages-page__top-wrap').addClass('swiper')
		$('.advantages-page__top-flex').addClass('swiper-wrapper').removeClass('_flex')
		$('.advantages-page__top-item').addClass('swiper-slide')

		advantagesSliderImg1 = new Swiper('.advantages-page__top-wrap', {
			loop: true,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 16,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
		})
	} else if ($(window).width() > 767 && $('.advantages-page__top-wrap').hasClass('swiper-initialized')) {
		advantagesSliderImg1.destroy(true, true)

		$('.advantages-page__top-wrap').removeClass('swiper')
		$('.advantages-page__top-flex').removeClass('swiper-wrapper').addClass('_flex')
		$('.advantages-page__top-item').removeClass('swiper-slide')
	}
}

function advantagesSlider2(){
	if ( $(window).width() < 768 && !$('.advantages-page__wrap').hasClass('swiper-initialized') ) {
		$('.advantages-page__wrap').addClass('swiper')
		$('.advantages-page__flex').addClass('swiper-wrapper').removeClass('_flex')
		$('.advantages-page__item').addClass('swiper-slide')

		advantagesSliderImg2 = new Swiper('.advantages-page__wrap', {
			loop: true,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 16,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
		})
	} else if ($(window).width() > 767 && $('.advantages-page__wrap').hasClass('swiper-initialized')) {
		advantagesSliderImg2.destroy(true, true)

		$('.advantages-page__wrap').removeClass('swiper')
		$('.advantages-page__flex').removeClass('swiper-wrapper').addClass('_flex')
		$('.advantages-page__item').removeClass('swiper-slide')
	}
}