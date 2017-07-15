$(document).ready(function() {
  $('.no-fouc').removeClass('no-fouc');
});

$('#slides').slidejs({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: true,
});
