//Common scripts


//ie fix
if(!(window.console && console.log)) {
	console = {
		log: function(){},
		debug: function(){},
		info: function(){},
		warn: function(){},
		error: function(){}
	};
}

$(function () {

	//setup navbar
	var $navBtn = $('#navbar-btn'),
		$navMenu = $('.menu');

	$navBtn.on('click', function(event) {
		event.preventDefault();

		if( $navMenu.hasClass('js-nav-open')) {
			$navMenu.removeClass('js-nav-open').slideUp();
		} else {
			$navMenu.addClass('js-nav-open').slideDown();
		}
	});


	//setup product and supllier carousels
	$('#carousel-1 .owl-carousel').owlCarousel({
		rtl: true,
		navContainer: '#carousel-1 .carousel__wrap',
		nav: true,
		loop: true,
		margin: 18,
		responsive: {
			0: {
				items: 1
			},

			600: {
				items: 2
			},

			800: {
				items: 3
			},

			900: {
				items: 4
			}
		}
	});

	$('#carousel-2 .owl-carousel').owlCarousel({
		rtl: true,
		navContainer: '#carousel-2 .carousel__wrap',
		nav: true,
		loop: true,
		margin: 18,
		responsive: {
			0: {
				items: 1
			},

			600: {
				items: 2
			},

			800: {
				items: 3
			},

			900: {
				items: 4
			}
		}
	});

	$('#carousel-3 .owl-carousel').owlCarousel({
		rtl: true,
		navContainer: '#carousel-3 .carousel__wrap',
		nav: true,
		loop: true,
		margin: 18,
		responsive: {
			0: {
				items: 1
			},

			600: {
				items: 2
			},

			800: {
				items: 3
			},

			900: {
				items: 4
			}
		}
	});

	$('#carousel-4 .owl-carousel').owlCarousel({
		rtl: true,
		navContainer: '#carousel-4 .carousel__wrap',
		nav: true,
		loop: true,
		margin: 18,
		responsive: {
			0: {
				items: 1
			},

			600: {
				items: 2
			},

			800: {
				items: 3
			},

			900: {
				items: 4
			}
		}
	});

	$('#supplier .owl-carousel').owlCarousel({
		rtl: true,
		navContainer: '#supplier .supplier__carousel-wrap',
		nav: true,
		loop: true,
		margin: 100,
		responsive: {
			0: {
				items: 1
			},

			400: {
				items: 2
			},

			600: {
				items: 3
			},

			800: {
				items: 4
			},

			960: {
				items: 5
			}
		}
	});

});
