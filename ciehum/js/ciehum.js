$(function() {
  $("#panel-btn").click(function() {
    $("#panel").slideToggle(200);
    $("#panel-btn-icon").toggleClass("close");
    return false;
  });
});

$(document).ready(function() {
  $(".drawer").drawer();
});

$(function(){
  $('#back-to-top').hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>60){
      $('#back-to-top').fadeIn();
    }else{
      $('#back-to-top').fadeOut();
    }
  });

  $('back-to-top a').click(function(){
    $('body').animate({
      scrollTop:0
    }, 500);
    return false;
  });
});
