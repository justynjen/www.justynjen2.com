  $(document).ready(function(){
  //wait for document to load
  //log
  console.log('Document Ready!');

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
  $('.fa-times-circle-o').click(function(){
    console.log('x clicked!');
    $('#mobile-nav').css({
      visibility: "hidden"
    });
  });

  $('#typed').typed({
    strings:["Traveler", "Blogger", "Belieber"],
    typeSpeed: 90,
    backDelay: 800,
    loop: true,
    cursor: true
  });
});

$('.quiz-2').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-2-frame').addClass('active');
});
$('.quiz-3').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-3-frame').addClass('active');
});
$('.quiz-4').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-4-frame').addClass('active');
});
$('.quiz-5').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-5-frame').addClass('active');
});
$('.quiz-6').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-6-frame').addClass('active');
});
$('.quiz-7').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-7-frame').addClass('active');
});
$('.quiz-8').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-8-frame').addClass('active');
});
$('.quiz-9').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-9-frame').addClass('active');
});
$('.quiz-10').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-10-frame').addClass('active');
});
$('.quiz-11').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-11-frame').addClass('active');
});
$('.quiz-12').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-12-frame').addClass('active');
});
$('.quiz-13').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-13-frame').addClass('active');
});
$('.quiz-14').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-14-frame').addClass('active');
});
$('.quiz-15').click(function(){
  $('.quiz').removeClass('active');
  $('.quiz-15-frame').addClass('active');
});
