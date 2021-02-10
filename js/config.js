
(function($) {

  "use strict";
  //scroll
  var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.fixed-navbar-light'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

  //carousel opiniones
  var opiniones = $('.owl-carousel');
        opiniones.owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive: {
        0: {
        items: 1

        },
        480: {
        items: 1
        },
        768: {
        items: 1
        }
       }
       });

  
       //Animacion
       AOS.init({
        duration: 1200,
      })


 

  
})(jQuery);



 
  
 