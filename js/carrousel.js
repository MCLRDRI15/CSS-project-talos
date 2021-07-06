
window.addEventListener('load', function(){
	new Glider(document.querySelector('.testimonial'), {


  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: '.points',
  arrows: {
    prev: '.anterior',
    next: '.siguiente'
  },
  responsive: [
    {
      // screens greater than >576px
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 250,
        duration: 0.25
      }
    }
  ]

	});
});