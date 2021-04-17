$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
  	items: 5, //everytime 5 items
  	loop: true, //continue after last content 
  	nav: true, // for showing <> this sign
  	margin: 5,
  	 responsive:{
        0:{
            items:1,
            nav:true
        },
        576:{
            items:3
        },
        768:{
            items:3
        },
        992:{
            items:5
        },
        1200:{
            items:5
        }
    }
  });

  	//slick-slider-multiple
   $('.multiple-items').slick({
  		infinite: false,
  		slidesToShow: 3,
  		slidesToScroll: 3,
  		arrows:true,
  		dots: true
	});

   $('.autoplay').slick({
  		slicklidesToShow: 4,
  		slidesToScroll: 3,
  		autoplay: true,
  		autoplaySpeed: 2000
	});

   //isotope 
   // init Isotope
var $grid = $('.items').isotope({
  // options
});
// filter items on button click
$('.menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


});