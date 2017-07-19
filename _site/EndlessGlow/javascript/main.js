// Wait for the document to be ready
$(document).ready(function(){

  // variables
  var windowHeight = null,
      scrollPosition = null;

  // Initialize the carousel
  $(".owl-carousel").owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   navText: ["",""]
  });

  // check when window scrolls
  function checkScroll() {

    // log
    console.log('scrollin');

    // variables
    scrollPosition = $(document).scrollTop();

    // check if we are half way
    if(scrollPosition >= (windowHeight / 2) && ! $('body').hasClass('popup-show') ){
      $('body').toggleClass('popup-show popup-hide');
    } else if(scrollPosition < (windowHeight / 2) && $('body').hasClass('popup-show') ){
      $('body').toggleClass('popup-show popup-hide');
    }


  }

  // gets variables
  function getVariables() {

    // log
    console.log('getVariables()');

    // variables
    windowHeight = $(document).outerHeight();

  }


  // Bind events
  $(document).on('scroll', checkScroll);
  $(window).on('load resize', getVariables);

});
