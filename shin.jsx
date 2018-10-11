$(window).on('load',function(){
  var loading = function(){
    $('.loading').fadeOut('slow');
    $('.content').fadeIn('slow');
  };
  setTimeout(loading,1000); // setTimeoutを使って表示時間を設定する
});

$(function(){
        $('a[href^="#"]').click(function() {
          var speed = 800;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
      });

$(function(){
  $(window).on('scroll',function(){
    var scroll_top = $(window).scrollTop();
    $('header').each(function(){
      var offset_top = $(this).offset().top;
      if(scroll_top < offset_top + $('header').height() - 65 ){
        $('#btn01 section,#btn01 a,#btn01 span').addClass('is-show');
      }else{
        $('#btn01 section,#btn01 a,#btn01 span').removeClass('is-show');
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function(){
    var scroll_top = $(window).scrollTop();
    $('.about').each(function(){
      var offset_top = $(this).offset().top,
      top_margin = 125 ;
      if( scroll_top > offset_top - top_margin && scroll_top < offset_top + $('.about').height() - 70 ){
        $('#btn02 section,#btn02 a,#btn02 span').addClass('is-show');
      }else{
        $('#btn02 section,#btn02 a,#btn02 span').removeClass('is-show');
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function(){
    var scroll_top = $(window).scrollTop();
    $('.about').each(function(){
      var offset_top = $(this).offset().top,
      top_margin = 125 ;
      if( scroll_top > offset_top - top_margin && scroll_top < offset_top + $('.about').height() - 70 ){
        $('body').addClass('a');
      }else{
        $('body').removeClass('a');
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function(){
    var scroll_top = $(window).scrollTop();
    $('.works').each(function(){
      var offset_top = $(this).offset().top,
      top_margin = 70 ;
      if( scroll_top > offset_top - top_margin && scroll_top < offset_top + $('.works').height() - 60 ){
        $('#btn03 section,#btn03 a,#btn03 span').addClass('is-show');
      }else{
        $('#btn03 section,#btn03 a,#btn03 span').removeClass('is-show');
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function(){
    var scroll_top = $(window).scrollTop();
    $('.works').each(function(){
      var offset_top = $(this).offset().top,
      top_margin = 70 ;
      if( scroll_top > offset_top - top_margin && scroll_top < offset_top + $('.works').height() - 60 ){
        $('body').addClass('i');
      }else{
        $('body').removeClass('i');
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function(){
    var scroll_top = $(window).scrollTop();
    $('.works').each(function(){
      var offset_top = $(this).offset().top,
      top_margin = 70 ;
      if( scroll_top > offset_top - top_margin && scroll_top < offset_top + $('.works').height() - 60 ){
        $('.worksList').addClass('mv');
      }else{
        $('.worksList').removeClass('mv');
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function(){
    var scroll_top = $(window).scrollTop();
    $('.contact').each(function(){
      var offset_top = $(this).offset().top,
      top_margin = 60 ;
      if( scroll_top > offset_top - top_margin ){
        $('#btn04 section,#btn04 a,#btn04 span').addClass('is-show');
      }else{
        $('#btn04 section,#btn04 a,#btn04 span').removeClass('is-show');
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function(){
    var scroll_top = $(window).scrollTop();
    $('.contact').each(function(){
      var offset_top = $(this).offset().top,
      top_margin = 60 ;
      if( scroll_top > offset_top - top_margin ){
        $('body').addClass('u');
      }else{
        $('body').removeClass('u');
      }
    });
  });
});

$(function(){
  $('back-to-top a').click(function(){
    $('body').animate({
      scrollTop:0
    }, 500);
    return false;
  });
});
