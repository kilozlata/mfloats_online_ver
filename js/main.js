$(window).scroll(function(){
  let sticky = $('.sticky'),
      scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
});
