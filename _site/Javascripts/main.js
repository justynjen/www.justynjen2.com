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
    strings:["Traveler", "Blogger", "Digital Nomad"],
    typeSpeed: 60,
    backDelay: 800,
    loop: true,
    cursor: true
  });
});

  $('.quiz-1').click(function(){
    console.log('x clicked!');
    $('#quiz-frame').replaceWith({
    strings:['<h2>Ready to go out in Canggu? <img src="images/clink.png" alt="clink-drink"></h2><nav><button class="quiz-3" type="button" name="button">Yes Please!</button><button class="quiz-2" type="button" name="button">No, Im a grandma <img src="images/grandma.png" alt="grandma"></button>'],
    typeSpeed: 60,
  });
});
  $('.quiz-2').click(function(){
    $('#quiz-frame').replaceWith({
    strings:["<h2>You're lame.<i class='fa fa-thumbs-o-down' aria-hidden='true'></i></h2>"],
    typeSpeed: 60
  });
});
  $('.quiz-3').click(function(){
    console.log('x clicked!');
    $('#quiz-frame').replaceWith({
    strings:['<h2>What do you feel like doing?</h2><nav><button class="quiz-4" type="button" name="button">Get Some </button><button class="quiz-6" type="button" name="button">Drinks with friends</button><button class="quiz-8" type="button" name="button">Dance yo ass off</button></nav>'],
    typeSpeed: 60
  });
});
$('.quiz-4').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2>Do you have Tinder</h2><nav><button class="quiz-5" type="button" name="button">DUHHHH</button><button class="quiz-8" type="button" name="button">Erm No</button></nav>'],
    typeSpeed: 60
  });
});
$('.quiz-5').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2>Use Tinder yah slut</h2>'],
    typeSpeed: 60,
  });
});
$('.quiz-6').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2>Do you want photos with your friends?</h2><nav><button class="quiz-7" type="button" name="button">Do it for the gram <img src="images/gram.png" alt="instagram-icon"></button><button class="quiz-8"type="button" name="button">No, all my friends are ugly</button><!--home by?--></nav>'],
    typeSpeed: 60,
  });
});
$('.quiz-7').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2>La Laguna is your jam</h2></section>'],
    typeSpeed: 60,
  });
});
$('.quiz-8').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2>How late do you want to stay out?</h2><nav><button class="quiz-9"type="button" name="button">Out till sunrise Bitches</button><button class="quiz-10"type="button" name="button">Home by 11</button><button class="quiz-7"type="button" name="button">Home by 7 for the grans</button></nav>'],
    typeSpeed: 60,
  });
});
$('.quiz-9').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2>You are going to Sandbar! Congratulations</h2>'],
    typeSpeed: 60,
  });
});
$('.quiz-10').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2>Do you want a tattoo</h2><nav><button class="quiz-12"type="button" name="button">Yes I love pain <img src="images/pain.png" alt="pane-face"></button><button class="quiz-11" type="button" name="button">No I am all tatted out</button></nav>'],
    typeSpeed: 60,
  });
});
$('.quiz-11').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2> Get your ass to old mans</h2>'],
    typeSpeed: 60,
  });
});
$('.quiz-12').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2>What kind of guys are in too?</h2><nav><button class="quiz-13"type="button" name="button">Biker Dude</button><button class="quiz-14" type="button" name="button">Sk8r Boi</button><button class="quiz-15"type="button" name="button">Yuppies</button></nav>'],
    typeSpeed: 60,
  });
});
$('.quiz-13').click(function(){
  console.log('x clicked!');
  $('#quiz-frame').replaceWith({
    strings:['<h2>Deus is yo jam</h2>'],
    typeSpeed: 60,
  });
});
$('.quiz-14').click(function(){
  $('#quiz-frame').replaceWith({
    strings:['<h2>Pick your posion at Pretty Posion babe</h2></section>'],
    typeSpeed: 60,
  });
});
$('.quiz-15').click(function(){
  $('#quiz-frame').replaceWith({
    strings:['<h2>Head over to the lawn you sexy fox</h2>'],
    typeSpeed: 60,
  });
});
