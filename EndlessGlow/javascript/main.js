$(document).ready(function() {
  console.log("Ready");
  // $('.no-fouc').removeClass('no-fouc');
  $(".nextLink").on("click", function() {
    var currentActiveLink = $(".imageShow");
    var nextActiveImage = currentActiveImage.next();

    if(nextActiveImage.length == 0){
      nextActiveImage = $(".carouselInner div").first();
    }

    currentActiveImage.removeClass("imageShow").addClass("imageHidden").css("z-index", -10);
    nextActiveImage.addClass("imageShow").removeClass("imageHidden").css("z-index", 20);
    $(".carouselInner div").not([currentActiveImage, nextActiveImage]).css("z-index", 1);

    e.preventDefault("");
  });
});







// $('#slides').slidesjs({
//   dots: true,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 6000,
//   speed: 800,
//   slidesToShow: 1,
//   adaptiveHeight: true,
// });
