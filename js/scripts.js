// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 405) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=405, user-scalable=no'
}

$(() => {
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
});