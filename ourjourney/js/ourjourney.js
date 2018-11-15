
$(function(){
  $('.slider').slick({
    accessibility: false,
    fade: true,
    dots: true,
    arrows: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    mobileFirst: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
 });

 $(function() {
 	$('.list-mv07').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
 		if(isInView){
 			$(this).stop().addClass('mv07');
 		}
 		else{
 			$(this).stop().removeClass('mv07');
 		}
 	});
 });
