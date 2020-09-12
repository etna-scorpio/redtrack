import $ from 'jquery';
import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navContainer: '.slider__nav',
    responsive:{
      0:{
        items:1
      },
      1200:{
        items:2
      }
    }
  });
});
