// Wait for the document to be ready
$(document).ready(function(){

  // variables
  var windowHeight = null,
      scrollPosition = null;

  // Initialize the carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
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

  //close the popup
  $('.fa-times').click(function(){
    console.log('x clicked!');
    $('#popped').css({
      visibility: "hidden"
    });
  });
  //hamburger menu
  //click on the hamburger
  $('.fa-bars').click(function(){
    console.log('hamburger clicked!');
    //Show mobile navigation

    //change visibility
    $('#mobile-nav').css({
      visibility:"visible"
    });
  });
  // close the mobile navigation
  $('.fa-times').click(function(){
    console.log('x clicked!');
    $('#mobile-nav').css({
      visibility: "hidden"
    });
  });
