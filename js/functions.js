$(() => {
	// Observer API
	const boxes = document.querySelectorAll('.lazyload, .animate')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-src') && !entry.target.classList.contains('loaded')) {
				entry.target.classList.add('loaded')

				entry.target.src = entry.target.getAttribute('data-src')
			}

			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-srcset') && !entry.target.classList.contains('loaded')) {
				entry.target.srcset = entry.target.getAttribute('data-srcset')

				entry.target.classList.add('loaded')
			}

			if (entry.intersectionRatio >= 0.2 && entry.target.classList.contains('animate') && !entry.target.classList.contains('animated')) {
				entry.target.classList.add('animated')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))
	

	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')


	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ( !e.target.closest('.header-cats') && !e.target.closest('.header-catalog__open') ) {
			$('.header-catalog__open').removeClass('_active')
			$('.header-cats').removeClass('_show')
			$('.overlay-catalog').removeClass('_show')
			$('body').removeClass('_lock-add')
		}
	})

	// Открываем каталог в шапке
	$('body').on('click', '.header-catalog__open', function (e) {
		e.preventDefault()

		$(this).addClass('_active')
		$('.header-cats').addClass('_show')
		$('.overlay-catalog').addClass('_show')

		$('body').addClass('_lock-add')
	})

	// Закрываем каталог в шапке
	$('body').on('click', '.header-cats__close', function (e) {
		e.preventDefault()

		$('.header-catalog__open').removeClass('_active')
		$('.header-cats').removeClass('_show')
		$('.overlay-catalog').removeClass('_show')

		$('body').removeClass('_lock-add')
	})

	$('body').on('click', '.header-cats__item-open', function () {
		if( $(window).width() < 1024 )
		{
			// if ($(this).hasClass('_active')) {
			// 	$(this).removeClass('_active')
			// 	$(this).next().removeClass('_show')
			// } else {
			// 	$(this).addClass('_active')
			// 	$(this).next().addClass('_show')
			// }

			if ($(this).hasClass('_active')) {
				$(this).removeClass('_active')
				$(this).next().slideUp(300)
			} else {
				$(this).addClass('_active')
				$(this).next().slideDown(300)
			}
		}
	})

	// Открываем меню в шапке
	$('body').on('click', '.header__btn-burger', function (e) {
		e.preventDefault()
		
		$('.header__wrap').addClass('_show')
		$('body').addClass('_lock-menu')
	})

	// Закрываем меню в шапке
	$('body').on('click', '.header__wrap-close', function (e) {
		e.preventDefault()

		$('.header__wrap').removeClass('_show')
		$('body').removeClass('_lock-menu')
	})

	$('body').on('click', '.filter-use__link', function (e) {
		e.preventDefault()

		$(this).closest('.filter-use__item').remove()
	})


	$('.filter__item-more').click(function(e) {
		e.preventDefault()

		if ( $(this).hasClass('_active') ) {
			$(this).removeClass('_active')

			$(this).closest('.filter__data').removeClass('_all')
		} else {
			$(this).addClass('_active')

			$(this).closest('.filter__data').addClass('_all')
		}
	})

	$('.filter__data').each(function(){
		if ( $(this).find('.checkbox').length > 4 ) {
			$(this).find('.filter__item-more').addClass('_show')
		}
	})


	$('body').on('click', '.filter-open', function (e) {
		e.preventDefault()

		$('.aside-filter').addClass('_show')

		$('body').addClass('_filter-open-mob')
	})

	$('body').on('click', '.filter-head__close', function (e) {
		e.preventDefault()

		$('.aside-filter').removeClass('_show')

		$('body').removeClass('_filter-open-mob')
	})


	// Мини всплывающие окна
	$('.mini-modal__btn').click(function (e) {
		e.preventDefault()

		const parent = $(this).closest('.mini-modal')

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
			$('.mini-modal__modal').removeClass('_active')


			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini-modal__btn').removeClass('_active')
			$(this).addClass('_active')

			$('.mini-modal__modal').removeClass('_active')
			parent.find('.mini-modal__modal').addClass('_active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ( !e.target.closest('.mini-modal') ) {
			$('.mini-modal__modal, .mini-modal__btn').removeClass('_active')
			$('body').removeClass('_lock-mini')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})

	// Аккордион простой
	$('body').on('click', '.accord__open', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.accord__item')

		if( parent.hasClass('_active') ) {
			parent.removeClass('_active')
			parent.find('.accord__data').slideUp(300)
		} else {
			parent.addClass('_active')
			parent.find('.accord__data').slideDown(300)
		}
	})

	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs__button_js', function(e) {
		e.preventDefault()

		if( !$(this).hasClass('_active') ) {
			let parent = $(this).closest('.tabs-container')
			let activeTab = $(this).data('content')
			let level = $(this).data('level')

			parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
			parent.find('.tab-content.' + level).removeClass('_active')

			$(this).addClass('_active')
			$(activeTab).addClass('_active')
		}
	})

	if( locationHash && $('.tabs-container').length ) {
		let activeTab = $('.tabs__button_js[data-content="'+ locationHash +'"]')
		let parent = activeTab.closest('.tabs-container')
		let level = activeTab.data('level')

		parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
		parent.find('.tab-content.' + level).removeClass('_active')

		activeTab.addClass('_active')
		$(locationHash).addClass('_active')

		$('html, body').stop().animate({
			scrollTop: $(locationHash).offset().top - 120
		}, 1000)
	}


	// Маска ввода
	$('input[type=tel]').each(function(){
		let datamask = $(this).data('mask');

		$(this).inputmask(`${datamask}`, {
			showMaskOnHover: false
		})
	})

	// Кастомный select
	$('select').niceSelect()


	// Fancybox
	Fancybox.getDefaults().dragToClose = false;
	Fancybox.getDefaults().placeFocusBack = false;

	// Всплывающие окна
	$('body').on('click', '.modal-btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}],
		{
			on: {
				init: (fancyboxRef) => {
					if ($('.modal-product__slider').length) {
						new Swiper('.modal-product__slider:not(.swiper-initialized)', {
							loop: false,
							watchSlidesProgress: true,
							watchOverflow: true,
							spaceBetween: 0,
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
							navigation: {
								nextEl: '.slider-button-next',
								prevEl: '.slider-button-prev'
							},
						})
					}

					if ( $(this).attr('data-modal-top') ) {
						$('body').addClass('_top-modal')
					}
				},
				destroy: (fancyboxRef) => {
					if ( $(this).attr('data-modal-top') ) {
						$('body').removeClass('_top-modal')
					}
				},
			},
		})
	})


	// Отправка форм
	$('body').on('submit', '.form.ajax-submit', function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src  : '#modal-cod',
			type : 'inline',
			opts : {
				touch : false,
				speed : 300,
				backFocus : false,
				trapFocus : false,
				autoFocus : false,
				mobile : {
					clickSlide: "close"
				}
			}
		}])
	})


	// Увеличение картинки
	Fancybox.bind('.fancy-img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Аккордион
	$('body').on('click', '.accordion__title', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.accordion__item')
		let accordion = $(this).closest('.accordion')

		if( parent.hasClass('_active') ) {
			parent.removeClass('_active')
			parent.find('.accordion__data').slideUp(300)
		} else {
			accordion.find('.accordion__item').removeClass('_active')
			accordion.find('.accordion__data').slideUp(300)

			parent.addClass('_active')
			parent.find('.accordion__data').slideDown(300)
		}
	})

	const $countdown = $('#countdown');
    const deadlineStr = $countdown.data('deadline');
    const deadline = new Date(deadlineStr).getTime();

    const updateTimer = () => {
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        $countdown.text('Время вышло!');
			return;
    }

		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
		const seconds = Math.floor((timeLeft / 1000) % 60);

		$countdown.find('.days').text(String(days).padStart(2, '0'));
		$countdown.find('.hours').text(String(hours).padStart(2, '0'));
		$countdown.find('.minutes').text(String(minutes).padStart(2, '0'));
		$countdown.find('.seconds').text(String(seconds).padStart(2, '0'));
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // запуск одразу
})


$(window).on('load', () => {
	
})


// Вспомогательные функции
const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}

function setHeight(className){
    let maxheight = 0

    className.each(function() {
		let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
			maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}

const is_touch_device = () => !!('ontouchstart' in window)