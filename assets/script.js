$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    pagination: true,
    autoPlay: true
  });
});
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  autoplay: true,
  smartSpeed: 5000,
  autoplayTimeout: 7000,
  items: 1,
  startPosition: 1,
})