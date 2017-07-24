// Wait for the document to be ready
$(document).ready(function(){

  // variables
  var windowHeight = null,
      scrollPosition = null;

  // Initialize the carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["",""],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });

  // check when window scrolls
  function checkScroll(){

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
  function getVariables(){
    // variables
    windowHeight = $(document).outerHeight();
  }

  // Bind events
  $(document).on('scroll', checkScroll);
  $(window).on('resize', getVariables);

  // Get variables
  getVariables();

  //close the popup
  $('.fa-times').click(function(){
      $('#popped').css({
        visibility: "hidden"
      });
  });

  // Show mobile navigation
  $('.fa-bars').click(function(){
      $('#mobile-nav').css({
        visibility:"visible"
      });
  });

  // close the mobile navigation
  $('.fa-times').click(function(){
      $('#mobile-nav').css({
        visibility: "hidden"
      });
  });
});
